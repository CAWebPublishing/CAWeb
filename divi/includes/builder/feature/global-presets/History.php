<?php

class ET_Builder_Global_Presets_History {
	const CUSTOM_DEFAULTS_HISTORY_OPTION = 'builder_custom_defaults_history';
	const GLOBAL_PRESETS_HISTORY_OPTION  = 'builder_global_presets_history';
	const GLOBAL_PRESETS_HISTORY_LENGTH  = 100;

	private static $instance;

	private function __construct() {
		$this->_register_ajax_callbacks();
		$this->_register_hooks();
	}

	/**
	 * Returns instance of the singleton class
	 *
	 * @since 4.5.0
	 *
	 * @return ET_Builder_Global_Presets_History
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function _register_ajax_callbacks() {
		add_action(
			'wp_ajax_et_builder_save_global_presets_history',
			array(
				$this,
				'ajax_save_global_presets_history',
			)
		);
		add_action(
			'wp_ajax_et_builder_retrieve_global_presets_history',
			array(
				$this,
				'ajax_retrieve_global_presets_history',
			)
		);
	}

	private function _register_hooks() {
		add_action( 'et_builder_modules_loaded', array( $this, 'migrate_custom_defaults_history' ), 99 );
	}

	/**
	 * Handles AJAX requests to save history of Global Presets settings changes
	 *
	 * @since 4.5.0
	 *
	 * @return void
	 */
	public function ajax_save_global_presets_history() {
		// Allow saving Global Presets for admins and support elevated users only
		if ( ! et_core_security_check_passed( 'switch_themes', 'et_builder_save_global_presets_history' ) ) {
			wp_send_json_error(
				array(
					'code'    => 'et_forbidden',
					'message' => esc_html__( 'You do not have sufficient permissions to edit Divi Presets.', 'et_builder' ),
				)
			);
		}

		$history = json_decode( stripslashes( $_POST['history'] ) );

		if ( self::sanitize_and_validate( $history ) ) {
			$current_settings = $history->history[ $history->index ];
			et_update_option( ET_Builder_Global_Presets_Settings::GLOBAL_PRESETS_OPTION, $current_settings->settings );
			et_update_option( self::GLOBAL_PRESETS_HISTORY_OPTION, $history );
			ET_Core_PageResource::remove_static_resources( 'all', 'all' );

			if ( et_get_option( ET_Builder_Global_Presets_Settings::CUSTOM_DEFAULTS_UNMIGRATED_OPTION, false ) ) {
				et_delete_option( ET_Builder_Global_Presets_Settings::CUSTOM_DEFAULTS_UNMIGRATED_OPTION );
				et_fb_delete_builder_assets();
			}

			ET_Builder_Ajax_Cache::instance()->unset_( 'ET_Builder_Global_Presets_History' );

			wp_send_json_success();
		} else {
			et_core_die( esc_html__( 'Global History data is corrupt.', 'et_builder' ) );
		}
	}

	/**
	 * Handles AJAX requests to retrieve history of Global Presets settings changes
	 *
	 * @since 4.5.0
	 *
	 * @return void
	 */
	public function ajax_retrieve_global_presets_history() {
		if ( ! et_core_security_check_passed( 'edit_posts', 'et_builder_retrieve_global_presets_history' ) ) {
			wp_send_json_error();
		}

		$history = $this->_get_global_presets_history();

		ET_Builder_Ajax_Cache::instance()->set( 'ET_Builder_Global_Presets_History', $history );

		wp_send_json_success( $history );
	}

	/**
	 * Adds a new Global Presets settings history record
	 *
	 * @since 4.5.0
	 *
	 * @param {Object} $defaults
	 */
	public function add_global_history_record( $defaults ) {
		if ( empty( $defaults ) ) {
			return;
		}

		$new_record = (object) array(
			'settings' => $defaults,
			'time'     => time() * 1000,
			'label'    => esc_html__( 'Imported From Layout', 'et_builder' ),
		);

		$history       = $this->_get_global_presets_history();
		$history_index = (int) $history->index;

		$history->history = array_slice( $history->history, 0, $history_index + 1 );
		array_push( $history->history, $new_record );
		$history->index++;

		if ( count( $history->history ) > self::GLOBAL_PRESETS_HISTORY_LENGTH ) {
			$history->history = array_slice( $history->history, -self::GLOBAL_PRESETS_HISTORY_LENGTH );
			$history->index   = min( $history->index, self::GLOBAL_PRESETS_HISTORY_LENGTH - 1 );
		}

		et_update_option( self::GLOBAL_PRESETS_HISTORY_OPTION, $history );
		ET_Core_PageResource::remove_static_resources( 'all', 'all' );
	}

	/**
	 * Performs validation and sanitizing history object.
	 * Returns false if data is invalid or corrupt.
	 *
	 * @since 4.5.0
	 *
	 * @param $data
	 *
	 * @return bool
	 */
	public static function sanitize_and_validate( &$data ) {
		if ( ! is_object( $data ) ) {
			return false;
		}

		$properties = array(
			'history',
			'index',
		);

		foreach ( $properties as $property ) {
			if ( ! property_exists( $data, $property ) ) {
				return false;
			}
		}

		if ( ! is_array( $data->history ) ) {
			return false;
		}

		foreach ( $data->history as &$record ) {
			if ( ! is_object( $record ) ) {
				return false;
			}

			$properties = array(
				'settings',
				'time',
				'label',
			);

			if ( count( (array) $record ) !== count( $properties ) ) {
				return false;
			}

			foreach ( $properties as $property ) {
				if ( ! property_exists( $record, $property ) ) {
					return false;
				}
			}

			foreach ( $record->settings as &$module ) {
				if ( ! is_object( $module ) ) {
					return false;
				}
			}

			if ( ! is_numeric( $record->time ) ) {
				return false;
			}

			$record->label = sanitize_text_field( $record->label );
		}

		$data->index = sanitize_text_field( $data->index );

		return true;
	}

	/**
	 * Handles theme version rollback.
	 *
	 * @since 4.5.0
	 *
	 * @param string $product_name - The short name of the product rolling back.
	 * @param string $rollback_from_version
	 * @param string $rollback_to_version
	 */
	public function after_version_rollback( $product_name, $rollback_from_version, $rollback_to_version ) {
		if ( ! isset( ET_Builder_Global_Presets_Settings::$allowed_products[ $product_name ] ) ) {
			return;
		}

		if ( 0 > version_compare( $rollback_to_version, ET_Builder_Global_Presets_Settings::$allowed_products[ $product_name ] ) ) {
			et_delete_option( self::GLOBAL_PRESETS_HISTORY_OPTION );
		}
	}

	/**
	 * Returns the Global Presets history object from DB
	 *
	 * @since 4.5.0
	 *
	 * @return object
	 */
	private function _get_global_presets_history() {
		$history = et_get_option( self::GLOBAL_PRESETS_HISTORY_OPTION, false );
		if ( ! $history ) {
			$history = (object) array(
				'history' => array(),
				'index'   => - 1,
			);
		}

		return $history;
	}

	/**
	 * Migrates Custom Defaults history format to Global Presets history format
	 *
	 * @since 4.5.0
	 */
	public static function migrate_custom_defaults_history() {
		if ( et_is_builder_plugin_active() || ET_Builder_Global_Presets_Settings::are_custom_defaults_migrated() ) {
			return;
		}

		$history = et_get_option( self::CUSTOM_DEFAULTS_HISTORY_OPTION, false );

		if ( ! $history ) {
			return;
		}

		$all_modules               = ET_Builder_Element::get_modules();
		$migrated_history          = (object) array();
		$migrated_history->history = array();

		foreach ( $history->history as $record ) {
			$migrated_record           = (object) array();
			$migrated_record->settings = (object) array();

			foreach ( $record->settings as $module => $settings ) {
				$migrated_record->settings->$module = ET_Builder_Global_Presets_Settings::generate_module_initial_presets_structure( $module, $all_modules );

				foreach ( $settings as $setting => $value ) {
					$migrated_record->settings->$module->presets->_initial->settings->$setting = $value;
				}
			}

			$migrated_record->time  = $record->time;
			$migrated_record->label = $record->label;

			$migrated_history->history[] = $migrated_record;
		}

		$migrated_history->index = $history->index;

		et_update_option( self::GLOBAL_PRESETS_HISTORY_OPTION, $migrated_history );
	}
}

ET_Builder_Global_Presets_History::instance();

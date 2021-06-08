<?php

class ET_Builder_Global_Presets_Settings {
	const CUSTOM_DEFAULTS_OPTION            = 'builder_custom_defaults';
	const CUSTOM_DEFAULTS_UNMIGRATED_OPTION = 'builder_custom_defaults_unmigrated';
	const CUSTOMIZER_SETTINGS_MIGRATED_FLAG = 'customizer_settings_migrated_flag';

	const GLOBAL_PRESETS_OPTION         = 'builder_global_presets';
	const CUSTOM_DEFAULTS_MIGRATED_FLAG = 'custom_defaults_migrated_flag';
	const MODULE_PRESET_ATTRIBUTE       = '_module_preset';
	const MODULE_INITIAL_PRESET_ID      = '_initial';

	/**
	 * @var array - The list of the product short names we allowing to do a Module Customizer settings migration rollback
	 */
	public static $allowed_products = array(
		'divi'  => '4.5',
		'extra' => '4.5',
	);

	// Migration phase two settings
	public static $phase_two_settings = array(
		'body_font_size',
		'captcha_font_size',
		'caption_font_size',
		'filter_font_size',
		'form_field_font_size',
		'header_font_size',
		'meta_font_size',
		'number_font_size',
		'percent_font_size',
		'price_font_size',
		'sale_badge_font_size',
		'sale_price_font_size',
		'subheader_font_size',
		'title_font_size',
		'toggle_font_size',
		'icon_size',
		'padding',
		'custom_padding',
	);

	protected static $_module_additional_slugs = array(
		'et_pb_section' => array(
			'et_pb_section_fullwidth',
			'et_pb_section_specialty',
		),
		'et_pb_slide'   => array(
			'et_pb_slide_fullwidth',
		),
		'et_pb_column'  => array(
			'et_pb_column_specialty',
		),
	);

	protected static $_module_types_conversion_map = array(
		'et_pb_section'      => '_convert_section_type',
		'et_pb_column'       => '_convert_column_type',
		'et_pb_column_inner' => '_convert_column_type',
		'et_pb_slide'        => '_convert_slide_type',
	);

	protected static $_module_import_types_conversion_map = array(
		'et_pb_section_specialty' => 'et_pb_section',
		'et_pb_section_fullwidth' => 'et_pb_section',
		'et_pb_column_inner'      => 'et_bp_column',
		'et_pb_slide_fullwidth'   => 'et_pb_slide',
		'et_pb_column_specialty'  => 'et_pb_column',
	);

	protected static $_instance;
	protected $_settings;

	protected function __construct() {
		$global_presets = et_get_option( self::GLOBAL_PRESETS_OPTION, (object) array(), '', true );

		$this->_settings = $this->_normalize_global_presets( $global_presets );

		$this->_register_hooks();
	}

	protected function _register_hooks() {
		add_action( 'et_after_version_rollback', array( $this, 'after_version_rollback' ), 10, 3 );
		add_action( 'et_builder_modules_loaded', array( $this, 'migrate_custom_defaults' ), 100 );
	}

	/**
	 * Returns instance of the singleton class
	 *
	 * @since 4.5.0
	 *
	 * @return ET_Builder_Global_Presets_Settings
	 */
	public static function instance() {
		if ( ! isset( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Returns the list of additional module slugs used to separate Global Presets settings.
	 * For example defaults for sections must be separated depends on the section type (regular, fullwidth or specialty).
	 *
	 * @since 4.5.0
	 *
	 * @param $module_slug - The module slug for which additional slugs are looked up
	 *
	 * @return array       - The list of the additional slugs
	 */
	public function get_module_additional_slugs( $module_slug ) {
		if ( ! empty( self::$_module_additional_slugs[ $module_slug ] ) ) {
			return self::$_module_additional_slugs[ $module_slug ];
		}

		return array();
	}

	/**
	 * Returns builder Global Presets settings.
	 *
	 * @since 4.5.0
	 *
	 * @return object
	 */
	public function get_global_presets() {
		return $this->_settings;
	}

	/**
	 * Checks if the gives preset ID exists
	 *
	 * @since 4.5.0
	 *
	 * @param string $module_slug
	 * @param string $preset_id
	 *
	 * @return bool
	 */
	protected function is_module_preset_exist( $module_slug, $preset_id ) {
		return isset( $this->_settings->{$module_slug}->presets->{$preset_id} );
	}

	/**
	 * Returns a default preset ID for the given module type
	 *
	 * @since 4.5.0
	 *
	 * @param string $module_slug
	 *
	 * @return string
	 */
	public function get_module_default_preset_id( $module_slug ) {
		return isset( $this->_settings->{$module_slug}->default )
			? $this->_settings->{$module_slug}->default
			: self::MODULE_INITIAL_PRESET_ID;
	}

	/**
	 * Returns the module preset ID
	 * If the preset ID doesn't exist it will return the default preset ID
	 *
	 * @since 4.5.0
	 *
	 * @param string $module_slug
	 * @param array  $module_attrs
	 *
	 * @return string
	 */
	public function get_module_preset_id( $module_slug, $module_attrs ) {
		$preset_id = et_()->array_get( $module_attrs, self::MODULE_PRESET_ATTRIBUTE, false );

		if ( ! $preset_id || ! $this->is_module_preset_exist( $module_slug, $preset_id ) ) {
			return $this->get_module_default_preset_id( $module_slug );
		}

		return $preset_id;
	}

	/**
	 * Returns the module preset by the given preset ID
	 * Returns an empty object if no preset found
	 *
	 * @since 4.5.0
	 *
	 * @param string $module_slug
	 * @param string $preset_id
	 *
	 * @return stdClass
	 */
	public function get_module_preset( $module_slug, $preset_id ) {
		if ( isset( $this->_settings->{$module_slug}->presets->{$preset_id} ) ) {
			return (object) $this->_settings->{$module_slug}->presets->{$preset_id};
		}

		return (object) array();
	}

	/**
	 * Returns Global Presets settings for the particular module.
	 *
	 * @since 4.5.0
	 *
	 * @param string $module_slug - The module slug
	 * @param array  $attrs        - The module attributes
	 *
	 * @return array
	 */
	public function get_module_presets_settings( $module_slug, $attrs ) {
		$result = array();

		$real_preset_id = $this->get_module_preset_id( $module_slug, $attrs );

		if ( isset( $this->_settings->{$module_slug}->presets->{$real_preset_id}->settings ) ) {
			$result = (array) $this->_settings->{$module_slug}->presets->{$real_preset_id}->settings;
		}

		return $result;
	}

	/**
	 * Checks whether customizer settings migrated or not
	 *
	 * @since 4.5.0
	 *
	 * @return bool
	 */
	public static function is_customizer_migrated() {
		return et_get_option( self::CUSTOMIZER_SETTINGS_MIGRATED_FLAG, false );
	}

	/**
	 * Checks whether Custom Defaults settings migrated or not
	 *
	 * @since 4.5.0
	 *
	 * @return bool
	 */
	public static function are_custom_defaults_migrated() {
		return et_get_option( self::CUSTOM_DEFAULTS_MIGRATED_FLAG, false );
	}

	/**
	 * Migrates Module Customizer settings to Custom Defaults
	 *
	 * @since 4.5.0
	 *
	 * @param array $defaults - The list of modules default settings
	 */
	public function migrate_customizer_settings( $defaults ) {
		$template_directory = get_template_directory();

		require_once $template_directory . '/includes/module-customizer/migrations.php';

		$migrations = ET_Module_Customizer_Migrations::instance();

		list (
			$custom_defaults,
			$custom_defaults_unmigrated,
			) = $migrations->migrate( $defaults );

		et_update_option( self::CUSTOM_DEFAULTS_OPTION, (object) $custom_defaults );
		et_update_option( self::CUSTOMIZER_SETTINGS_MIGRATED_FLAG, true );

		if ( ! empty( $custom_defaults_unmigrated ) ) {
			et_update_option( self::CUSTOM_DEFAULTS_UNMIGRATED_OPTION, (object) $custom_defaults_unmigrated );
		} else {
			et_update_option( self::CUSTOM_DEFAULTS_UNMIGRATED_OPTION, false );
		}
	}

	/**
	 * Generates `_initial` module presets structure
	 *
	 * @since 4.5.0
	 *
	 * @param string $module_slug
	 * @param array  $all_modules
	 *
	 * @return object
	 */
	public static function generate_module_initial_presets_structure( $module_slug, $all_modules ) {
		$structure             = (object) array();
		$module_slug_converted = isset( self::$_module_import_types_conversion_map[ $module_slug ] )
			? self::$_module_import_types_conversion_map[ $module_slug ]
			: $module_slug;

		$preset_name = isset( $all_modules[ $module_slug_converted ]->name )
			? sprintf( esc_html__( '%s Preset', 'et_builder' ), $all_modules[ $module_slug_converted ]->name )
			: esc_html__( 'Preset', 'et_builder' );

		$structure->default                     = '_initial';
		$structure->presets                     = (object) array();
		$structure->presets->_initial           = (object) array();
		$structure->presets->_initial->name     = et_core_esc_previously( "{$preset_name} 1" );
		$structure->presets->_initial->created  = 0;
		$structure->presets->_initial->updated  = 0;
		$structure->presets->_initial->version  = ET_BUILDER_PRODUCT_VERSION;
		$structure->presets->_initial->settings = (object) array();

		return $structure;
	}

	/**
	 * Converts Custom Defaults to the new Global Presets format
	 *
	 * @since 4.5.0
	 *
	 * @param object $custom_defaults - The previous Custom Defaults
	 *
	 * @return object
	 */
	public static function migrate_custom_defaults_to_global_presets( $custom_defaults ) {
		$all_modules = ET_Builder_Element::get_modules();
		$presets     = (object) array();

		foreach ( $custom_defaults as $module => $settings ) {
			$presets->$module = self::generate_module_initial_presets_structure( $module, $all_modules );

			foreach ( $settings as $setting => $value ) {
				$presets->$module->presets->_initial->settings->$setting = $value;
			}
		}

		return $presets;
	}

	/**
	 * Migrates existing Custom Defaults to the Global Presets structure
	 *
	 * @since 4.5.0
	 */
	public function migrate_custom_defaults() {
		if ( self::are_custom_defaults_migrated() ) {
			return;
		}

		// Re-run migration to Global Presets if a user has not yet saved any presets.
		if ( et_is_builder_plugin_active() && ! empty( (array) $this->_settings ) ) {
			et_update_option( self::CUSTOM_DEFAULTS_MIGRATED_FLAG, true );
			return;
		}

		$custom_defaults = et_get_option( self::CUSTOM_DEFAULTS_OPTION, false );

		if ( ! $custom_defaults ) {
			$custom_defaults = (object) array();
		}

		$global_presets = self::migrate_custom_defaults_to_global_presets( $custom_defaults );

		et_update_option( self::GLOBAL_PRESETS_OPTION, $global_presets );
		$this->_settings = $global_presets;

		et_update_option( self::CUSTOM_DEFAULTS_MIGRATED_FLAG, true );
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
		if ( ! isset( self::$allowed_products[ $product_name ] ) ) {
			return;
		}

		if ( 0 > version_compare( $rollback_to_version, self::$allowed_products[ $product_name ] ) ) {
			et_delete_option( self::CUSTOM_DEFAULTS_MIGRATED_FLAG );
		}
	}

	/**
	 * Converts module type (slug).
	 * Used to separate Global Presets settings for modules sharing the same slug but having different meaning
	 * For example: Regular, Fullwidth and Specialty section types
	 *
	 * @since 4.5.0
	 *
	 * @param string $type - The module type (slug)
	 * @param array  $attrs - The module attributes
	 *
	 * @return string      - The converted module type (slug)
	 */
	public function maybe_convert_module_type( $type, $attrs ) {
		if ( isset( self::$_module_types_conversion_map[ $type ] ) ) {
			// @phpcs:ignore Generic.PHP.ForbiddenFunctions.Found
			$type = call_user_func_array(
				array( $this, self::$_module_types_conversion_map[ $type ] ),
				array( $attrs, $type )
			);
		}

		return $type;
	}

	/**
	 * Converts Section module slug to appropriate slug used in Global Presets
	 *
	 * @since 4.5.0
	 *
	 * @param array $attrs - The section attributes
	 *
	 * @return string      - The converted section type depends on the section attributes
	 */
	protected function _convert_section_type( $attrs ) {
		if ( isset( $attrs['fullwidth'] ) && 'on' === $attrs['fullwidth'] ) {
			return 'et_pb_section_fullwidth';
		}

		if ( isset( $attrs['specialty'] ) && 'on' === $attrs['specialty'] ) {
			return 'et_pb_section_specialty';
		}

		return 'et_pb_section';
	}

	/**
	 * Converts Slide module slug to appropriate slug used in Global Presets
	 *
	 * @since 4.5.0
	 *
	 * @return string - The converted slide type depends on the parent slider type
	 */
	protected function _convert_slide_type() {
		global $et_pb_slider_parent_type;

		if ( 'et_pb_fullwidth_slider' === $et_pb_slider_parent_type ) {
			return 'et_pb_slide_fullwidth';
		}

		return 'et_pb_slide';
	}

	/**
	 * Converts Column module slug to appropriate slug used in Global Presets
	 *
	 * @since 4.5.0
	 *
	 * @return string - The converted column type
	 */
	protected function _convert_column_type( $attrs, $type ) {
		global $et_pb_parent_section_type;

		if ( 'et_pb_column_inner' === $type ) {
			return 'et_pb_column';
		}

		if ( 'et_pb_specialty_section' === $et_pb_parent_section_type
			 || ( isset( $attrs['specialty_columns'] ) && '' !== $attrs['specialty_columns'] ) ) {
			return 'et_pb_column_specialty';
		}

		return 'et_pb_column';
	}

	/**
	 * Filters Global Presets setting to avoid non plain values like arrays or objects
	 *
	 * @since 4.5.0
	 *
	 * @param $value - The Global Presets setting value
	 *
	 * @return bool
	 */
	protected static function _filter_global_presets_setting_value( $value ) {
		return ! is_object( $value ) && ! is_array( $value );
	}

	/**
	 * Performs Global Presets format normalization.
	 * Usually used to cast format from array to object
	 *
	 * @since 4.5.0
	 *
	 * @param $presets - The object representing Global Presets settings
	 *
	 * @return object
	 */
	protected function _normalize_global_presets( $presets ) {
		$result = (object) array();

		foreach ( $presets as $module => $preset_structure ) {
			if ( isset( $preset_structure->presets ) ) {
				$result->$module          = (object) array();
				$result->$module->presets = (object) array();

				foreach ( $preset_structure->presets as $preset_id => $preset ) {
					$result->$module->presets->$preset_id          = (object) array();
					$result->$module->presets->$preset_id->name    = $preset->name;
					$result->$module->presets->$preset_id->created = $preset->created;
					$result->$module->presets->$preset_id->updated = $preset->updated;
					$result->$module->presets->$preset_id->version = $preset->version;

					if ( isset( $preset->settings ) ) {
						$result->$module->presets->$preset_id->settings = (object) array();

						$settings_filtered = array_filter(
							(array) $preset->settings,
							array(
								$this,
								'_filter_global_presets_setting_value',
							)
						);

						// Since we still support PHP 5.2 we can't use `array_filter` with array keys
						// So check if defaults have empty key
						if ( isset( $settings_filtered[''] ) ) {
							continue;
						}

						foreach ( $settings_filtered as $setting_name => $value ) {
							$result->$module->presets->$preset_id->settings->$setting_name = $value;
						}
					} else {
						$result->$module->presets->$preset->settings = (object) array();
					}
				}

				$result->$module->default = $preset_structure->default;
			}
		}

		return $result;
	}
}

ET_Builder_Global_Presets_Settings::instance();

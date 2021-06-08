<?php


abstract class ET_Builder_Module_Settings_Migration {

	protected static $_bb_excluded_name_changes = array();

	public static $field_name_migrations = array();

	public static $hooks = array(
		'the_content',
		'admin_enqueue_scripts',
		'et_pb_get_backbone_templates',
		'wp_ajax_et_pb_execute_content_shortcodes',
		'wp_ajax_et_fb_get_saved_layouts',
		'wp_ajax_et_fb_retrieve_builder_data',
	);

	public static $last_hook_checked;
	public static $last_hook_check_decision;
	public static $max_version = '3.27.4';

	public static $migrated   = array();
	public static $migrations = array(
		'3.0.48'  => 'BackgroundUI',
		'3.0.72'  => 'Animation',
		'3.0.74'  => 'OptionsHarmony',
		'3.0.84'  => 'FullwidthHeader',
		'3.0.87'  => 'BorderOptions',
		'3.0.91'  => 'FilterOptions',
		'3.0.92'  => 'ShopModuleSlugs',
		'3.0.94'  => 'DropShadowToBoxShadow',
		'3.0.99'  => 'InnerShadowToBoxShadow',
		'3.0.102' => 'FullwidthHeader2',
		'3.2'     => 'UIImprovements',
		'3.4'     => 'EmailOptinContent',
		'3.6'     => 'ContactFormItemOptionsSerialization',
		'3.12.3'  => 'TeamMemberIconHover',
		'3.16'    => 'HoverOptions',
		'3.17.3'  => 'DiscontinueHtmlEncoding',
		'3.22'    => 'RowCustomWidthToSizing',
		'3.22.3'  => 'RowZeroGutter',
		'3.23'    => 'OptionsHarmony2',
		'3.23.4'  => 'DividerHeight',
		'3.25'    => 'ColumnOptions',
		'3.25.3'  => 'ShopOrderByDefault',
		'3.27.4'  => 'TextAlignment',
	);

	public static $migrations_by_version = array();

	public $fields;
	public $modules;
	public $version;
	public $add_missing_fields = false;

	public function __construct() {
		$this->fields  = $this->get_fields();
		$this->modules = $this->get_modules();
	}

	protected static function _migrate_field_names( $fields, $module_slug, $version ) {
		foreach ( self::$field_name_migrations[ $module_slug ] as $new_name => $old_names ) {
			foreach ( $old_names as $old_name ) {
				if ( ! isset( $fields[ $old_name ] ) ) {
					// Add old to-be-migrated attribute as skipped field if it doesn't exist so its value can be used.
					$fields[ $old_name ] = array( 'type' => 'skip' );
				}

				// For the BB...
				if ( ! in_array( $old_name, self::$_bb_excluded_name_changes ) ) {
					self::$migrated['field_name_changes'][ $module_slug ][ $old_name ] = array(
						'new_name' => $new_name,
						'version'  => $version,
					);
				}
			}
		}

		return $fields;
	}

	abstract public function get_fields();

	public static function get_migrations( $module_version ) {
		if ( isset( self::$migrations_by_version[ $module_version ] ) ) {
			return self::$migrations_by_version[ $module_version ];
		}

		self::$migrations_by_version[ $module_version ] = array();

		if ( 'all' !== $module_version && version_compare( $module_version, self::$max_version, '>=' ) ) {
			return array();
		}

		foreach ( self::$migrations as $version => $migration ) {
			if ( 'all' !== $module_version && version_compare( $module_version, $version, '>=' ) ) {
				continue;
			}

			if ( is_string( $migration ) ) {
				self::$migrations[ $version ] = $migration = require_once "migration/{$migration}.php";
			}

			self::$migrations_by_version[ $module_version ][] = $migration;
		}

		return self::$migrations_by_version[ $module_version ];
	}

	abstract public function get_modules();

	public function get_content_migration_modules() {
		return array();
	}

	public function handle_field_name_migrations( $fields, $module_slug ) {
		if ( ! in_array( $module_slug, $this->modules ) ) {
			return $fields;
		}

		foreach ( $this->fields as $field_name => $field_info ) {
			foreach ( $field_info['affected_fields'] as $affected_field => $affected_modules ) {

				if ( $affected_field === $field_name || ! in_array( $module_slug, $affected_modules ) ) {
					continue;
				}

				foreach ( $affected_modules as $affected_module ) {
					if ( ! isset( self::$field_name_migrations[ $affected_module ][ $field_name ] ) ) {
						self::$field_name_migrations[ $affected_module ][ $field_name ] = array();
					}

					self::$field_name_migrations[ $affected_module ][ $field_name ][] = $affected_field;
				}
			}
		}

		return isset( self::$field_name_migrations[ $module_slug ] )
			? self::_migrate_field_names( $fields, $module_slug, $this->version )
			: $fields;
	}

	public static function init() {
		$class = 'ET_Builder_Module_Settings_Migration';

		add_filter( 'et_pb_module_processed_fields', array( $class, 'maybe_override_processed_fields' ), 10, 2 );
		add_filter( 'et_pb_module_shortcode_attributes', array( $class, 'maybe_override_shortcode_attributes' ), 10, 5 );
		add_filter( 'et_pb_module_content', array( $class, 'maybe_override_content' ), 10, 6 );
	}

	public static function maybe_override_processed_fields( $fields, $module_slug ) {
		if ( ! $fields ) {
			return $fields;
		}

		$migrations = self::get_migrations( 'all' );

		foreach ( $migrations as $migration ) {
			if ( in_array( $module_slug, $migration->modules ) ) {
				$fields = $migration->handle_field_name_migrations( $fields, $module_slug );
			}
		}

		return $fields;
	}

	public static function maybe_override_shortcode_attributes( $attrs, $unprocessed_attrs, $module_slug, $module_address, $content = '' ) {
		if ( empty( $attrs['_builder_version'] ) ) {
			$attrs['_builder_version'] = '3.0.47';
		}

		if ( ! self::_should_handle_render( $module_slug ) ) {
			return $attrs;
		}

		if ( ! is_array( $unprocessed_attrs ) ) {
			$unprocessed_attrs = array();
		}

		$migrations = self::get_migrations( $attrs['_builder_version'] );

		// Register address-based name module's field name change
		if ( isset( self::$migrated['field_name_changes'] ) && isset( self::$migrated['field_name_changes'][ $module_slug ] ) ) {
			foreach ( self::$migrated['field_name_changes'][ $module_slug ] as $old_name => $name_change ) {
				if ( version_compare( $attrs['_builder_version'], $name_change['version'], '<' ) ) {
					self::$migrated['name_changes'][ $module_address ][ $old_name ] = $name_change['new_name'];
				}
			}
		}

		foreach ( $migrations as $migration ) {
			$migrated_attrs_count = 0;

			if ( ! in_array( $module_slug, $migration->modules ) ) {
				continue;
			}

			foreach ( $migration->fields as $field_name => $field_info ) {
				foreach ( $field_info['affected_fields'] as $affected_field => $affected_modules ) {

					if ( ( ! $migration->add_missing_fields && ! isset( $attrs[ $affected_field ] ) ) || ! in_array( $module_slug, $affected_modules ) ) {
						continue;
					}

					if ( $affected_field !== $field_name ) {
						// Field name changed
						$unprocessed_attrs[ $field_name ] = $attrs[ $affected_field ];
					}

					$current_value = isset( $unprocessed_attrs[ $field_name ] ) ? $unprocessed_attrs[ $field_name ] : '';

					$saved_value = isset( $attrs[ $field_name ] ) ? $attrs[ $field_name ] : '';

					$new_value = $migration->migrate( $field_name, $current_value, $module_slug, $saved_value, $affected_field, $attrs, $content, $module_address );

					if ( $new_value !== $saved_value || ( $affected_field !== $field_name && $new_value !== $current_value ) ) {
						$attrs[ $field_name ] = self::$migrated['value_changes'][ $module_address ][ $field_name ] = $new_value;
						$migrated_attrs_count++;
					}
				}
			}

			if ( $migrated_attrs_count > 0 ) {
				$attrs['_builder_version'] = $migration->version;
			}
		}

		return $attrs;
	}

	public static function maybe_override_content( $content, $attrs, $unprocessed_attrs, $module_slug, $module_address, $global_content ) {
		if ( empty( $attrs['_builder_version'] ) ) {
			$attrs['_builder_version'] = '3.0.47';
		}

		if ( ! self::_should_handle_render( $module_slug ) ) {
			return $content;
		}

		$migrations = self::get_migrations( $attrs['_builder_version'] );

		foreach ( $migrations as $migration ) {
			$migrated_content = false;

			if ( ! in_array( $module_slug, $migration->get_content_migration_modules() ) ) {
				continue;
			}

			foreach ( $migration->get_content_migration_modules() as $module ) {
				$new_content = $migration->migrate_content( $module_slug, $attrs, $content );

				if ( $new_content !== $content ) {
					$migrated_content = true;
				}

				$content = $new_content;
			}

			if ( $migrated_content ) {
				$attrs['_builder_version'] = $migration->version;
			}
		}

		return $content;
	}

	abstract public function migrate( $field_name, $current_value, $module_slug, $saved_value, $saved_field_name, $attrs, $content, $module_address );

	// this could have been written as abstract, but its not as common so as to be expected to be implemented by every migration
	public function migrate_content( $module_slug, $attrs, $content ) {
		return $content;
	}

	public static function _should_handle_render( $slug ) {
		if ( false === strpos( $slug, 'et_pb' ) ) {
			return false;
		}

		global $wp_current_filter;
		$current_hook = $wp_current_filter[0];

		if ( $current_hook === self::$last_hook_checked ) {
			return self::$last_hook_check_decision;
		}

		self::$last_hook_checked = $current_hook;

		foreach ( self::$hooks as $hook ) {
			if ( $hook === $current_hook && did_action( $hook ) > 1 ) {
				return self::$last_hook_check_decision = false;
			}
		}

		return self::$last_hook_check_decision = true;
	}
}

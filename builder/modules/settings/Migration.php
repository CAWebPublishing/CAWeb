<?php

if ( ! class_exists( 'ET_Builder_Module_Settings_Migration' ) ) { return; }

abstract class ET_Builder_CAWeb_Module_Settings_Migration extends ET_Builder_Module_Settings_Migration {

	public static $max_version = '1.2.3';

  public static $migrations  = array(
		'1.2.3' => 'Icon',
	);
  public static $migrations_by_version = array();

  public static function init() {
    $class = 'ET_Builder_CAWeb_Module_Settings_Migration';

		add_filter( 'et_pb_module_processed_fields', array( $class, 'maybe_override_processed_fields' ), 10, 2 );
		add_filter( 'et_pb_module_shortcode_attributes', array( $class, 'maybe_override_shortcode_attributes' ), 10, 4 );
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

  
	public static function get_migrations( $module_version ) {
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
  
  public static function maybe_override_shortcode_attributes( $attrs, $unprocessed_attrs, $module_slug, $module_address ) {    
    if ( ! self::_should_handle_shortcode_callback( $module_slug ) ) {
			return $attrs;
		}
    if ( ! is_array( $unprocessed_attrs ) ) {
			$unprocessed_attrs = array();
		}
    
    $migrations = self::get_migrations( 'all');
		$migration_count = count( $migrations );
		$migration_index = 0;
     
    
		foreach ( $migrations as $migration ) {
			$migration_index++;

			if ( ! in_array( $module_slug, $migration->modules ) ) {
				continue;
			}

			// If current module/field is affected by multiple migrations, all migration that takes place before the last one
			// needs to have its whitelisted attributes ($attrs) merged with any attributes that exist in shortcode ($unprocessed_attrs)
			// to avoid migration being blocked with past migration that has similar module/field migrations
			if ( $migration_index < $migration_count ) {
				$attrs = array_merge( $attrs, $unprocessed_attrs );
			}

			foreach ( $migration->fields as $field_name => $field_info ) {
				foreach ( $field_info['affected_fields'] as $affected_field => $affected_modules ) {
					if ( ! isset( $attrs[ $affected_field ] ) || ! in_array( $module_slug, $affected_modules ) ) {
						continue;
					}

					if ( $affected_field !== $field_name ) {
						// Field name changed
						$unprocessed_attrs[ $field_name ] = $attrs[ $affected_field ];
					}

					$current_value = isset( $unprocessed_attrs[ $field_name ] ) ? $unprocessed_attrs[ $field_name ] : '';

					$saved_value = isset( $attrs[ $field_name ] ) ? $attrs[ $field_name ] : '';

					$new_value = $migration->migrate( $field_name, $current_value, $module_slug, $saved_value, $affected_field, $attrs );

					if ( isset( $attrs[ $field_name ] ) && $new_value !== $attrs[ $field_name ] ) {
						$attrs[ $field_name ] = self::$migrated['value_changes'][ $module_address ][ $field_name ] = $new_value;
					}
				}
			}
		}
    
		return $attrs;
  }
}


?>
<?php

class ET_Builder_CAWeb_Module_Settings_Migration_Icon extends ET_Builder_CAWeb_Module_Settings_Migration {
	public $version = '1.2.3';
  
	public function get_fields() {
    return array(
			'font_icon' => array(
				'affected_fields' => array(
					'icon' => $this->get_modules( true ),
				),
			),
		);
    
	}

	public function get_modules( $for_affected_fields = false ) {
		$modules = array(
			'et_pb_ca_panel', 'et_pb_ca_section_footer_group', 'et_pb_ca_location_widget',
      'et_pb_ca_fullwidth_panel', 'et_pb_ca_section_fullwidth_footer_group', 'et_pb_ca_fullwidth_banner'
		);
    
		return $modules;
	}
	public function migrate( $field_name, $current_value, $module_slug, $saved_value, $saved_field_name, $attrs ) {
		if ( '' !== $current_value  ) {
			return $current_value;
		}
	}

}

return new ET_Builder_CAWeb_Module_Settings_Migration_Icon();

?>
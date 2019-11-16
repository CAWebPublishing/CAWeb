<?php

class ET_Builder_CAWeb_Module extends ET_Builder_Module {
	protected $CAWebGoogleMapsEmbedAPIKey = 'AIzaSyCtq3i8ME-Ab_slI2D8te0Uh2PuAQVqZuE';

	protected $module_credits = array(
		'module_uri' => 'https://caweb.cdt.ca.gov/',
		'author'     => 'CAWeb Publishing',
		'author_uri' => '',
	);
	
	protected function _render_module_wrapper( $output = '', $render_slug = '' ) {
		return $output;
	}
	
	function caweb_get_text_sizes( $exclude = array() ) {
		$default_text_size = array(
			'p' => 'Paragraph',
			'h1' => 'H1',
			'h2' => 'H2',
			'h3' => 'H3',
			'h4' => 'H4',
			'h5' => 'H5',
			'h6' => 'H6',
		);
	
		foreach( $exclude as $i => $size ){
			if( isset($default_text_size[$size])){
				unset($default_text_size[$size]);
			}
		}
		
		return $default_text_size;
	}
	
	function caweb_get_address($addr){
		if (empty($addr)) {
			return;
		} elseif (is_string($addr)) {
			$addr = preg_split('/,/', $addr);
		}

		$addr = array_filter($addr);
		$addr = implode(", ", $addr);

		return $addr;
	}
	function caweb_get_google_map_place_link($addr, $embed = false, $target = '_blank', $class = '') {
		
		$addr = $this->caweb_get_address($addr);

		$class = is_array($class) ? implode(' ', $class ) : $class;
		$class = sprintf(' class="%1$s"', $class); 

		if( $embed ){
            $map_url = sprintf('https://www.google.com/maps/embed/v1/place?q=%1$s&zoom=10&key=%2$s', $addr, $this->CAWebGoogleMapsEmbedAPIKey);
			
			return sprintf('<iframe src="%1$s"></iframe>', $map_url);
		}else{
			return sprintf('<a href="https://www.google.com/maps/place/%1$s" target="%2$s"%3$s>%1$s</a>', $addr, $target, $class);
		}
	}

	function parse_divi_font_settings($settings) {
		$fields = array("font", "weight", "italic", "uppercase", "underline", "titlecase", "strikethrough", "linecolor", "linestyle");
		if ( ! is_array($settings)) {
			$settings = explode("|", $settings);
		}


		return count($fields) == count($settings) ? array_combine($fields, $settings) : $settings;
    }

    function create_inline_font_styles($font_settings){
		$styles = "";
		if ( ! empty($font_settings)) {
			$settings = $this->parse_divi_font_settings($font_settings);

			if( isset($settings["font"]) && ! empty($settings["font"] ) ){
				$styles .= ! empty($settings["font"]) ? sprintf('font-family: %1$s;', $settings["font"] ) : '';
			}
			if( isset($settings["weight"]) && ! empty($settings["weight"]) ){
				$styles .= ! empty($settings["weight"]) ? sprintf('font-weight: %1$s;', $settings["weight"] ) : '';
			}
			if( isset($settings["italic"]) && ! empty($settings["italic"]) ){
				$styles .= ! empty($settings["italic"]) ? 'font-style: italic;' : '';
			}
			if( isset($settings["uppercase"]) && ! empty($settings["uppercase"]) ){
				$styles .= ! empty($settings["uppercase"]) ? 'text-transform: uppercase;' : '';
			}
			if( isset($settings["titlecase"]) && ! empty($settings["titlecase"]) ){
				$styles .= ! empty($settings["titlecase"]) ? 'text-transform: capitalize;' : '';
			}
			if( isset($settings["underline"]) && ! empty($settings["underline"]) ){
				$styles .= ! empty($settings["underline"]) ? 'text-decoration: underline;' : '';
			}
			if( isset($settings["strikethrough"]) && ! empty($settings["strikethrough"]) ){
				$styles .= ! empty($settings["strikethrough"]) ? 'text-decoration: line-through;' : '';
			}
			if( isset($settings["linecolor"]) && ! empty($settings["linecolor"]) ){
				$styles .= ! empty($settings["linecolor"]) ? sprintf('text-decoration-color: %1$s;', $settings["linecolor"]) : '';
			}
			if( isset($settings["linestyle"]) && ! empty($settings["linestyle"]) ){
				$styles .= ! empty($settings["linestyle"]) ? sprintf('text-decoration-style: %1$s;', $settings["linestyle"]) : '';
			}
		}

		return $styles;
	}

	// Validates if the $checkmoney parameter is a valid monetary value
	function caweb_is_money($checkmoney, $pattern = '%.2n') {
		if ( ! empty($checkmoney)) {
			$checkmoney = is_string($checkmoney) ? str_replace(array('$',','), '', $checkmoney) : $checkmoney;

			setlocale(LC_MONETARY, get_locale());
			if (is_numeric($checkmoney)) {
				return money_format($pattern, $checkmoney);
			}
		}

		return false;
	}
}

?>
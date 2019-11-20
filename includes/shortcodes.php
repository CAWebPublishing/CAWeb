<?php
/**
 * Shortcodes default Attributes
 * $atts = array of parameters
 * $atts['id'] = id for the element
 * $atts['class'] = class for the element
 * $atts['style'] = style for the element
 */
function caweb_list_of_shortcodes() {
    $shortcodes = array('caweb_google_translate');

    return $shortcodes;
}

function caweb_google_translate_func() {
    return '<div id="google_translate_element" class="custom-translate"></div>';
}
add_shortcode('caweb_google_translate', 'caweb_google_translate_func');
/*
Panel Attributes
$atts['layout'] = various panel designs
none, default, standout, standout highlight, overstated, and understated
$atts['heading'] = Heading for the Panel
$atts['heading_icon'] = Panel Icon for the Heading, can be numerical index or name of icon from get_ca_icon_list()
$atts['button_url'] = Adds a button url to the Panel Heading
$atts['button_text'] = 'Read More' button text unless set

 */
function caweb_panel_func($atts, $content = "") {
    $layouts = array('none', 'default', 'standout', 'standout highlight', 'understated', 'overstated');

    $id = ( ! empty($atts['id']) ? sprintf(' id="%1$s" ', str_replace(' ', '-', $atts['id'])) : '');

    $style = (isset($atts['style']) ? sprintf(' style="%1$s" ', $atts['style']) : '');

    $classes = 'caweb_shortcode panel ';

    if ( ! empty($atts['class'])) {
        $classes .=  sprintf('%1$s ', $atts['class']);
    }

    if (isset($atts['layout'])) {
        $classes .= sprintf('panel-%1$s ', ! in_array($atts['layout'], $layouts) ? 'none' : $atts['layout']);
    } elseif ( ! preg_match('/panel-\w+/', $classes)) {
        $classes .= 'panel-none ';
    }

    $class = sprintf(' class="%1$s" ', $classes);

    $button = '';

    if (isset($atts['button_url'])) {
        $button_text = isset($atts['button_text']) ? $atts['button_text'] : 'Read More';
        $button = sprintf('<div class="options"><a href="%1$s" class="btn btn-default">%2$s</a></div>', esc_url($atts['button_url']), $button_text);
    }

    $headingSize = ! isset($atts['layout']) || "none" == $atts['layout'] ? 'h1' : 'h2';
    $headingIcon = isset($atts['heading_icon']) ? caweb_get_icon_span($atts['heading_icon']) : '';
    $heading = isset($atts['heading']) ?
		sprintf('<div class="panel-heading"><%1$s>%2$s%3$s</%1$s>%4$s</div>', $headingSize, $headingIcon, $atts['heading'], $button) : '';

    if ( ! empty($content)) {
        $content = sprintf('<div class="panel-body"><p>%1$s</p></div>', do_shortcode($content));
    }

    return sprintf('<div%1$s%2$s%3$s>%4$s%5$s</div>', $id, $class, $style, $heading, $content);
}
//add_shortcode('caweb_panel', 'caweb_panel_func');
/*
Section Attributes
$atts['layout'] = section variation
none, default, standout, standout highlight, overstated, and understated

 */
function section_func($atts, $content = "") {
    $id = (isset($atts['id']) ? sprintf(' id="%1$s" ', $atts['id']) : '');
    $classes = (isset($atts['class']) ? sprintf('section %1$s ', $atts['class']) : 'section ');
    $style = (isset($atts['style']) ? sprintf(' style="%1$s" ', $atts['style']) : '');
    if (isset($atts['layout'])) {
        $classes .= sprintf('section-%1$s ', $atts['layout']);
    } else {
        $classes .= 'section-default ';
    }
    $class = sprintf(' class="%1$s" ', $classes);
    if ( ! empty($content)) {
        $content = sprintf('<div class="container">%1$s</div>', do_shortcode($content));
    }

    return sprintf('<div%1$s%2$s%3$s>%4$s</div>', $id, $class, $style, $content);
}
//add_shortcode('section', 'section_func');
/*
Carousel Attributes
$atts['layout'] =

 */
function carousel_func($atts, $content = "") {
    $id = (isset($atts['id']) ? sprintf(' id="%1$s" ', $atts['id']) : '');
    $classes = (isset($atts['class']) ? sprintf('carousel owl-carousel %1$s ', $atts['class']) : 'carousel owl-carousel ');
    $style = (isset($atts['style']) ? sprintf(' style="%1$s" ', $atts['style']) : '');
    if (isset($atts['layout'])) {
        $classes .= sprintf('carousel-%1$s ', $atts['layout']);
    } else {
        $classes .= 'carousel-content ';
    }
    $class = sprintf(' class="%1$s" ', $classes);
    if ( ! empty($content)) {
        $content = do_shortcode($content);
    }

    return sprintf('<div%1$s%2$s%3$s>%4$s</div>', $id, $class, $style, $content);
}
//add_shortcode('carousel', 'carousel_func');

/*
Slide Attributes
$atts['image'] =

 */
function slide_func($atts, $content = "") {
    $id = (isset($atts['id']) ? sprintf(' id="%1$s" ', $atts['id']) : '');
    $classes = (isset($atts['class']) ? sprintf('item %1$s ', $atts['class']) : 'item ');
    $class = sprintf(' class="%1$s" ', $classes);
    if (isset($atts['layout'])) {
        $slide_style = $atts['layout'];
    } else {
        $slide_style = 'content';
    }
    $src = (isset($atts['src']) ? $atts['src'] : '');
    switch ($slide_style) {
			case 'content':
				$style = (isset($atts['style']) ?
				sprintf(' style="%1$s background-image: url(%2$s);" ', $atts['style'], $src) :
				sprintf(' style="background-image: url(%1$s);" ', $src));

			break;
		}
    if ( ! empty($content)) {
        $content = sprintf('<div class="content-container"><div class="content">%1$s</div></div>', do_shortcode($content));
    }

    return sprintf('<div%1$s%2$s%3$s>%4$s</div>', $id, $class, $style, $content);
}
//add_shortcode('slide_item', 'slide_func');
?>

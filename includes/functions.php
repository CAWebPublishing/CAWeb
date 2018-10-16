<?php
/*
	Checks the Site Wide Version and Page Slug Template Version
	If a $post_id is included will check if $version also matches the
	Page Template Version
	$version = Specific Page Template Version  returns true/false

 */
function caweb_version_check($version = 5, $post_id = -1) {
    $result = ($version == get_option('ca_site_version', 5) ? true : false);

    if (-1 < $post_id) {
        $result = ($version == caweb_get_page_version($post_id) ? true : false);
    }

    return $result;
}
/*
	Returns the Site Wide Version Setting
	if post_id is passed will return version
	used by the page template
 */
function caweb_get_page_version($post_id = -1) {
    switch (get_page_template_slug($post_id)) {
	case "page-templates/page-template-v4.php":
		$result = 4;

		break;
  case "page-templates/page-template-v5.php":
		$result = 5;

		break;
	default:
		$result = get_option('ca_site_version', 5);

		break;

	}

    return $result;
}

// Returns array of Menu Theme Locations
function cawen_nav_menu_theme_locations() {
    return array(
        'header-menu' => 'Header Menu',
        'footer-menu' => 'Footer Menu',
    );
}

// Returns array of Theme Color Schemes
function caweb_color_schemes($version = 0, $field = '') {
    $cssDir = sprintf('%1$s/css', CAWebAbsPath);
    $pattern = '/.*\/([\w\s]*)\.css/';

    $schemes = array();

    switch ($version) {
		case 4:
			$tmp = glob(sprintf('%1$s/version4/colorscheme/*.css', $cssDir));

			break;
		case 5:
			$tmp =  glob(sprintf('%1$s/version5/colorscheme/*.css', $cssDir));

			break;
		default:
			$v4_schemes = glob(sprintf('%1$s/version4/colorscheme/*.css', $cssDir));
			$v5_schemes = glob(sprintf('%1$s/version5/colorscheme/*.css', $cssDir));
			$tmp =  array_merge($v4_schemes, $v5_schemes);

			break;
	}

    foreach ($tmp as $css_file) {
        $style = preg_replace($pattern, '\1', $css_file);
        $scheme =  ucwords(strtolower($style));

        $schemekey = strtolower(str_replace(' ', '', $scheme));

        switch ($field) {
			case 'filename':
				$schemes[$schemekey] =  $style;

				break;
			case 'displayname':
				$schemes[$schemekey] =  $scheme;

				break;
			default:
				$schemes[$schemekey] = array('filename' => $style, 'displayname' => $scheme);

				break;

			}
    }

    ksort($schemes);

    return $schemes;
}

function caweb_template_colors() {
    $color['oceanside'] = array(
        'highlight' => '#FDB81E',
        'primary' => '#046B99',
        'standout' => '#323A45',
        's1' => '#E1F2F7'
    );

    $color['orangecounty'] = array(
        'highlight' => '#FBAD23',
        'primary' => '#A15801',
        'standout' => '#483723',
        's1' => '#F1EDE4'
    );

    $color['pasorobles'] = array(
        'highlight' => '#FBAD23',
        'primary' => '#9A0000',
        'standout' => '#313131',
        's1' => '#F5F5F5'
    );
    $color['santabarbara'] = array(
        'highlight' => '#FF9B53',
        'primary' => '#60617D',
        'standout' => '#664945',
        's1' => '#FFEBD7'
    );
    $color['sierra'] = array(
        'highlight' => '#FBAD23',
        'primary' => '#447766',
        'standout' => '#194949',
        's1' => '#EFFAF6'
    );
    $color['mono'] = array(
        'highlight' => '#FFCE2B',
        'primary' => '#545351',
        'standout' => '#191919',
        's1' => '#F4F3EF'
    );
    $color['trinity'] = array(
        'highlight' => '#C19E73',
        'primary' => '#446A7C',
        'standout' => '#21272A',
        's1' => '#F9F8F8'
    );
    $color['eureka'] = array(
        'highlight' => '#D9B295',
        'primary' => '#3E4B4D',
        'standout' => '#21272A',
        's1' => '#F9F8F8'
    );
    $color['sacramento'] = array(
        'highlight' => '#7BB0DA',
        'primary' => '#153554',
        'standout' => '#730000',
        's1' => '#E1ECF7'
    );

    return $color;
}

function caweb_tiny_mce_settings($settings = array()) {
    $styles = array();
    $caweb_tiny_mce_init = apply_filters('tiny_mce_before_init', array(), array());
    $caweb_tiny_mce_init['style_formats'] = json_decode($caweb_tiny_mce_init['style_formats']);

    foreach ($caweb_tiny_mce_init['style_formats'] as $i => $style) {
        $styles[ str_replace(' ', '', strtolower($style->name)) ] = $style;
    }

    $css = array(
        includes_url('/css/dashicons.min.css'),
        includes_url('/js/tinymce/skins/wordpress/wp-content.css'),
        sprintf('%1$s/css/version%2$s/cagov.core.css', CAWebUri, caweb_get_page_version(get_the_ID())),
        sprintf('%1$s/css/admin_custom.css', CAWebUri)
    );

    $defaults_settings = array(
        'media_buttons' => false,
        'quicktags' => false,
        'tinymce' => array(
            'content_css' => implode(',', $css),
            'skin' => 'lightgray',
            'elementpath' => true,
            'entity_encoding' => 'raw',
            'entities' => '38, amp, 60, lt, 62, gt, 34, quot, 39, apos',
            'plugins' => "charmap,colorpicker,hr,lists,paste,tabfocus,textcolor,wordpress,wpautoresize,wpemoji,wpgallery,wplink,wptextpattern",
            'toolbar1' => 'formatselect,bold,italic,underline,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,wp_more,wp_adv',
            'toolbar2' => 'styleselect,strikethrough,hr,fontselect,fontsizeselect,forecolor,backcolor,pastetext,copy,subscript,superscript,charmap,outdent,indent,undo,redo,wp_help',
            'style_formats' =>  $styles
        ),
    );

    return is_array($settings) ? array_merge($defaults_settings, $settings) : $defaults_settings;
}

// Validates if the $checkmoney parameter is a valid monetary value
if ( ! function_exists('caweb_is_money')) {
    function caweb_is_money($checkmoney, $default = false, $pattern = '%.2n') {
        if ( ! empty($checkmoney)) {
            $checkmoney    = (is_string($checkmoney) ? str_replace(',', '', $checkmoney) : $checkmoney);
            $checkmoney    = (is_string($checkmoney) ? str_replace('$', '', $checkmoney) : $checkmoney);

            setlocale(LC_MONETARY, get_locale());
            if (is_numeric($checkmoney)) {
                return money_format($pattern, $checkmoney);
            }
        }

        return $default;
    }
}

/**
 *
 * Returns all child nav_menu_items under a specific parent
 * Source http://wpsmith.net/2011/how-to-get-all-the-children-of-a-specific-nav-menu-item/
 *
 * @parent_id int the parent nav_menu_item ID
 * @nav_menu_items array nav_menu_items
 * @depth bool gives all children or direct children only
 * @nav_menu_item_list array returns filtered array of nav_menu_items
 *
 */
function caweb_get_nav_menu_item_children($parent_id, $nav_menu_items, $depth = true) {
    $nav_menu_item_list = array();

    foreach ((array) $nav_menu_items as $nav_menu_item) {
        if ($nav_menu_item->menu_item_parent == $parent_id) {
            $nav_menu_item_list[] = $nav_menu_item;
            if ($depth) {
                if ($children = caweb_get_nav_menu_item_children($nav_menu_item->ID, $nav_menu_items)) {
                    $nav_menu_item_list = array_merge($nav_menu_item_list, $children);
                }
            }
        }
    }

    return $nav_menu_item_list;
}

function caweb_return_posts($cats = array(), $tags = array(), $post_amount = -1, $orderby='post_date', $order = 'DESC') {
    $posts_array = array();

    $req_array = array();

    $args['category'] = ( ! empty($cats) ? (is_array($cats) ? implode(',', $cats) : $cats) : array());

    $args += array(
        'posts_per_page' => $post_amount,
        'orderby'           => $orderby,
        'order'             => $order,
        'post_type'         => 'post',
        'post_status'       => 'publish',
        'suppress_filters'  => true
    );

    $posts_array = get_posts($args);

    if ( ! empty($tags)) {
        foreach ($posts_array as $p=> $i) {
            //return posts tags
            $tag_ids = wp_get_post_tags($i->ID, array('fields' => 'ids'));

            if (empty($tag_ids)) {
                unset($posts_array[$p]);
            } else {
                // iterate through the tags
                $tags = ( ! is_array($tags) ? preg_split('/\D/', $tags) : $tags);
                foreach ($tag_ids as $k) {
                    if ( ! in_array($k, $tags)) {
                        unset($posts_array[$p]);
                    }
                }
            }
        }
    }

    return $posts_array;
}

// Get User Profile Color
function caweb_get_user_color($element) {
    global $_wp_admin_css_colors;

    $admin_color = get_user_option('admin_color');
    $colors      = $_wp_admin_css_colors[$admin_color]->colors;

    return $colors[$element];
}

function caweb_get_google_map_place_link($addr, $target = '_blank') {
    if (empty($addr)) {
        return;
    } elseif (is_string($addr)) {
        $addr = preg_split('/,/', $addr);
    }

    $addr = array_filter($addr);
    $addr = implode(", ", $addr);

    return sprintf('<a href="https://www.google.com/maps/place/%1$s" target="%2$s">%1$s</a>', $addr, $target);
}

function caweb_get_tag_ID($tag_name) {
    $tag = get_term_by('name', $tag_name, 'post_tag');
    if ($tag) {
        return $tag->term_id;
    }

    return 0;
}

if ( ! function_exists('caweb_get_shortcode_from_content')) {
    function caweb_get_shortcode_from_content($con = "", $tag = "", $all_matches = false) {
        if (empty($con) || empty($tag)) {
            return array();
        }
        $results = array();
        $objects = array();

        $tag = is_array($tag) ? implode('|', $tag) : $tag;

        // Get Shortcode Tags from Con and save it to $results
        $pattern = sprintf('/\[(%1$s)[\d\s\w\S]+?\[\/\1\]|\[(%1$s)[\d\s\w\S]+? \/\]/', $tag);
        preg_match_all($pattern, $con, $results);
        // if there are no matches return an empty array
        if (empty($results)) {
            return array();
        }
        // if there are results save only the matches
        $matches = $results[0];

        // iterate thru each match
        foreach ($matches as $m => $match) {
            $obj = array();
            $attr = array();
            // matching tag can either be self-closing or not
            // non self-closing matching tags are results[1]
            // self-closing matching tags are results[2]
            // if non self-closing tag is empty assume self-closing
            $matching_tag =  ! empty($results[1][$m]) ? $results[1][$m] : $results[2][$m];

            // If the shortcode is a self closing tag, then it contains content in between its Shortcode Tags
            // Get content from shortcode
            preg_match(sprintf('/"\][\s\S]*\[\/(%1$s)/', $matching_tag), $match, $obj['content']);

            if ( ! empty($obj['content'])) {
                // substring the attributes, removing the content from the match
                $match = substr($match, 1, strpos($match, $obj['content'][0]));
                $obj['content'] = substr($obj['content'][0], 2, strlen($obj['content'][0]) - strlen($matching_tag) - 4);
            // If the shortcode is not a self closing tag, then it only contains one Shortcode Tag
            } else {
                $obj['content'] = '';
            }

            // Get Attributes from Shortcode
            preg_match_all('/\w*="[\w\s\d$:(),@?\'=+%!#\/\.\[\]\{\}-]*/', $match, $attr);
            foreach ($attr[0] as $a) {
                preg_match('/\w*/', $a, $key);
                $obj[$key[0]] = urldecode(substr($a, strlen($key[0]) + 2));
            }

            $objects[] =  (object) $obj;
        }

        if ($all_matches) {
            return $objects;
        }

        return  ! empty($objects) ? $objects[0] : array();
    }
}

function caweb_banner_content_filter($content, $ver = 5) {
    $module = caweb_get_shortcode_from_content($content, 'et_pb_ca_fullwidth_banner');

    if (4 !== $ver) {
        return;
    }
    // Filter the Header Slideshow Banner
    if ( ! empty($module)) {
        $slides = caweb_get_shortcode_from_content($module->content, 'et_pb_ca_fullwidth_banner_item', true);
        $carousel = '';

        foreach ($slides as $i => $slide) {
            $heading = '';
            $info = '';
            if ("on" == $slide->display_banner_info) {
                $link = ( ! empty($slide->button_link) ? $slide->button_link : '#');

                if ( ! isset($slide->display_heading) || "on" == $slide->display_heading) {
                    $heading = sprintf('<span class="title">%1$s<br /></span>', (isset($slide->heading) ? $slide->heading : ''));
                }

                $info = sprintf('<a href="%1$s"><p class="slide-text">%2$s%3$s</p></a>', $link, $heading, (isset($slide->button_text) ? $slide->button_text : ''));
            }
            $carousel .= sprintf('<div class="slide" %1$s>%2$s</div> ',
                              (isset($slide->background_image) ?
                               sprintf('style="background-image: url(%1$s);"', $slide->background_image) : ""), $info);
        }

        $banner = sprintf('<div class="header-slideshow-banner">
          <div id="primary-carousel" class="carousel carousel-banner">
            %1$s</div></div>', $carousel);

        return $banner;
    }
}

// CA.gov Icon Library List
function caweb_get_icon_list($index = -1, $name = '', $keys = false) {
    $icons = array('logo'=>'&amp;#xe600;', 'home'=>'&amp;#xe601;', 'menu'=>'&amp;#xe602;', 'apps'=>'&amp;#xe603;', 'search'=>'&amp;#xe604;', 'chat'=>'&amp;#xe605;', 'capitol'=>'&amp;#xe606;',
        'state'=>'&amp;#xe607;', 'phone'=>'&amp;#xe608;', 'email'=>'&amp;#xe609;', 'contact-us'=>'&amp;#xe66e;', 'calendar'=>'&amp;#xe60a;', 'bear'=>'&amp;#xe60b;', 'chat-bubble'=>'&amp;#xe66f;', 'info-bubble'=>'&amp;#xe670;',
        'share-button'=>'&amp;#xe671;', 'share-facebook'=>'&amp;#xe672;', 'share-email'=>'&amp;#xe673;', 'share-flickr'=>'&amp;#xe674;', 'share-twitter'=>'&amp;#xe675;', 'share-linkedin'=>'&amp;#xe676;', 'share-googleplus'=>'&amp;#xe677;',
        'share-instagram'=>'&amp;#xe678;', 'share-pinterest'=>'&amp;#xe679;', 'share-vimeo'=>'&amp;#xe67a;', 'share-youtube'=>'&amp;#xe67b;', 'law-enforcement'=>'&amp;#xe60c;', 'justice-legal'=>'&amp;#xe60d;', 'at-sign'=>'&amp;#xe60e;',
        'attachment'=>'&amp;#xe60f;', 'zipped-file'=>'&amp;#xe610;', 'powerpoint'=>'&amp;#xe611;', 'excel'=>'&amp;#xe612;', 'word'=>'&amp;#xe613;', 'pdf'=>'&amp;#xe614;', 'share'=>'&amp;#xe615;', 'facebook'=>'&amp;#xe616;', 'linkedin'=>'&amp;#xe617;',
        'youtube'=>'&amp;#xe618;', 'twitter'=>'&amp;#xe619;', 'pinterest'=>'&amp;#xe61a;', 'vimeo'=>'&amp;#xe61b;', 'instagram'=>'&amp;#xe61c;', 'flickr'=>'&amp;#xe61d;', 'google-plus'=>'&amp;#xe66d;', 'microsoft'=>'&amp;#xe61e;', 'apple'=>'&amp;#xe61f;',
        'android'=>'&amp;#xe620;', 'computer'=>'&amp;#xe621;', 'tablet'=>'&amp;#xe622;', 'smartphone'=>'&amp;#xe623;', 'roadways'=>'&amp;#xe624;', 'travel-car'=>'&amp;#xe625;', 'travel-air'=>'&amp;#xe626;', 'truck-delivery'=>'&amp;#xe627;',
        'construction'=>'&amp;#xe628;', 'bar-chart'=>'&amp;#xe629;', 'pie-chart'=>'&amp;#xe62a;', 'graph'=>'&amp;#xe62b;', 'server'=>'&amp;#xe62c;', 'download'=>'&amp;#xe62d;', 'cloud-download'=>'&amp;#xe62e;', 'cloud-upload'=>'&amp;#xe62f;',
        'shield'=>'&amp;#xe630;', 'fire'=>'&amp;#xe631;', 'binoculars'=>'&amp;#xe632;', 'compass'=>'&amp;#xe633;', 'sos'=>'&amp;#xe634;', 'shopping-cart'=>'&amp;#xe635;', 'video-camera'=>'&amp;#xe636;', 'camera'=>'&amp;#xe637;', 'green'=>'&amp;#xe638;',
        'loud-speaker'=>'&amp;#xe639;', 'audio'=>'&amp;#xe63a;', 'print'=>'&amp;#xe63b;', 'medical'=>'&amp;#xe63c;', 'zoom-out'=>'&amp;#xe63d;', 'zoom-in'=>'&amp;#xe63e;', 'important'=>'&amp;#xe63f;', 'chat-bubbles'=>'&amp;#xe640;', 'call'=>'&amp;#xe641;',
        'people'=>'&amp;#xe642;', 'person'=>'&amp;#xe643;', 'user-id'=>'&amp;#xe644;', 'payment-card'=>'&amp;#xe645;', 'skip-backwards'=>'&amp;#xe646;', 'play'=>'&amp;#xe647;', 'pause'=>'&amp;#xe648;', 'skip-forward'=>'&amp;#xe649;', 'mail'=>'&amp;#xe64a;',
        'image'=>'&amp;#xe64b;', 'house'=>'&amp;#xe64c;', 'gear'=>'&amp;#xe64d;', 'tool'=>'&amp;#xe64e;', 'time'=>'&amp;#xe64f;', 'cal'=>'&amp;#xe650;', 'check-list'=>'&amp;#xe651;', 'document'=>'&amp;#xe652;', 'clipboard'=>'&amp;#xe653;',
        'page'=>'&amp;#xe654;', 'read-book'=>'&amp;#xe655;', 'cc-copyright'=>'&amp;#xe656;', 'ca-capitol'=>'&amp;#xe657;', 'ca-state'=>'&amp;#xe658;', 'favorite'=>'&amp;#xe659;', 'rss'=>'&amp;#xe65a;', 'road-pin'=>'&amp;#xe65b;', 'online-services'=>'&amp;#xe65c;',
        'link'=>'&amp;#xe65d;', 'magnify-glass'=>'&amp;#xe65e;', 'key'=>'&amp;#xe65f;', 'lock'=>'&amp;#xe660;', 'info'=>'&amp;#xe661;', 'arrow-up'=>'&amp;#xe04b;', 'arrow-down'=>'&amp;#xe04c;', 'arrow-left'=>'&amp;#xe04d;', 'arrow-right'=>'&amp;#xe04e;',
        'carousel-prev'=>'&amp;#xe666;', 'carousel-next'=>'&amp;#xe667;', 'arrow-prev'=>'&amp;#xe668;', 'arrow-next'=>'&amp;#xe669;', 'menu-toggle-closed'=>'&amp;#xe66a;', 'menu-toggle-open'=>'&amp;#xe66b;', 'carousel-play'=>'&amp;#xe907;',
        'carousel-pause'=>'&amp;#xe66c;', 'search-right'=>'&amp;#x55;', 'graduate'=>'&amp;#xe903;', 'briefcase'=>'&amp;#xe901;', 'images'=>'&amp;#xe904;', 'gears'=>'&amp;#xe900;', 'tools'=>'&amp;#xe035;', 'pencil'=>'&amp;#x6a;', 'pencil-edit'=>'&amp;#x6c;',
        'science'=>'&amp;#xe00a;', 'film'=>'&amp;#xe024;', 'table'=>'&amp;#xe025;', 'flowchart'=>'&amp;#xe0df;', 'building'=>'&amp;#xe0fd;', 'searching'=>'&amp;#xe0f7;', 'wallet'=>'&amp;#xe0d8;', 'tags'=>'&amp;#xe07c;', 'currency'=>'&amp;#xe0f3;',
        'idea'=>'&amp;#xe902;', 'lightbulb'=>'&amp;#xe072;', 'calculator'=>'&amp;#xe0e7;', 'drive'=>'&amp;#xe0e5;', 'globe'=>'&amp;#xe0e3;', 'hourglass'=>'&amp;#xe0e1;', 'mic'=>'&amp;#xe07f;', 'volume'=>'&amp;#xe069;', 'music'=>'&amp;#xe08e;',
        'folder'=>'&amp;#xe05c;', 'grid'=>'&amp;#xe08c;', 'archive'=>'&amp;#xe088;', 'contacts'=>'&amp;#xe087;', 'book'=>'&amp;#xe086;', 'drawer'=>'&amp;#xe084;', 'map'=>'&amp;#xe083;', 'pushpin'=>'&amp;#xe082;', 'location'=>'&amp;#xe081;',
        'quote-fill'=>'&amp;#xe06a;', 'question-fill'=>'&amp;#xe064;', 'warning-triangle'=>'&amp;#xe063;', 'warning-fill'=>'&amp;#xe062;', 'check-fill'=>'&amp;#xe052;', 'close-fill'=>'&amp;#xe051;', 'plus-fill'=>'&amp;#xe050;', 'minus-fill'=>'&amp;#xe04f;',
        'caret-fill-right'=>'&amp;#xe046;', 'caret-fill-left'=>'&amp;#xe045;', 'caret-fill-down'=>'&amp;#xe044;', 'caret-fill-up'=>'&amp;#xe043;', 'caret-fill-two-right'=>'&amp;#xe04a;', 'caret-fill-two-left'=>'&amp;#xe049;',
        'caret-fill-two-down'=>'&amp;#xe048;', 'caret-fill-two-up'=>'&amp;#xe047;', 'arrow-fill-right'=>'&amp;#xe03c;', 'arrow-fill-left'=>'&amp;#xe03b;', 'arrow-fill-up'=>'&amp;#xe039;', 'arrow-fill-down'=>'&amp;#xe03a;', 'arrow-fill-left-down'=>'&amp;#xe040;',
        'arrow-fill-right-down'=>'&amp;#xe03f;', 'arrow-fill-left-up'=>'&amp;#xe03d;', 'arrow-fill-right-up'=>'&amp;#xe03e;', 'triangle-line-right'=>'&amp;#x49;', 'triangle-line-left'=>'&amp;#x48;', 'triangle-line-up'=>'&amp;#x46;', 'triangle-line-down'=>'&amp;#x47;',
        'caret-line-two-right'=>'&amp;#x41;', 'caret-line-two-left'=>'&amp;#x40;', 'caret-line-two-up'=>'&amp;#x3e;', 'caret-line-two-down'=>'&amp;#x3f;', 'caret-line-right'=>'&amp;#x3d;', 'caret-line-left'=>'&amp;#x3c;', 'caret-line-up'=>'&amp;#x3a;',
        'caret-line-down'=>'&amp;#x3b;', 'important-line'=>'&amp;#xe906;', 'info-line'=>'&amp;#xe905;', 'check-line'=>'&amp;#x52;', 'question-line'=>'&amp;#xe908;', 'close-line'=>'&amp;#x51;', 'plus-line'=>'&amp;#x50;', 'minus-line'=>'&amp;#x4f;',
        'question'=>'&amp;#xe909;', 'minus-mark'=>'&amp;#x4b;', 'plus-mark'=>'&amp;#x4c;', 'collapse'=>'&amp;#x58;', 'expand'=>'&amp;#x59;', 'check-mark'=>'&amp;#x4e;', 'close-mark'=>'&amp;#x4d;', 'triangle-right'=>'&amp;#x45;', 'triangle-left'=>'&amp;#x44;',
        'triangle-up'=>'&amp;#x42;', 'triangle-down'=>'&amp;#x43;', 'caret-two-right'=>'&amp;#x39;', 'caret-two-left'=>'&amp;#x38;', 'caret-two-down'=>'&amp;#x37;', 'caret-two-up'=>'&amp;#x36;', 'caret-right'=>'&amp;#x35;', 'caret-left'=>'&amp;#x34;',
        'caret-up'=>'&amp;#x32;', 'caret-down'=>'&amp;#x33;', 'filter'=>'&amp;#xe90a;', 'caweb'=>'&amp;#xe90b;', 'arrow_up'=>'&amp;#x21;', 'arrow_down'=>'&amp;#x22;', 'arrow_left'=>'&amp;#x23;', 'arrow_right'=>'&amp;#x24;', 'arrow_left-up'=>'&amp;#x25;',
        'arrow_right-up'=>'&amp;#x26;', 'arrow_right-down'=>'&amp;#x27;', 'arrow_left-down'=>'&amp;#x28;', 'arrow-up-down'=>'&amp;#x29;', 'arrow_up-down_alt'=>'&amp;#x2a;', 'arrow_left-right_alt'=>'&amp;#x2b;', 'arrow_left-right'=>'&amp;#x2c;',
        'arrow_expand_alt2'=>'&amp;#x2d;', 'arrow_expand_alt'=>'&amp;#x2e;', 'arrow_condense'=>'&amp;#x2f;', 'arrow_expand'=>'&amp;#x30;', 'arrow_move'=>'&amp;#x31;', 'arrow_back'=>'&amp;#x4a;', 'icon_zoom-out_alt'=>'&amp;#x53;', 'icon_zoom-in_alt'=>'&amp;#x54;',
        'icon_box-empty'=>'&amp;#x56;', 'icon_box-selected'=>'&amp;#x57;', 'icon_box-checked'=>'&amp;#x5a;', 'icon_circle-empty'=>'&amp;#x5b;', 'icon_circle-slelected'=>'&amp;#x5c;', 'icon_stop_alt2'=>'&amp;#x5d;', 'icon_stop'=>'&amp;#x5e;', 'icon_pause_alt2'=>'&amp;#x5f;',
        'icon_pause'=>'&amp;#x60;', 'icon_menu'=>'&amp;#x61;', 'icon_menu-square_alt2'=>'&amp;#x62;', 'icon_menu-circle_alt2'=>'&amp;#x63;', 'icon_ul'=>'&amp;#x64;', 'icon_ol'=>'&amp;#x65;', 'icon_adjust-horiz'=>'&amp;#x66;', 'icon_adjust-vert'=>'&amp;#x67;',
        'icon_document_alt'=>'&amp;#x68;', 'icon_documents_alt'=>'&amp;#x69;', 'icon_pencil-edit_alt'=>'&amp;#x6b;', 'icon_folder-alt'=>'&amp;#x6d;', 'icon_folder-open_alt'=>'&amp;#x6e;', 'icon_folder-add_alt'=>'&amp;#x6f;', 'icon_error-circle_alt'=>'&amp;#x72;',
        'icon_error-triangle_alt'=>'&amp;#x73;', 'icon_comment_alt'=>'&amp;#x76;', 'icon_chat_alt'=>'&amp;#x77;', 'icon_vol-mute_alt'=>'&amp;#x78;', 'icon_volume-low_alt'=>'&amp;#x79;', 'icon_volume-high_alt'=>'&amp;#x7a;', 'icon_quotations'=>'&amp;#x7b;',
        'icon_quotations_alt2'=>'&amp;#x7c;', 'icon_clock_alt'=>'&amp;#x7d;', 'icon_lock_alt'=>'&amp;#x7e;', 'icon_lock-open_alt'=>'&amp;#xe000;', 'icon_key_alt'=>'&amp;#xe001;', 'icon_cloud_alt'=>'&amp;#xe002;', 'icon_cloud-upload_alt'=>'&amp;#xe003;',
        'icon_cloud-download_alt'=>'&amp;#xe004;', 'icon_lightbulb_alt'=>'&amp;#xe007;', 'icon_house_alt'=>'&amp;#xe009;', 'icon_laptop'=>'&amp;#xe00d;', 'icon_camera_alt'=>'&amp;#xe00f;', 'icon_mail_alt'=>'&amp;#xe010;', 'icon_cone_alt'=>'&amp;#xe011;',
        'icon_ribbon_alt'=>'&amp;#xe012;', 'icon_bag_alt'=>'&amp;#xe013;', 'icon_creditcard'=>'&amp;#xe014;', 'icon_cart_alt'=>'&amp;#xe015;', 'icon_paperclip'=>'&amp;#xe016;', 'icon_tag_alt'=>'&amp;#xe017;', 'icon_tags_alt'=>'&amp;#xe018;',
        'icon_trash_alt'=>'&amp;#xe019;', 'icon_cursor_alt'=>'&amp;#xe01a;', 'icon_mic_alt'=>'&amp;#xe01b;', 'icon_compass_alt'=>'&amp;#xe01c;', 'icon_pin_alt'=>'&amp;#xe01d;', 'icon_pushpin_alt'=>'&amp;#xe01e;', 'icon_map_alt'=>'&amp;#xe01f;',
        'icon_drawer_alt'=>'&amp;#xe020;', 'icon_toolbox_alt'=>'&amp;#xe021;', 'icon_book_alt'=>'&amp;#xe022;', 'icon_calendar'=>'&amp;#xe023;', 'icon_contacts_alt'=>'&amp;#xe026;', 'icon_headphones'=>'&amp;#xe027;', 'icon_refresh'=>'&amp;#xe02a;',
        'icon_link_alt'=>'&amp;#xe02b;', 'icon_link'=>'&amp;#xe02c;', 'icon_loading'=>'&amp;#xe02d;', 'icon_blocked'=>'&amp;#xe02e;', 'icon_archive_alt'=>'&amp;#xe02f;', 'icon_heart_alt'=>'&amp;#xe030;', 'icon_printer'=>'&amp;#xe103;', 'icon_calulator'=>'&amp;#xe0ee;',
        'icon_building'=>'&amp;#xe0ef;', 'icon_floppy'=>'&amp;#xe0e8;', 'icon_drive'=>'&amp;#xe0ea;', 'icon_search'=>'&#xe101;', 'icon_id'=>'&amp;#xe107;', 'icon_id-2'=>'&amp;#xe108;', 'icon_puzzle'=>'&amp;#xe102;', 'icon_like'=>'&amp;#xe106;', 'icon_dislike'=>'&amp;#xe0eb;',
        'icon_mug'=>'&amp;#xe105;', 'icon_currency'=>'&amp;#xe0ed;', 'icon_wallet'=>'&amp;#xe100;', 'icon_pens'=>'&amp;#xe104;', 'icon_easel'=>'&amp;#xe0e9;', 'icon_flowchart'=>'&amp;#xe109;', 'icon_datareport'=>'&amp;#xe0ec;', 'icon_briefcase'=>'&amp;#xe0fe;',
        'icon_shield'=>'&amp;#xe0f6;', 'icon_percent'=>'&amp;#xe0fb;', 'icon_globe'=>'&amp;#xe0e2;', 'icon_target'=>'&amp;#xe0f5;', 'icon_balance'=>'&amp;#xe0ff;', 'icon_star_alt'=>'&amp;#xe031;', 'icon_star-half_alt'=>'&amp;#xe032;', 'icon_star-half'=>'&amp;#xe034;',
        'icon_cog'=>'&amp;#xe037;', 'icon_cogs'=>'&amp;#xe038;', 'arrow_condense_alt'=>'&amp;#xe041;', 'arrow_expand_alt3'=>'&amp;#xe042;', 'icon_zoom-out'=>'&amp;#xe053;', 'icon_zoom-in'=>'&amp;#xe054;', 'icon_stop_alt'=>'&amp;#xe055;',
        'icon_menu-square_alt'=>'&amp;#xe056;', 'icon_menu-circle_alt'=>'&amp;#xe057;', 'icon_document'=>'&amp;#xe058;', 'icon_documents'=>'&amp;#xe059;', 'icon_pencil_alt'=>'&amp;#xe05a;', 'icon_folder'=>'&amp;#xe05b;', 'icon_folder-add'=>'&amp;#xe05d;',
        'icon_folder_upload'=>'&amp;#xe05e;', 'icon_folder_download'=>'&amp;#xe05f;', 'icon_error-circle'=>'&amp;#xe061;', 'icon_comment'=>'&amp;#xe065;', 'icon_chat'=>'&amp;#xe066;', 'icon_vol-mute'=>'&amp;#xe067;', 'icon_volume-low'=>'&amp;#xe068;',
        'icon_clock'=>'&amp;#xe06b;', 'icon_lock'=>'&amp;#xe06c;', 'icon_lock-open'=>'&amp;#xe06d;', 'icon_key'=>'&amp;#xe06e;', 'icon_cloud'=>'&amp;#xe06f;', 'icon_cloud-upload'=>'&amp;#xe070;', 'icon_cloud-download'=>'&amp;#xe071;', 'icon_gift'=>'&amp;#xe073;',
        'icon_house'=>'&amp;#xe074;', 'icon_mail'=>'&amp;#xe076;', 'icon_cone'=>'&amp;#xe077;', 'icon_ribbon'=>'&amp;#xe078;', 'icon_bag'=>'&amp;#xe079;', 'icon_cart'=>'&amp;#xe07a;', 'icon_tag'=>'&amp;#xe07b;', 'icon_trash'=>'&amp;#xe07d;',
        'icon_cursor'=>'&amp;#xe07e;', 'icon_compass'=>'&amp;#xe080;', 'icon_heart'=>'&amp;#xe089;', 'icon_pause_alt'=>'&amp;#xe08f;', 'icon_phone'=>'&amp;#xe090;', 'icon_upload'=>'&amp;#xe091;', 'icon_download'=>'&amp;#xe092;', 'icon_rook'=>'&amp;#xe0f8;',
        'icon_floppy_alt'=>'&amp;#xe0e4;', 'icon_id_alt'=>'&amp;#xe0e0;', 'icon_puzzle_alt'=>'&amp;#xe0f9;', 'icon_like_alt'=>'&amp;#xe0dd;', 'icon_dislike_alt'=>'&amp;#xe0f1;', 'icon_mug_alt'=>'&amp;#xe0dc;', 'icon_pens_alt'=>'&amp;#xe0db;',
        'icon_briefcase_alt'=>'&amp;#xe0f4;', 'icon_shield_alt'=>'&amp;#xe0d9;', 'icon_percent_alt'=>'&amp;#xe0da;', 'icon_globe_alt'=>'&amp;#xe0de;', 'icon_clipboard'=>'&amp;#xe0e6;', 'social_googleplus'=>'&amp;#xe096;', 'social_tumblr'=>'&amp;#xe097;',
        'social_tumbleupon'=>'&amp;#xe098;', 'social_wordpress'=>'&amp;#xe099;', 'social_dribbble'=>'&amp;#xe09b;', 'social_deviantart'=>'&amp;#xe09f;', 'social_myspace'=>'&amp;#xe0a1;', 'social_skype'=>'&amp;#xe0a2;', 'social_picassa'=>'&amp;#xe0a4;',
        'social_googledrive'=>'&amp;#xe0a5;', 'social_flickr'=>'&amp;#xe0a6;', 'social_blogger'=>'&amp;#xe0a7;', 'social_spotify'=>'&amp;#xe0a8;', 'social_delicious'=>'&amp;#xe0a9;', 'social_facebook_circle'=>'&amp;#xe0aa;',
        'social_twitter_circle'=>'&amp;#xe0ab;', 'social_pinterest_circle'=>'&amp;#xe0ac;', 'social_googleplus_circle'=>'&amp;#xe0ad;', 'social_tumblr_circle'=>'&amp;#xe0ae;', 'social_stumbleupon_circle'=>'&amp;#xe0af;',
        'social_wordpress_circle'=>'&amp;#xe0b0;', 'social_instagram_circle'=>'&amp;#xe0b1;', 'social_dribbble_circle'=>'&amp;#xe0b2;', 'social_vimeo_circle'=>'&amp;#xe0b3;', 'social_linkedin_circle'=>'&amp;#xe0b4;', 'social_rss_circle'=>'&amp;#xe0b5;',
        'social_deviantart_circle'=>'&amp;#xe0b6;', 'social_share_circle'=>'&amp;#xe0b7;', 'social_myspace_circle'=>'&amp;#xe0b8;', 'social_skype_circle'=>'&amp;#xe0b9;', 'social_youtube_circle'=>'&amp;#xe0ba;', 'social_picassa_circle'=>'&amp;#xe0bb;',
        'social_googledrive_alt2'=>'&amp;#xe0bc;', 'social_flickr_circle'=>'&amp;#xe0bd;', 'social_blogger_circle'=>'&amp;#xe0be;', 'social_spotify_circle'=>'&amp;#xe0bf;', 'social_delicious_circle'=>'&amp;#xe0c0;', 'social_tumblr_square'=>'&amp;#xe0c5;',
        'social_stumbleupon_square'=>'&amp;#xe0c6;', 'social_wordpress_square'=>'&amp;#xe0c7;', 'social_instagram_square'=>'&amp;#xe0c8;', 'social_dribbble_square'=>'&amp;#xe0c9;', 'social_rss_square'=>'&amp;#xe0cc;',
        'social_deviantart_square'=>'&amp;#xe0cd;', 'social_share_square'=>'&amp;#xe0ce;', 'social_myspace_square'=>'&amp;#xe0cf;', 'social_skype_square'=>'&amp;#xe0d0;', 'social_picassa_square'=>'&amp;#xe0d2;', 'social_googledrive_square'=>'&amp;#xe0d3;',
        'social_flickr_square'=>'&amp;#xe0d4;', 'social_blogger_square'=>'&amp;#xe0d5;', 'social_spotify_square'=>'&amp;#xe0d6;', 'social_delicious_square'=>'&amp;#xe0d7;', 'toggle'=>'&amp;#x70;', 'tabs'=>'&amp;#x2018;', 'subscribe'=>'&amp;#x2019;',
        'slider'=>'&amp;#x201c;', 'sidebar'=>'&amp;#x201d;', 'share2'=>'&#x2022;', 'pricing-table'=>'&amp;#x2013;', 'portfolio'=>'&amp;#x2014;', 'number-counter'=>'&amp;#x2dc;', 'header'=>'&amp;#x2122;', 'filtered-portfolio'=>'&amp;#x161;', 'divider'=>'&amp;#x203a;',
        'cta'=>'&amp;#x153;', 'countdown'=>'&amp;#x71;', 'circle-counter'=>'&amp;#x17e;', 'blurb'=>'&amp;#x178;', 'bar-counters'=>'&amp;#xe093;', 'audio2'=>'&#xe094;', 'accordion'=>'&amp;#xe095;', 'icon_gift_alt'=>'&amp;#xe008;', 'code'=>'&amp;#xe036;');

    if (0 < $index) {
        return  isset(array_values($icons)[$index]) ? array_values($icons)[$index] : $index;
    }

    if ( ! empty($name)) {
        return  isset($icons[$name]) ? $icons[$name] : $name;
    }

    if ($keys) {
        return array_keys($icons);
    }

    return $icons;
}

// Merger of Divi and CAWeb Icon Font Library
add_filter('et_pb_font_icon_symbols', 'caweb_et_pb_font_icon_symbols');
function caweb_et_pb_font_icon_symbols($divi_symbols = array()) {
    $symbols = array_values(caweb_get_icon_list());

    return $symbols;
}

function caweb_get_icon_span($font, $style = array(), $classes = array()) {
    if (empty($font)) {
        return '';
    }

    // "%22" are saved as double quotes in shortcode attributes. Encode them back into %22
    $font = str_replace('"', '%22', $font);

    $tmp = caweb_get_icon_list();

    $style = is_string($style) ? explode(';', $style) : $style;
    $style = ! empty($style) ? sprintf('style="%1$s" ', implode($style, ';')) : '';
    $classes = implode($classes, ' ');

    if (isset($tmp[$font])) {
        return sprintf('<span class="ca-gov-icon-%1$s %2$s" %3$s></span> ', $font, $classes, $style);
    }

    if (preg_match("/^%%/", trim($font))) {
        $font_index = preg_replace('/%%/', '', $font);

        return sprintf('<span class="ca-gov-icon-%1$s %2$s" %3$s></span> ',
								 caweb_get_icon_list(-1, '', true)[$font_index], $classes, $style);
    }
}

function caweb_get_blank_icon_span() {
    return '<span style="visibility:hidden;" class="ca-gov-icon-logo"></span>';
}

if ( ! function_exists('caweb_get_excerpt')) {
    function caweb_get_excerpt($con, $excerpt_length) {
        if (empty($con)) {
            return $con;
        }

        $con_array = explode(" ", $con);

        if (count($con_array) > $excerpt_length) {
            $excerpt = array_splice($con_array, 0, $excerpt_length);
            $excerpt = implode(" ", $excerpt).'...';

            return $excerpt;
        }

        return $con;
    }
}

function caweb_get_the_post_thumbnail($post = null, $size = 'thumbnail', $attr = '', $pixel_size = array()) {
    if (is_array($size)) {
        if (empty($pixel_size) && 2 == count($size)) {
            $pixel_size = $size;
        }
        $size = 'thumbnail';
    }
    $thumbnail = get_the_post_thumbnail($post, $size, $attr);

    // if there is no thumbnail return
    if (empty($thumbnail)) {
        return;
    }
    // theres is a thumbnail, and the pixel sizes is empty or has more than 2 elements
    // return the thumbnail untouched
    if (empty($pixel_size) || 2 !== count($pixel_size)) {
        return $thumbnail;
    }

    // remove the current width and height size attributes and
    // srcset attribute
    $thumbnail = preg_replace(array('/(width|height)=\"\d*\"\s/', '/(width|height):[\s\d\w]*;?/', '/(srcset)=\".*\"/'), "", $thumbnail);

    $style = '';
    // remove style attribute
    if (preg_match('/style=\"([\w\d\s]*)\"/', $thumbnail, $matches)) {
        $style = $matches[1];
        $thumbnail = preg_replace(array('/style=\"([\w\d\s]*)\"/'), "", $thumbnail);
    }

    $new_img = sprintf('<img style="width:%1$spx;height:%2$spx;%3$s" ', $pixel_size[0], $pixel_size[1], $style);

    $thumbnail = preg_replace('/<img /', $new_img, $thumbnail);

    return $thumbnail;
}
?>

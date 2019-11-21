<?php

/*
	Returns the Site Wide Version Setting
	if post_id is passed will return version
	used by the page template
 */
function caweb_get_page_version( $post_id = -1 ) {
	switch ( get_page_template_slug( $post_id ) ) {
		case 'page-templates/page-template-v4.php':
			$result = 4;

			break;
		case 'page-templates/page-template-v5.php':
			  $result = 5;

			break;
		default:
			$result = get_option( 'ca_site_version', 5 );

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
function caweb_color_schemes( $version = 0, $field = '' ) {
	$cssDir  = sprintf( '%1$s/assets/css/cagov', CAWebAbsPath );
	$pattern = '/.*\/([\w\s]*)\.css/';

	$schemes = array();

	switch ( $version ) {
		case 4:
			$tmp = glob( sprintf( '%1$s/version4/colorscheme/*.css', $cssDir ) );

			break;
		case 5:
			$tmp = glob( sprintf( '%1$s/version5/colorscheme/*.css', $cssDir ) );

			break;
		default:
			$v4_schemes = glob( sprintf( '%1$s/version4/colorscheme/*.css', $cssDir ) );
			$v5_schemes = glob( sprintf( '%1$s/version5/colorscheme/*.css', $cssDir ) );
			$tmp        = array_merge( $v4_schemes, $v5_schemes );

			break;
	}

	foreach ( $tmp as $css_file ) {
		$style  = preg_replace( $pattern, '\1', $css_file );
		$scheme = ucwords( strtolower( $style ) );

		$schemekey = strtolower( str_replace( ' ', '', $scheme ) );

		switch ( $field ) {
			case 'filename':
				$schemes[ $schemekey ] = $style;

				break;
			case 'displayname':
				$schemes[ $schemekey ] = $scheme;

				break;
			default:
				$schemes[ $schemekey ] = array(
					'filename'    => $style,
					'displayname' => $scheme,
				);

				break;

		}
	}

	ksort( $schemes );

	return $schemes;
}

function caweb_template_colors() {
	$color['oceanside'] = array(
		'highlight' => '#FDB81E',
		'primary'   => '#046B99',
		'standout'  => '#323A45',
		's1'        => '#E1F2F7',
	);

	$color['orangecounty'] = array(
		'highlight' => '#FBAD23',
		'primary'   => '#A15801',
		'standout'  => '#483723',
		's1'        => '#F1EDE4',
	);

	$color['pasorobles']   = array(
		'highlight' => '#FBAD23',
		'primary'   => '#9A0000',
		'standout'  => '#313131',
		's1'        => '#F5F5F5',
	);
	$color['santabarbara'] = array(
		'highlight' => '#FF9B53',
		'primary'   => '#60617D',
		'standout'  => '#664945',
		's1'        => '#FFEBD7',
	);
	$color['sierra']       = array(
		'highlight' => '#FBAD23',
		'primary'   => '#447766',
		'standout'  => '#194949',
		's1'        => '#EFFAF6',
	);
	$color['mono']         = array(
		'highlight' => '#FFCE2B',
		'primary'   => '#545351',
		'standout'  => '#191919',
		's1'        => '#F4F3EF',
	);
	$color['trinity']      = array(
		'highlight' => '#C19E73',
		'primary'   => '#446A7C',
		'standout'  => '#21272A',
		's1'        => '#F9F8F8',
	);
	$color['eureka']       = array(
		'highlight' => '#D9B295',
		'primary'   => '#3E4B4D',
		'standout'  => '#21272A',
		's1'        => '#F9F8F8',
	);
	$color['sacramento']   = array(
		'highlight' => '#7BB0DA',
		'primary'   => '#153554',
		'standout'  => '#730000',
		's1'        => '#E1ECF7',
	);

	return $color;
}

function caweb_font_sizes( $exclude = array(), $values = false ) {
	$sizes = array(
		8  => '8pt',
		9  => '9pt',
		10 => '10pt',
		11 => '11pt',
		12 => '12pt',
		13 => '13pt',
		14 => '14pt',
		15 => '15pt',
		16 => '16pt',
		17 => '17pt',
		18 => '18pt',
		19 => '19pt',
		20 => '20pt',
		21 => '21pt',
		22 => '22pt',
		23 => '23pt',
		24 => '24pt',
		25 => '25pt',
		26 => '26pt',
		27 => '27pt',
		28 => '28pt',
		29 => '29pt',
		30 => '30pt',
		31 => '31pt',
		32 => '32pt',
		33 => '33pt',
		34 => '34pt',
		35 => '35pt',
		36 => '36pt',
	);

	foreach ( $exclude as $i => $size ) {
		if ( isset( $sizes[ $size ] ) ) {
			unset( $sizes[ $size ] );
		}
	}

	return $values ? array_values( $sizes ) : $sizes;
}

function caweb_tiny_mce_settings( $settings = array() ) {
	$styles                               = array();
	$caweb_tiny_mce_init                  = apply_filters( 'tiny_mce_before_init', array(), array() );
	$caweb_tiny_mce_init['style_formats'] = json_decode( $caweb_tiny_mce_init['style_formats'] );

	foreach ( $caweb_tiny_mce_init['style_formats'] as $i => $style ) {
		$styles[ str_replace( ' ', '', strtolower( $style->name ) ) ] = $style;
	}

	$version     = caweb_get_page_version( get_the_ID() );
	$color       = get_option( 'ca_site_color_scheme', 'oceanside' );
	$schemes     = caweb_color_schemes( $version, 'filename' );
	$colorscheme = isset( $schemes[ $color ] ) ? $schemes[ $color ] : 'oceanside';

	$adminCSS = '/css/admin.css';
	$adminCSS = file_exists( CAWebAbsPath . str_replace( '.css', '.min.css', $adminCSS ) ) ? str_replace( '.css', '.min.css', $adminCSS ) : $adminCSS;
	$adminCSS = CAWebUri . $adminCSS;

	$editorCSS = "/css/cagov-v$version-$colorscheme.css";
	$editorCSS = file_exists( CAWebAbsPath . str_replace( '.css', '.min.css', $editorCSS ) ) ? str_replace( '.css', '.min.css', $editorCSS ) : $editorCSS;
	$editorCSS = CAWebUri . $editorCSS;

	$css = array(
		includes_url( '/css/dashicons.min.css' ),
		includes_url( '/js/tinymce/skins/wordpress/wp-content.css' ),
		$editorCSS,
		$adminCSS,
	);

	$defaults_settings = array(
		'media_buttons' => false,
		'quicktags'     => true,
		'tinymce'       => array(
			'content_css'     => implode( ',', $css ),
			'skin'            => 'lightgray',
			'elementpath'     => true,
			'entity_encoding' => 'raw',
			'entities'        => '38, amp, 60, lt, 62, gt, 34, quot, 39, apos',
			'plugins'         => 'charmap,colorpicker,hr,lists,paste,tabfocus,textcolor,wordpress,wpautoresize,wpemoji,wpgallery,wplink,wptextpattern',
			'toolbar1'        => 'formatselect,bold,italic,underline,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,wp_more,wp_adv',
			'toolbar2'        => 'styleselect,strikethrough,hr,fontselect,fontsizeselect,forecolor,backcolor,pastetext,copy,subscript,superscript,charmap,outdent,indent,undo,redo,wp_help',
			'style_formats'   => $styles,
		),
	);

	return is_array( $settings ) ? array_merge( $defaults_settings, $settings ) : $defaults_settings;
}

// Validates if the $checkmoney parameter is a valid monetary value
if ( ! function_exists( 'caweb_is_money' ) ) {
	function caweb_is_money( $checkmoney, $default = false, $pattern = '%.2n' ) {
		if ( ! empty( $checkmoney ) ) {
			$checkmoney = ( is_string( $checkmoney ) ? str_replace( ',', '', $checkmoney ) : $checkmoney );
			$checkmoney = ( is_string( $checkmoney ) ? str_replace( '$', '', $checkmoney ) : $checkmoney );

			setlocale( LC_MONETARY, get_locale() );
			if ( is_numeric( $checkmoney ) ) {
				return money_format( $pattern, $checkmoney );
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
 */
function caweb_get_nav_menu_item_children( $parent_id, $nav_menu_items, $depth = true ) {
	$nav_menu_item_list = array();

	foreach ( (array) $nav_menu_items as $nav_menu_item ) {
		if ( $nav_menu_item->menu_item_parent == $parent_id ) {
			$nav_menu_item_list[] = $nav_menu_item;
			if ( $depth ) {
				if ( $children = caweb_get_nav_menu_item_children( $nav_menu_item->ID, $nav_menu_items ) ) {
					$nav_menu_item_list = array_merge( $nav_menu_item_list, $children );
				}
			}
		}
	}

	return $nav_menu_item_list;
}

function caweb_return_posts( $cats = array(), $tags = array(), $post_amount = -1, $orderby = 'post_date', $order = 'DESC' ) {
	$posts_array = array();

	$req_array = array();

	$args['category'] = ( ! empty( $cats ) ? ( is_array( $cats ) ? implode( ',', $cats ) : $cats ) : array() );

	$args += array(
		'posts_per_page'    => $post_amount,
		'orderby'           => $orderby,
		'order'             => $order,
		'post_type'         => 'post',
		'post_status'       => 'publish',
		'suppress_filters'  => true,
	);

	$posts_array = get_posts( $args );

	if ( ! empty( $tags ) ) {
		foreach ( $posts_array as $p => $i ) {
			// return posts tags
			$tag_ids = wp_get_post_tags( $i->ID, array( 'fields' => 'ids' ) );

			if ( empty( $tag_ids ) ) {
				unset( $posts_array[ $p ] );
			} else {
				// iterate through the tags
				$tags = ( ! is_array( $tags ) ? preg_split( '/\D/', $tags ) : $tags );
				foreach ( $tag_ids as $k ) {
					if ( ! in_array( $k, $tags ) ) {
						unset( $posts_array[ $p ] );
					}
				}
			}
		}
	}

	return $posts_array;
}

// Get User Profile Color
function caweb_get_user_color( $element ) {
	global $_wp_admin_css_colors;

	$admin_color = get_user_option( 'admin_color' );
	$colors      = $_wp_admin_css_colors[ $admin_color ]->colors;

	return $colors[ $element ];
}

function caweb_get_google_map_place_link( $addr, $target = '_blank' ) {
	if ( empty( $addr ) ) {
		return;
	} elseif ( is_string( $addr ) ) {
		$addr = preg_split( '/,/', $addr );
	}

	$addr = array_filter( $addr );
	$addr = implode( ', ', $addr );

	return sprintf( '<a href="https://www.google.com/maps/place/%1$s" target="%2$s">%1$s</a>', $addr, $target );
}

function caweb_get_tag_ID( $tag_name ) {
	$tag = get_term_by( 'name', $tag_name, 'post_tag' );
	if ( $tag ) {
		return $tag->term_id;
	}

	return 0;
}

if ( ! function_exists( 'caweb_get_shortcode_from_content' ) ) {
	function caweb_get_shortcode_from_content( $con = '', $tag = '', $all_matches = false ) {
		if ( empty( $con ) || empty( $tag ) ) {
			return array();
		}
		$results = array();
		$objects = array();

		$tag = is_array( $tag ) ? implode( '|', $tag ) : $tag;

		// Get Shortcode Tags from Con and save it to $results
		$pattern = sprintf( '/\[(%1$s)[\d\s\w\S]+?\[\/\1\]|\[(%1$s)[\d\s\w\S]+? \/\]/', $tag );
		preg_match_all( $pattern, $con, $results );
		// if there are no matches return an empty array
		if ( empty( $results ) ) {
			return array();
		}
		// if there are results save only the matches
		$matches = $results[0];

		// iterate thru each match
		foreach ( $matches as $m => $match ) {
			$obj  = array();
			$attr = array();
			// matching tag can either be self-closing or not
			// non self-closing matching tags are results[1]
			// self-closing matching tags are results[2]
			// if non self-closing tag is empty assume self-closing
			$matching_tag = ! empty( $results[1][ $m ] ) ? $results[1][ $m ] : $results[2][ $m ];

			// If the shortcode is a self closing tag, then it contains content in between its Shortcode Tags
			// Get content from shortcode
			preg_match( sprintf( '/"\][\s\S]*\[\/(%1$s)/', $matching_tag ), $match, $obj['content'] );

			if ( ! empty( $obj['content'] ) ) {
				// substring the attributes, removing the content from the match
				$match          = substr( $match, 1, strpos( $match, $obj['content'][0] ) );
				$obj['content'] = substr( $obj['content'][0], 2, strlen( $obj['content'][0] ) - strlen( $matching_tag ) - 4 );
				// If the shortcode is not a self closing tag, then it only contains one Shortcode Tag
			} else {
				$obj['content'] = '';
			}

			// Get Attributes from Shortcode
			preg_match_all( '/\w*="[\w\s\d$:(),@?\'=+%!#\/\.\[\]\{\}-]*/', $match, $attr );
			foreach ( $attr[0] as $a ) {
				preg_match( '/\w*/', $a, $key );
				$obj[ $key[0] ] = urldecode( substr( $a, strlen( $key[0] ) + 2 ) );
			}

			$objects[] = (object) $obj;
		}

		if ( $all_matches ) {
			return $objects;
		}

		return ! empty( $objects ) ? $objects[0] : array();
	}
}

function caweb_banner_content_filter( $content, $ver = 5 ) {
	$module = caweb_get_shortcode_from_content( $content, 'et_pb_ca_fullwidth_banner' );

	if ( 4 !== $ver ) {
		return;
	}
	// Filter the Header Slideshow Banner
	if ( ! empty( $module ) ) {
		$slides   = caweb_get_shortcode_from_content( $module->content, 'et_pb_ca_fullwidth_banner_item', true );
		$carousel = '';

		foreach ( $slides as $i => $slide ) {
			$heading = '';
			$info    = '';
			if ( 'on' == $slide->display_banner_info ) {
				$link = ( ! empty( $slide->button_link ) ? $slide->button_link : '#' );

				if ( ! isset( $slide->display_heading ) || 'on' == $slide->display_heading ) {
					$heading = sprintf( '<span class="title">%1$s<br /></span>', ( isset( $slide->heading ) ? $slide->heading : '' ) );
				}

				$info = sprintf( '<a href="%1$s"><p class="slide-text">%2$s%3$s</p></a>', $link, $heading, ( isset( $slide->button_text ) ? $slide->button_text : '' ) );
			}
			$carousel .= sprintf(
				'<div class="slide" %1$s>%2$s</div> ',
				( isset( $slide->background_image ) ?
							   sprintf( 'style="background-image: url(%1$s);"', $slide->background_image ) : '' ),
				$info
			);
		}

		$banner = sprintf(
			'<div class="header-slideshow-banner">
          <div id="primary-carousel" class="carousel carousel-banner">
            %1$s</div></div>',
			$carousel
		);

		return $banner;
	}
}

// CA.gov Icon Library List
function caweb_get_icon_list( $index = -1, $name = '', $keys = false ) {
	// This array is required and needs to be updated whenever new icons are added
	// This ensures that icons appear in the list in the correct order
	$icons = array_flip(
		array( 'logo', 'home', 'menu', 'apps', 'search', 'chat', 'capitol', 'state', 'phone', 'email', 'contact-us', 'calendar', 'bear', 'chat-bubble', 'info-bubble', 'share-button', 'share-facebook', 'share-email', 'share-flickr', 'share-twitter', 'share-linkedin', 'share-googleplus', 'share-instagram', 'share-pinterest', 'share-vimeo', 'share-youtube', 'law-enforcement', 'justice-legal', 'at-sign', 'attachment', 'zipped-file', 'powerpoint', 'excel', 'word', 'pdf', 'share', 'facebook', 'linkedin', 'youtube', 'twitter', 'pinterest', 'vimeo', 'instagram', 'flickr', 'google-plus', 'microsoft', 'apple', 'android', 'computer', 'tablet', 'smartphone', 'roadways', 'travel-car', 'travel-air', 'truck-delivery', 'construction', 'bar-chart', 'pie-chart', 'graph', 'server', 'download', 'cloud-download', 'cloud-upload', 'shield', 'fire', 'binoculars', 'compass', 'sos', 'shopping-cart', 'video-camera', 'camera', 'green', 'loud-speaker', 'audio', 'print', 'medical', 'zoom-out', 'zoom-in', 'important', 'chat-bubbles', 'call', 'people', 'person', 'user-id', 'payment-card', 'skip-backwards', 'play', 'pause', 'skip-forward', 'mail', 'image', 'house', 'gear', 'tool', 'time', 'cal', 'check-list', 'document', 'clipboard', 'page', 'read-book', 'cc-copyright', 'ca-capitol', 'ca-state', 'favorite', 'rss', 'road-pin', 'online-services', 'link', 'magnify-glass', 'key', 'lock', 'info', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'carousel-prev', 'carousel-next', 'arrow-prev', 'arrow-next', 'menu-toggle-closed', 'menu-toggle-open', 'carousel-play', 'carousel-pause', 'search-right', 'graduate', 'briefcase', 'images', 'gears', 'tools', 'pencil', 'pencil-edit', 'science', 'film', 'table', 'flowchart', 'building', 'searching', 'wallet', 'tags', 'currency', 'idea', 'lightbulb', 'calculator', 'drive', 'globe', 'hourglass', 'mic', 'volume', 'music', 'folder', 'grid', 'archive', 'contacts', 'book', 'drawer', 'map', 'pushpin', 'location', 'quote-fill', 'question-fill', 'warning-triangle', 'warning-fill', 'check-fill', 'close-fill', 'plus-fill', 'minus-fill', 'caret-fill-right', 'caret-fill-left', 'caret-fill-down', 'caret-fill-up', 'caret-fill-two-right', 'caret-fill-two-left', 'caret-fill-two-down', 'caret-fill-two-up', 'arrow-fill-right', 'arrow-fill-left', 'arrow-fill-up', 'arrow-fill-down', 'arrow-fill-left-down', 'arrow-fill-right-down', 'arrow-fill-left-up', 'arrow-fill-right-up', 'triangle-line-right', 'triangle-line-left', 'triangle-line-up', 'triangle-line-down', 'caret-line-two-right', 'caret-line-two-left', 'caret-line-two-up', 'caret-line-two-down', 'caret-line-right', 'caret-line-left', 'caret-line-up', 'caret-line-down', 'important-line', 'info-line', 'check-line', 'question-line', 'close-line', 'plus-line', 'minus-line', 'question', 'minus-mark', 'plus-mark', 'collapse', 'expand', 'check-mark', 'close-mark', 'triangle-right', 'triangle-left', 'triangle-up', 'triangle-down', 'caret-two-right', 'caret-two-left', 'caret-two-down', 'caret-two-up', 'caret-right', 'caret-left', 'caret-up', 'caret-down', 'filter', 'caweb', 'arrow_up', 'arrow_down', 'arrow_left', 'arrow_right', 'arrow_left-up', 'arrow_right-up', 'arrow_right-down', 'arrow_left-down', 'arrow-up-down', 'arrow_up-down_alt', 'arrow_left-right_alt', 'arrow_left-right', 'arrow_expand_alt2', 'arrow_expand_alt', 'arrow_condense', 'arrow_expand', 'arrow_move', 'arrow_back', 'icon_zoom-out_alt', 'icon_zoom-in_alt', 'icon_box-empty', 'icon_box-selected', 'icon_box-checked', 'icon_circle-empty', 'icon_circle-slelected', 'icon_stop_alt2', 'icon_stop', 'icon_pause_alt2', 'icon_pause', 'icon_menu', 'icon_menu-square_alt2', 'icon_menu-circle_alt2', 'icon_ul', 'icon_ol', 'icon_adjust-horiz', 'icon_adjust-vert', 'icon_document_alt', 'icon_documents_alt', 'icon_pencil-edit_alt', 'icon_folder-alt', 'icon_folder-open_alt', 'icon_folder-add_alt', 'icon_error-circle_alt', 'icon_error-triangle_alt', 'icon_comment_alt', 'icon_chat_alt', 'icon_vol-mute_alt', 'icon_volume-low_alt', 'icon_volume-high_alt', 'icon_quotations', 'icon_quotations_alt2', 'icon_clock_alt', 'icon_lock_alt', 'icon_lock-open_alt', 'icon_key_alt', 'icon_cloud_alt', 'icon_cloud-upload_alt', 'icon_cloud-download_alt', 'icon_lightbulb_alt', 'icon_house_alt', 'icon_laptop', 'icon_camera_alt', 'icon_mail_alt', 'icon_cone_alt', 'icon_ribbon_alt', 'icon_bag_alt', 'icon_creditcard', 'icon_cart_alt', 'icon_paperclip', 'icon_tag_alt', 'icon_tags_alt', 'icon_trash_alt', 'icon_cursor_alt', 'icon_mic_alt', 'icon_compass_alt', 'icon_pin_alt', 'icon_pushpin_alt', 'icon_map_alt', 'icon_drawer_alt', 'icon_toolbox_alt', 'icon_book_alt', 'icon_calendar', 'icon_contacts_alt', 'icon_headphones', 'icon_refresh', 'icon_link_alt', 'icon_link', 'icon_loading', 'icon_blocked', 'icon_archive_alt', 'icon_heart_alt', 'icon_printer', 'icon_calulator', 'icon_building', 'icon_floppy', 'icon_drive', 'icon_search', 'icon_id', 'icon_id-2', 'icon_puzzle', 'icon_like', 'icon_dislike', 'icon_mug', 'icon_currency', 'icon_wallet', 'icon_pens', 'icon_easel', 'icon_flowchart', 'icon_datareport', 'icon_briefcase', 'icon_shield', 'icon_percent', 'icon_globe', 'icon_target', 'icon_balance', 'icon_star_alt', 'icon_star-half_alt', 'icon_star-half', 'icon_cog', 'icon_cogs', 'arrow_condense_alt', 'arrow_expand_alt3', 'icon_zoom-out', 'icon_zoom-in', 'icon_stop_alt', 'icon_menu-square_alt', 'icon_menu-circle_alt', 'icon_document', 'icon_documents', 'icon_pencil_alt', 'icon_folder', 'icon_folder-add', 'icon_folder_upload', 'icon_folder_download', 'icon_error-circle', 'icon_comment', 'icon_chat', 'icon_vol-mute', 'icon_volume-low', 'icon_clock', 'icon_lock', 'icon_lock-open', 'icon_key', 'icon_cloud', 'icon_cloud-upload', 'icon_cloud-download', 'icon_gift', 'icon_house', 'icon_mail', 'icon_cone', 'icon_ribbon', 'icon_bag', 'icon_cart', 'icon_tag', 'icon_trash', 'icon_cursor', 'icon_compass', 'icon_heart', 'icon_pause_alt', 'icon_phone', 'icon_upload', 'icon_download', 'icon_rook', 'icon_floppy_alt', 'icon_id_alt', 'icon_puzzle_alt', 'icon_like_alt', 'icon_dislike_alt', 'icon_mug_alt', 'icon_pens_alt', 'icon_briefcase_alt', 'icon_shield_alt', 'icon_percent_alt', 'icon_globe_alt', 'icon_clipboard', 'social_googleplus', 'social_tumblr', 'social_tumbleupon', 'social_wordpress', 'social_dribbble', 'social_deviantart', 'social_myspace', 'social_skype', 'social_picassa', 'social_googledrive', 'social_flickr', 'social_blogger', 'social_spotify', 'social_delicious', 'social_facebook_circle', 'social_twitter_circle', 'social_pinterest_circle', 'social_googleplus_circle', 'social_tumblr_circle', 'social_stumbleupon_circle', 'social_wordpress_circle', 'social_instagram_circle', 'social_dribbble_circle', 'social_vimeo_circle', 'social_linkedin_circle', 'social_rss_circle', 'social_deviantart_circle', 'social_share_circle', 'social_myspace_circle', 'social_skype_circle', 'social_youtube_circle', 'social_picassa_circle', 'social_googledrive_alt2', 'social_flickr_circle', 'social_blogger_circle', 'social_spotify_circle', 'social_delicious_circle', 'social_tumblr_square', 'social_stumbleupon_square', 'social_wordpress_square', 'social_instagram_square', 'social_dribbble_square', 'social_rss_square', 'social_deviantart_square', 'social_share_square', 'social_myspace_square', 'social_skype_square', 'social_picassa_square', 'social_googledrive_square', 'social_flickr_square', 'social_blogger_square', 'social_spotify_square', 'social_delicious_square', 'toggle', 'tabs', 'subscribe', 'slider', 'sidebar', 'share2', 'pricing-table', 'portfolio', 'number-counter', 'header', 'filtered-portfolio', 'divider', 'cta', 'countdown', 'circle-counter', 'blurb', 'bar-counters', 'audio2', 'accordion', 'icon_gift_alt', 'code', 'hours', 'hours-security', 'albums', 'brain', 'certificate', 'certificate-check', 'charge', 'charge-cycle', 'charge-units', 'city', 'clock', 'cloud-gear', 'cloud-services', 'cloud-sync', 'ear', 'ear-slash', 'eye', 'eye-slash', 'file', 'file-audio', 'file-certificate', 'file-check', 'file-code', 'file-csv', 'file-download', 'file-excel', 'file-export', 'file-import', 'file-invoice', 'file-medical', 'file-medical-alt', 'file-pdf', 'file-powerpoint', 'file-prescription', 'file-upload', 'file-video', 'file-word', 'file-zip', 'filter-solid', 'fingerprint', 'fingerprint-check', 'hand', 'hand-money', 'handshake', 'institute', 'medical-bubble', 'medical-care', 'medical-case', 'medical-clinic', 'medical-cross', 'medical-doctor', 'medical-heart', 'medical-pills', 'mobile', 'pro-services', 'puzzle', 'puzzle-piece', 'recycle', 'responsive', 'responsive-alt', 'security-network', 'security-system', 'shield-check', 'thumb-up', 'trophy', 'users', 'users-alt', 'users-dialog', 'users-interaction', 'video', 'beaker3', 'beaker4', 'beaker5', 'candle-alt', 'cal-bear', 'biohazard', 'malware', 'radiation', 'chemical-hazard', 'danger', 'do-not-sign', 'earthquake', 'quake-house', 'quake-hazard', 'electricity-hazard', 'flood', 'hazard', 'hurricane', 'sea-level-rise', 'severe-weather', 'stop-fire', 'stop-hand', 'tornado', 'tsunami', 'volcano', 'warning-circle', 'warning-square', 'tent', 'campfire', 'dam', 'download-cloud', 'upload-cloud', 'sea-level-rise-alt', 'tsunami-alt', 'collapse-all', 'sign-language', 'drag', 'agriculture', 'cannabis', 'angry', 'happy', 'visa', 'mastercard', 'amexcard', 'apple-pay', 'discovercard', 'paypal', 'chrome', 'firefox', 'ie', 'opera', 'safari', 'bell', 'bookmark', 'books', 'reader', 'palette', 'glass', 'heart', 'digging', 'gas-pump', 'idea-alt', 'medal', 'smoking', 'no-smoking', 'share-snapchat', 'snapchat', 'expand-all' )
	);

	$svg   = CAWebAbsPath . '/fonts/CaGov.svg';
	$con   = file_get_contents( $svg );
	$xml   = new SimpleXMLElement( $con );
	$fonts = $xml->defs->font;
	unset( $fonts->glyph[0] );

	foreach ( $fonts->glyph as $g => $glyph ) {
		$icons[ (string) $glyph['glyph-name'] ] = htmlspecialchars( (string) $glyph['unicode'] );
	}

	if ( 0 < $index ) {
		return isset( array_values( $icons )[ $index ] ) ? array_values( $icons )[ $index ] : $index;
	}

	if ( ! empty( $name ) ) {
		return isset( $icons[ $name ] ) ? $icons[ $name ] : $name;
	}

	if ( $keys ) {
		return array_keys( $icons );
	}

	return $icons;
}

// Merger of Divi and CAWeb Icon Font Library
add_filter( 'et_pb_font_icon_symbols', 'caweb_et_pb_font_icon_symbols' );
function caweb_et_pb_font_icon_symbols( $divi_symbols = array() ) {
	$symbols = array_values( caweb_get_icon_list() );

	return $symbols;
}

function caweb_get_icon_span( $font, $attr = array() ) {
	if ( empty( $font ) ) {
		return '';
	}

	// "%22" are saved as double quotes in shortcode attributes. Encode them back into %22
	$font = str_replace( '"', '%22', $font );

	// get appropriate icon
	$tmp  = caweb_get_icon_list();
	$icon = isset( $tmp[ $font ] ) ? $font :
			( preg_match( '/^%%/', trim( $font ) ) ? caweb_get_icon_list( -1, '', true )[ preg_replace( '/%%/', '', $font ) ] : '' );

	if ( empty( $icon ) ) {
		return;
	}

	$t = get_site_option( 'dev', array() );
	if ( empty( $t ) ) {
		update_site_option( 'dev', array( $font, $icon ) );
	}

	$icon  = "ca-gov-icon-$icon";
	$style = '';
	$class = '';

	// if style attribute was passed in
	if ( isset( $attr['style'] ) ) {
		$style = is_string( $attr['style'] ) ? explode( ';', $attr['style'] ) : $attr['style'];
		$style = ! empty( $style ) ? sprintf( ' style="%1$s"', implode( $style, ';' ) ) : '';
		unset( $attr['style'] );
	}

	// if class attribute was passed in
	if ( isset( $attr['class'] ) ) {
		$class = is_string( $attr['class'] ) ? explode( ' ', $attr['class'] ) : $attr['class'];
		$class = ! empty( $class ) ? sprintf( ' %1$s', implode( $class, ' ' ) ) : '';
		unset( $attr['class'] );
	}

	$span = sprintf( '<span class="%1$s%2$s"%3$s', $icon, $class, $style );
	foreach ( $attr as $attribute => $value ) {
		$span .= sprintf( ' %1$s="%2$s"', $attribute, $value );
	}

	return "$span></span>";
}

function caweb_get_blank_icon_span() {
	return '<span style="visibility:hidden;" class="ca-gov-icon-logo"></span>';
}

if ( ! function_exists( 'caweb_get_excerpt' ) ) {
	function caweb_get_excerpt( $con, $excerpt_length, $p = -1 ) {
		if ( empty( $con ) ) {
			return $con;
		}

		// Regex pattern to find the end of strong, p, span, a and br tags
		$pattern = '/&lt;\/strong&gt;|&lt;\/p&gt;|&lt;\/span&gt;|&lt;\/a&gt;|&lt;br[\s]+\/&gt;/';

		// Split content by regex pattern
		$con_array = preg_split( $pattern, htmlentities( strip_tags( $con, '<strong><p><span><a><br>' ) ), -1 );
		// Store regex matches
		preg_match_all( $pattern, htmlentities( strip_tags( $con, '<strong><p><span><a><br>' ) ), $match_array, PREG_OFFSET_CAPTURE );

		$excerpt   = array();
		$wordCount = 0;

		// Iterate thru content splits
		foreach ( $con_array as $i => $line ) {
			// strip all tags in the line and return every word
			$cleaned = explode( ' ', strip_tags( html_entity_decode( $line ) ) );

			// if there was a match for the line save it and append
			$matching_end  = '';
			$matching_end  = isset( $match_array[0][ $i ][0] ) && ! empty( $match_array[0][ $i ][0] ) ? $match_array[0][ $i ][0] : '<br>';
			$excerpt[ $i ] = $line . $matching_end;

			if ( ! empty( $line ) ) {
				$wordCount += count( $cleaned );
			}

			if ( $excerpt_length < $wordCount ) {
				do {
					$wordCount--;

					if ( ! isset( $cleaned[ count( $cleaned ) - 1 ] ) ) {
						break;
					}

					$lastWord = $cleaned[ count( $cleaned ) - 1 ];

					$line = substr( $line, 0, strrpos( $line, ' ' ) );

					$cleaned = array_filter( explode( ' ', strip_tags( html_entity_decode( $line ) ) ) );

					if ( $excerpt_length >= $wordCount ) {
						$line .= '...';
					}

					$excerpt[ $i ] = $line . $matching_end;
				} while ( $excerpt_length < $wordCount );

				break;
			}
		}

		$x = new DOMDocument();
		$x->loadHTML( sprintf( '<div class="post-%1$s-excerpt">%2$s</div>', $p, trim( implode( '', $excerpt ) ) ) );
		$element = $x->getElementById( "post-$p-excerpt" );

		return html_entity_decode( $x->saveHTML( $element ) );
	}
}

function caweb_get_the_post_thumbnail( $post = null, $size = 'thumbnail', $attr = '', $pixel_size = array() ) {
	if ( is_array( $size ) ) {
		if ( empty( $pixel_size ) && 2 == count( $size ) ) {
			$pixel_size = $size;
		}
		$size = 'thumbnail';
	}
	$thumbnail = get_the_post_thumbnail( $post, $size, $attr );

	// if there is no thumbnail return
	if ( empty( $thumbnail ) ) {
		return;
	}
	// theres is a thumbnail, and the pixel sizes is empty or has more than 2 elements
	// return the thumbnail untouched
	if ( empty( $pixel_size ) || 2 !== count( $pixel_size ) ) {
		return $thumbnail;
	}

	// remove the current width and height size attributes and
	// srcset attribute
	$thumbnail = preg_replace( array( '/(width|height)=\"\d*\"\s/', '/(width|height):[\s\d\w]*;?/', '/(srcset)=\".*\"/' ), '', $thumbnail );

	$style = '';
	// remove style attribute
	if ( preg_match( '/style=\"([\w\d\s]*)\"/', $thumbnail, $matches ) ) {
		$style     = $matches[1];
		$thumbnail = preg_replace( array( '/style=\"([\w\d\s]*)\"/' ), '', $thumbnail );
	}

	$new_img = sprintf( '<img style="width:%1$spx;height:%2$spx;%3$s" ', $pixel_size[0], $pixel_size[1], $style );

	$thumbnail = preg_replace( '/<img /', $new_img, $thumbnail );

	return $thumbnail;
}

add_action( 'admin_post_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
add_action( 'admin_post_no_priv_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
function caweb_retrieve_attachment_post_meta() {
	if ( ! isset( $_POST['imgs'] ) || empty( $_POST['imgs'] ) || ! is_array( $_POST['imgs'] ) ) {
		return 0;
	}

	$alts = caweb_get_attachment_post_meta( $_POST['imgs'], '_wp_attachment_image_alt' );

	print json_encode( $alts );
	exit();
}

function caweb_get_attachment_post_meta( $image_url, $meta_key = '' ) {
	if ( empty( $image_url ) ) {
		return 0;
	}

	$query = array(
		'post_type'  => 'attachment',
		'fields'     => 'ids',
	);

	if ( is_string( $image_url ) ) {
		$query['meta_query'] = array(
			array(
				'key'     => '_wp_attached_file',
				'value'   => basename( $image_url ),
				'compare' => 'LIKE',
			),
		);

		$ids = get_posts( $query );

		return ! empty( $ids ) ? get_post_meta( $ids[0], $meta_key, true ) : 0;
	} elseif ( is_array( $image_url ) ) {
		$imgs = array();

		foreach ( $image_url as $i => $img ) {
			$query['meta_query'] = array(
				array(
					'key'     => '_wp_attached_file',
					'value'   => basename( $img ),
					'compare' => 'LIKE',
				),
			);

			$ids = get_posts( $query );

			if ( ! empty( $ids ) ) {
				$imgs[] = get_post_meta( $ids[0], $meta_key, true );
			}
		}

		return ! empty( $imgs ) ? $imgs : 0;
	}

	return 0;
}

function getMinFile( $f, $ext = 'css' ) {
	// if a minified version exists
	if ( file_exists( CAWebAbsPath . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
		return CAWebUri . str_replace( ".$ext", ".min.$ext", $f );
	} else {
		return CAWebUri . $f;
	}
}


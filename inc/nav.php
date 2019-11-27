<?php

if ( ! class_exists( 'CAWeb_Nav_Menu' ) ) {
	class CAWeb_Nav_Menu extends Walker_Nav_Menu {

		/*
		--------------------------------------------*
		* Constructor
		*--------------------------------------------*/
		function __construct() {
			// Hooked onto the WordPress Navigation Walker Edit
			add_filter( 'wp_edit_nav_menu_walker', array( $this, 'caweb_edit_nav_menu_walker' ), 9999 );
			add_action( 'wp_nav_menu_item_custom_fields', array( $this, 'caweb_nav_menu_item_custom_fields' ), 9, 4 );
			add_action( 'wp_update_nav_menu_item', array( $this, 'caweb_update_nav_menu_item' ), 10, 3 );

			// Hooked onto the WordPress Navigation
			add_filter( 'wp_nav_menu_args', array( $this, 'caweb_nav_menu_args' ) );
			// https://core.trac.wordpress.org/browser/tags/4.8/src/wp-includes/widgets/class-wp-nav-menu-widget.php#L17
			add_filter( 'widget_nav_menu_args', array( $this, 'caweb_widget_nav_menu_args' ), 10, 4 );
			add_filter( 'wp_nav_menu', array( $this, 'caweb_nav_menu' ), 10, 2 );
		} // end constructor

		public function caweb_nav_menu_args( $args ) {
			$args['fallback_cb'] = array( $this, 'caweb_menu_fail' );

			return $args;
		}
		public function caweb_widget_nav_menu_args( $nav_menu_args, $nav_menu, $args, $instance ) {
			if ( isset( $nav_menu_args['menu'] ) ) {
				$args['echo'] = false;
				print $this->createWidgetNavMenu( $nav_menu_args['menu'] );
			}

			return $args;
		}

		function caweb_edit_nav_menu_walker( $current = 'Walker_Nav_Menu_Edit' ) {
			if ( $current !== 'Walker_Nav_Menu_Edit' ) {
				return $current;
			}

			return 'CAWeb_Nav_Menu_Walker';
		}

		function caweb_nav_menu( $nav_menu, $args ) {
			global $post;
			$post_id = ( is_object( $post ) ? $post->ID : $post['ID'] );

			$theme_location = $args->theme_location;
			// Header Menu Construction
			if ( 'header-menu' === $theme_location && ! empty( $args->menu ) ) {
				$nav_menu = $this->createNavMenu( $args );

				// If not currently on the Front Page and Auto Home Nav Link option is true, create the Home Nav Link
				$homeLink = ( isset( $args->home_link ) && $args->home_link ? '<li class="nav-item nav-item-home"><a href="/" class="first-level-link"><span class="ca-gov-icon-home"></span> Home</a></li>' : '' );

				$searchLink = ( isset( $args->version ) && 5 <= $args->version && 'page-templates/searchpage.php' !== get_page_template_slug( $post_id ) && '' !== get_option( 'ca_google_search_id', '' ) ?
									'<li class="nav-item nav-item-search"><a href="#" id="search-expanded" class="first-level-link"><span class="ca-gov-icon-search" aria-hidden="true"></span> Search</a></li>' : '' );

				$nav_menu = sprintf(
					'<nav id="navigation" class="main-navigation %1$s hidden-print">
                                <ul id="nav_list" class="top-level-nav">%2$s%3$s%4$s</ul></nav>',
					( isset( $args->style ) ? $args->style : 'megadropdown' ),
					$homeLink,
					$nav_menu,
					$searchLink
				);

				// Footer Menu Construction
			} elseif ( 'footer-menu' === $theme_location && ! empty( $args->menu ) ) {
				$nav_menu  = $this->createFooterMenu( $args );
				$poweredBy = is_plugin_active( 'caweb-admin/caweb-admin.php' ) || is_plugin_active_for_network( 'caweb-admin/caweb-admin.php' ) ? sprintf( '<span class="pull-right">Powered by: <a href="%1$s" target="_blank">CAWeb Publishing Service</a></span>', wp_get_theme()->get( 'ThemeURI' ) ) : '';

				$nav_menu = sprintf(
					'<footer id="footer" class="global-footer hidden-print"><div class="container footer-menu"><div class="group">%1$s</div></div><!-- Copyright Statement --><div class="copyright"><div class="container" %2$s><p class="d-inline">Copyright &copy; %3$s State of California</p>%4$s</div></div></footer>',
					$nav_menu,
					( 4 >= $args->version ? 'style="text-align:center;" ' : '' ),
					date( 'Y' ),
					$poweredBy
				);
			}

			return $nav_menu;
		}

		public function caweb_menu_fail( $args ) {
			$nav_menu = '';
			if ( 'header-menu' === $args['theme_location'] ) {
				$nav_menu = '<nav id="navigation" class="main-navigation hidden-print"><ul id="nav_list" class="top-level-nav">
                        <li class="nav-item"><a href="#" class="first-level-link"><span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span><strong>There Is No Navigation Menu Set</strong></a></li></ul></nav>';
			} elseif ( 'footer-menu' === $args['theme_location'] ) {
				$nav_menu    = '<ul class="footer-links"><li><a>There Is No Navigation Menu Set</a></li></ul>';
				$socialLinks = '';
				$nav_menu    = sprintf(
					'<footer id="footer" class="global-footer hidden-print"><div class="container"><div class="group">%1$s%2$s</div></div>
                            <!-- Copyright Statement -->
                      <div class="copyright">
                      <div class="container" %3$s> Copyright &copy;
                      <script>document.write(new Date().getFullYear())</script> State of California </div></div></footer>',
					$nav_menu,
					$socialLinks,
					( 4 >= $args['version'] ? 'style="text-align:center;" ' : '' )
				);
			}

			print $nav_menu;
		}
		// Begin Creation of the Widget Navigation Menu
		public function createWidgetNavMenu( $nav_menu ) {
			$widget_nav_menu = '';

			$menuitems = wp_get_nav_menu_items( $nav_menu->term_id, array( 'order' => 'DESC' ) );
			_wp_menu_item_classes_by_context( $menuitems );

			// Iterate thru menuitems create Top Level (first-level-link)
			foreach ( $menuitems as $i => $item ) {

				// If a top level nav item,
				// menu_item_parent= 0
				if ( 0 === $item->menu_item_parent ) {
					$sub_nav   = '';
					$item_meta = get_post_meta( $item->ID );

					// Get array of Sub Nav Items (second-level-links)
					$childLinks = caweb_get_nav_menu_item_children( $item->ID, $menuitems );

					// Count of Sub Nav Link
					$childCount = count( $childLinks );

					// If there are child links create the sub-nav
					if ( 0 < $childCount ) {
						$sub_nav_items = '';

						// Iterate thru $childLinks create Sub Level (second-level-links)
						foreach ( $childLinks as $i => $subitem ) {
							$sub_item_meta  = get_post_meta( $subitem->ID );
							$sub_nav_items .= sprintf(
								'<li class="%1$s%2$s"%3$s%4$s><a href="%5$s"%6$s>%7$s</a></li>',
								implode( ' ', $subitem->classes ),
								( in_array( 'current-menu-item', $subitem->classes ) ? ' active ' : '' ),
								( ! empty( $subitem->attr_title ) ? sprintf( ' title="%1$s" ', $subitem->attr_title ) : '' ),
								( ! empty( $subitem->xfn ) ? sprintf( ' rel="%1$s" ', $subitem->xfn ) : '' ),
								$subitem->url,
								( ! empty( $subitem->target ) ? sprintf( ' target="%1$s" ', $subitem->target ) : '' ),
								$subitem->title
							);
						}

						$sub_nav = sprintf( '<ul class="description">%1$s</ul>', $sub_nav_items );
					} // End of sub-nav

					$item_nav_image = '';
					if ( ! empty( $item_meta['_caweb_menu_icon'][0] ) ) {
						$item_nav_image_class = "widget_nav_menu_icon ca-gov-icon-" . $item_meta['_caweb_menu_icon'][0];
						$item_nav_image = "<span class=\"$item_nav_image_class\"></span>"; 
					} elseif ( ! empty( $item_meta['_caweb_menu_image'][0] ) ) {
						$item_nav_image = sprintf( '<img class="widget_nav_menu_img" src="%1$s"/>', $item_meta['_caweb_menu_image'][0] );
					}

					$widget_nav_menu .= sprintf(
						'<li class="nav-item %1$s%2$s"%3$s%4$s><a %5$s href="%6$s"%7$s%8$s>%9$s%10$s</a></li>',
						implode( ' ', $item->classes ),
						( in_array( 'current-menu-item', $item->classes ) ? ' active ' : '' ),
						( ! empty( $item->xfn ) ? sprintf( ' rel="%1$s" ', $item->xfn ) : '' ),
						( ! empty( $item->attr_title ) ? sprintf( ' title="%1$s" ', $item->attr_title ) : '' ),
						( ! empty( $item_nav_image ) ? 'class="widget_nav_menu_a"' : '' ),
						$item->url,
						( ! empty( $item->target ) ? sprintf( ' target="%1$s" ', $item->target ) : '' ),
						( 0 < $childCount ? ' class="toggle" ' : '' ),
						$item_nav_image,
						sprintf( '<p class="widget_nav_menu_title">%1$s</p>', $item->title )
					);
				}
			}

			return sprintf( '<ul class="accordion-list">%1$s</ul>', $widget_nav_menu );
		}

		// Begin Creation of the Navigation Menu (first-level-links)
		public function createNavMenu( $args ) {
			$menuitems = wp_get_nav_menu_items( $args->menu->term_id, array( 'order' => 'DESC' ) );

			_wp_menu_item_classes_by_context( $menuitems );

			$nav_item = '';
			// Iterate thru menuitems create Top Level (first-level-link)
			foreach ( $menuitems as $i => $item ) {
				// If a top level nav item,
				// menu_item_parent= 0
				if ( 0 === $item->menu_item_parent ) {
					$item_meta = get_post_meta( $item->ID );
					// Get array of Sub Nav Items (second-level-links)
					$childLinks = caweb_get_nav_menu_item_children( $item->ID, $menuitems );

					// Count of Sub Nav Link
					$childCount = count( $childLinks );

					// Get icon if present
					if(isset( $item_meta['_caweb_menu_icon'] )){
						$icon = '<span class="ca-gov-icon-' . $item_meta['_caweb_menu_icon'][0] . '"></span>';
					}else{
						$icon = "<span class=\"invisible ca-gov-icon-logo\"></span>";
					}
					
					// Get column count
					$nav_column_count = isset( $item_meta['_caweb_menu_column_count'] ) ? $item_meta['_caweb_menu_column_count'][0] : 0;
					// Create Link
					$nav_item .= sprintf(
						'<li class="nav-item %1$s%2$s %9$s"%3$s title="%4$s"><a href="%5$s" class="first-level-link"%6$s>%7$s<span class="link-title">%8$s</span></a>',
						implode( ' ', $item->classes ),
						( in_array( 'current-menu-item', $item->classes ) ? ' active ' : '' ),
						( ! empty( $item->xfn ) ? sprintf( ' rel="%1$s" ', $item->xfn ) : '' ),
						$item->attr_title,
						$item->url,
						( ! empty( $item->target ) ? sprintf( ' target="%1$s"', $item->target ) : '' ),
						$icon,
						$item->title,
						$nav_column_count
					);

					// If there are child links create the sub-nav
					if ( 0 < $childCount && 'singlelevel' !== $args->style ) {
						if ( 'megadropdown' === $args->style ) {
							// Sub nav image variables
							$nav_img      = $item_meta['_caweb_menu_image'][0];
							$nav_img_side = $item_meta['_caweb_menu_image_side'][0];
							$nav_img_size = $item_meta['_caweb_menu_image_size'][0];

							if ( 4.5 <= $args->version ) {
								$sub_img_class = sprintf(
									'%1$s %2$s',
									( 'quarter' === $nav_img_size ? 'three-quarters' : 'half' ),
									( 'left' === $nav_img_side ? 'offset-' . $nav_img_size : '' )
								);

								$sub_img_div = sprintf(
									'<div class="%2$s with-image-%3$s" style="background: url(%1$s) no-repeat; background-size: 100%% 100%%;"></div>',
									$nav_img,
									$nav_img_size,
									$nav_img_side
								);

								$nav_item .= sprintf(
									'<div class="sub-nav">
                                <div class="%1$s">%2$s</div>%3$s</div></li>',
									( ! empty( $nav_img ) ? $sub_img_class : 'full' ),
									$this->createSubNavMenu( $childLinks, $args ),
									( ! empty( $nav_img ) ? $sub_img_div : '' )
								);
							} else {
								$sub_img_class = sprintf(
									'with-image-%1$s-%2$s',
									( 'quarter' === $nav_img_size ? 'sm' : 'md' ),
									$nav_img_side
								);

								$sub_img_div = sprintf( '<div class="sub-nav-decoration" style="background: url(%1$s); "></div>', $nav_img );

								$nav_item .=
								sprintf(
									'<div class="sub-nav %2$s">%1$s%3$s</div></li>',
									$this->createSubNavMenu( $childLinks, $args ),
									( ! empty( $nav_img ) ? $sub_img_class : 'empty' ),
									( ! empty( $nav_img ) ? $sub_img_div : '' )
								);
							}
						} else {
							$nav_item .= sprintf(
								'<div class="empty sub-nav">
                                                    <div>%1$s</div></li>',
								$this->createSubNavMenu( $childLinks, $args )
							);
						}
					} else {
						$nav_item .= '</li>';
					}
				}
			} // End of for each

			// Print the list to the Navigation UL
			return $nav_item;
		} // End of createNavMenu

		// Begin Creation of the Sub Navigation Menu from the Top Level Nav Item (second-level-links)
		function createSubNavMenu( $childLinks, $args ) {
			// Opening ul.second-level-nav
			$sub_nav = '<ul class="second-level-nav">';

			// Iterate thru $childLinks create Sub Level (second-level-links)
			foreach ( $childLinks as $i => $item ) {
				$item_meta = get_post_meta( $item->ID );

				// Get icon if present
				$icon = "";
				if(isset( $item_meta['_caweb_menu_icon'] )){
					$icon = '<span class="ca-gov-icon-' . $item_meta['_caweb_menu_icon'][0] . '"></span>';
				}
				
				// Get desc if present
				$desc = ( '' !== $item->description ? sprintf( '<div class="link-description">%1$s</div>', $item->description ) : '&nbsp;' );

				$li_unit = 'megadropdown' === get_option( 'ca_default_navigation_menu', 'megadropdown' ) ? $item_meta['_caweb_menu_unit_size'][0] : 'unit1';

				// if version 5
				if ( 5.0 <= $args->version ) {
					if ( 'unit3' !== $li_unit ) {
						// Create Link
						$sub_nav .= sprintf(
							'<li %1$s title="%2$s" %3$s><a href="%4$s" class="second-level-link"%5$s>%6$s%7$s%8$s</a></li>',
							sprintf( ' class="%1$s %2$s" ', $li_unit, implode( ' ', $item->classes ) ),
							$item->attr_title,
							( ! empty( $item->xfn ) ? sprintf( ' rel="%1$s" ', $item->xfn ) : '' ),
							$item->url,
							( ! empty( $item->target ) ? sprintf( ' target="%1$s"', $item->target ) : '' ),
							$icon,
							$item->title,
							( 'unit1' !== $li_unit ? $desc : '' )
						);
					} else {
						// Get nav media if present
						$nav_media_image    = $item_meta['_caweb_menu_media_image'][0];
						$nav_media_alt_text = $item_meta['_caweb_nav_media_image_alt_text'][0];

						$nav_media = ( 'megadropdown' === $args->style ?
														sprintf(
															'<div class="media-left"><a href="%1$s"><img style="height: 77px; max-width: 77px;" src="%2$s" alt="%3$s"/></a></div>',
															$item->url,
															$nav_media_image,
															$nav_media_alt_text
														) : '' );

						$sub_nav .= sprintf(
							'<li %1$s title="%2$s" %3$s><div class="nav-media">
                                                                    <div class="media">%4$s<div class="media-body"><div class="title"><a href="%5$s"%6$s>%7$s</a></div>
                                                                    <div class="teaser">%8$s</div></div></div></div></li>',
							sprintf( ' class="%1$s %2$s" ', $li_unit, implode( ' ', $item->classes ) ),
							$item->attr_title,
							( ! empty( $item->xfn ) ? sprintf( ' rel="%1$s" ', $item->xfn ) : '' ),
							$nav_media,
							$item->url,
							( ! empty( $item->target ) ? sprintf( ' target="%1$s"', $item->target ) : '' ),
							$item->title,
							$desc
						);
					}

					// version 4
				} else {
					$sub_nav .= sprintf(
						'<li %1$s title="%2$s" ><a href="%3$s" class="second-level-link"%4$s%5$s>%6$s%7$s</a>%8$s</li>',
						sprintf( ' class="%1$s %2$s" ', $li_unit, implode( ' ', $item->classes ) ),
						$item->attr_title,
						$item->url,
						( ! empty( $item->xfn ) ? sprintf( ' rel="%1$s" ', $item->xfn ) : '' ),
						( ! empty( $item->target ) ? sprintf( ' target="%1$s"', $item->target ) : '' ),
						$icon,
						$item->title,
						( 'unit1' !== $li_unit ? $desc : '' )
					);
				}
			}
			// Closing ul.second-level-nav
			$sub_nav .= '</ul>';

			// Return the Sub Nav
			return $sub_nav;
		} // End of createSubNavMenu

		public function createFooterMenu( $args ) {
			$navLinks = '';

			// loop thru and create a link (parent nav item only)
			$menuitems = wp_get_nav_menu_items( $args->menu->term_id, array( 'order' => 'DESC' ) );

			foreach ( $menuitems as $item ) {
				if ( $item->menu_item_parent === 0 ) {
					$navLinks .= sprintf(
						'<li%1$stitle="%2$s"%3$s><a href="%4$s"%5$s>%6$s</a></li>',
						( ! empty( $item->classes ) ? sprintf( ' class="%1$s" ', implode( ' ', $item->classes ) ) : '' ),
						$item->attr_title,
						( ! empty( $item->xfn ) ? sprintf( ' rel="%1$s" ', $item->xfn ) : '' ),
						$item->url,
						( ! empty( $item->target ) ? sprintf( ' target="%1$s"', $item->target ) : '' ),
						$item->title
					);
				}
			}

			$socialLinks = $this->createFooterSocialMenu( $args );

			if ( 4 >= $args->version ) {
				$class = 'full';
				$style = ' style="text-align:center;" ';
			} else {
				$class = ! empty( $socialLinks ) ? 'three-quarters' : 'full-width';
				$style = '';
			}

			$navLinks = sprintf( '<div class="%1$s"><ul class="footer-links" %2$s><li><a href="#skip-to-content">Back to Top</a></li>%3$s</ul></div>%4$s', $class, $style, $navLinks, $socialLinks );

			return $navLinks;
		}

		public function createFooterSocialMenu( $args ) {
			$social_share = caweb_get_site_options( 'social' );
			$socialLinks  = '';

			foreach ( $social_share as $opt ) {
				$share_email = 'ca_social_email' === $opt ? true : false;
				$sub         = rawurlencode( sprintf( '%1$s | %2$s', get_the_title(), get_bloginfo( 'name' ) ) );
				$body        = rawurlencode( get_permalink() );
				$mailto      = $share_email ? sprintf( 'mailto:?subject=%1$s&body=%2$s', $sub, $body ) : '';

				if ( get_option( $opt . '_footer' ) && ( $share_email || '' !== get_option( $opt ) ) ) {
					$share         = substr( $opt, 10 );
					$share         = str_replace( '_', '-', $share );
					$social_url    = $share_email ? $mailto : esc_url( get_option( $opt ) );
					$social_target = sprintf( ' target="%1$s"', get_option( $opt . '_new_window', true ) ? '_blank' : '_self' );
					$social_icon = ! empty( $share ) ? "<span class=\"ca-gov-icon-$share\"></span>" : '';
					$socialLinks .= sprintf( '<li><a href="%1$s" %2$s>%3$s<span class="sr-only">%4$s</span></a></li>', $social_url, $social_target, $social_icon, $share );
				}
			}

			$socialLinks = ! empty( $socialLinks ) ? sprintf(
				'<ul class="socialsharer-container" %1$s>%2$s</ul>',
				( 4 >= $args->version ? ' style="text-align:center;  float:none;" ' : '' ),
				$socialLinks
			) : '';

			return ! empty( $socialLinks ) ? sprintf( '<div class="%1$s">%2$s</div>', ( 4 >= $args->version ? 'full' : 'quarter' ), $socialLinks ) : $socialLinks;
		}

		function caweb_nav_menu_item_custom_fields( $item_id, $item, $depth, $args ) {
			$tmp                      = get_post_meta( $item->ID );
			$icon                     = ! empty( $tmp['_caweb_menu_icon'][0] ) ? $tmp['_caweb_menu_icon'][0] : '';
			$nav_media_image_alt_text = ! empty( $tmp['_caweb_nav_media_image_alt_text'][0] ) ? $tmp['_caweb_nav_media_image_alt_text'][0] : ''; ?>


<div class="icon_selector <?php print( ! empty( $tmp['_caweb_menu_unit_size'][0] ) && 'unit3' !== $tmp['_caweb_menu_unit_size'][0] ? 'show' : '' ); ?> description description-wide">
	<p>Select an Icon
		<input name="<?php print $item_id; ?>_icon" id="<?php print $item_id; ?>_icon" value="<?php print $icon; ?>" type="text" /></p>

	<ul id="menu-icon-list-<?php print $item_id; ?>" class="caweb-icon-menu noUpdate">
			<?php
			$icons    = caweb_get_icon_list( -1, '', true );
			$iconList = '';
			foreach ( $icons as $i ) {
				printf( '<li class="icon-option ca-gov-icon-%1$s%2$s" title="%1$s"></li>', $i, $icon === $i ? ' selected' : '' );
			}
			?>
		<input type="hidden" name="ca_google_trans_icon" value="<?php print get_option( 'ca_google_trans_icon', 'globe' ); ?>">
	</ul>
</div>
<div class="unit_selector <?php print( 0 !== $depth ? 'show' : '' ); ?> description description-wide">
	<p><strong>Select a height for the navigation item</strong></p>
	<select name="<?php print $item_id; ?>_unit_size" class="unit-size-selector" id="unit-size-selector-<?php print $item_id; ?>">
		<option value="unit1" <?php print( isset( $tmp['_caweb_menu_unit_size'][0] ) && 'unit1' === $tmp['_caweb_menu_unit_size'][0] ? 'selected="selected"' : '' ); ?>>Unit 1 - 50px height</option>
			<?php if ( 'megadropdown' === get_option( 'ca_default_navigation_menu', 'megadropdown' ) ) : ?>
		<option value="unit2" <?php print( isset( $tmp['_caweb_menu_unit_size'][0] ) && 'unit2' === $tmp['_caweb_menu_unit_size'][0] ? 'selected="selected"' : '' ); ?>>Unit 2 - 100px height</option>
				<?php if ( 5.0 <= get_option( 'ca_site_version' ) ) : ?>
		<option value="unit3" <?php print( isset( $tmp['_caweb_menu_unit_size'][0] ) && 'unit3' === $tmp['_caweb_menu_unit_size'][0] ? 'selected="selected"' : '' ); ?>>Unit 3 - 100px height w/ Image</option>
		<?php endif; ?>
		<?php endif; ?>
	</select>
</div>

<div class="media_image <?php print( 0 !== $depth && ! empty( $tmp['_caweb_menu_unit_size'][0] ) && 'unit3' === $tmp['_caweb_menu_unit_size'][0] ? 'show' : '' ); ?> description description-wide">
	<p><strong>Navigation Media Image</strong>
		<p>
			<p>Select an Image</p>
			<input name="<?php print $item_id; ?>_media_image" id="<?php print $item_id; ?>_media_image" type="text" class="link-text" style="width: 97%;" value="<?php print ! empty( $tmp['_caweb_menu_media_image'][0] ) ? $tmp['_caweb_menu_media_image'][0] : ''; ?>" />
			<input type="button" class="library-link" value="Browse" id="library-link-<?php print $item_id; ?>" name="<?php print $item_id; ?>_media_image" data-choose="Choose a Default Image" data-update="Set as Navigation Media Image" />
			<p>Navigation Media Image Alt Text
				<input name="<?php print $item_id; ?>_caweb_nav_media_image_alt_text" id="<?php print $item_id; ?>_caweb_nav_media_image_alt_text" value="<?php print $nav_media_image_alt_text; ?>" type="text" /></p>
</div>
			<?php if ( 'megadropdown' === get_option( 'ca_default_navigation_menu', 'megadropdown' ) ) : ?>
<div class="mega_menu_images <?php print( 0 === $depth ? 'show' : '' ); ?> description description-wide ">
	<p><strong>Mega Menu Image Option</strong>
		<p>
			<p>Select an Image</p>
			<input name="<?php print $item_id; ?>_image" id="<?php print $item_id; ?>_image" type="text" class="link-text" style="width: 97%;" value="<?php print ! empty( $tmp['_caweb_menu_image'][0] ) ? $tmp['_caweb_menu_image'][0] : ''; ?>" />
			<input type="button" value="Browse" id="library-link-<?php print $item_id; ?>" class="library-link" name="<?php print $item_id; ?>_image" data-choose="Choose a Default Image" data-update="Set as Sub Navigation Image" />
			<p>Select a Side / Select a Size</p>
			<select name="<?php print $item_id; ?>_image_side">
				<option value="left" <?php print( ! empty( $tmp['_caweb_menu_image_side'][0] ) && 'left' === $tmp['_caweb_menu_image_side'][0] ? 'selected="selected"' : '' ); ?>>Left</option>
				<option value="right" <?php print( ! empty( $tmp['_caweb_menu_image_side'][0] ) && 'right' === $tmp['_caweb_menu_image_side'][0] ? 'selected="selected"' : '' ); ?>>Right</option>
			</select>
			/
			<select name="<?php print $item_id; ?>_image_size">
				<option value="quarter" <?php print( ! empty( $tmp['_caweb_menu_image_size'][0] ) && 'quarter' === $tmp['_caweb_menu_image_size'][0] ? 'selected="selected"' : '' ); ?>>Quarter</option>
				<option value="half" <?php print( ! empty( $tmp['_caweb_menu_image_size'][0] ) && 'half' === $tmp['_caweb_menu_image_size'][0] ? 'selected="selected"' : '' ); ?>>Half</option>
			</select>
			<p>Select a column layout</p>
			<select name="<?php print $item_id; ?>_column_count">
				<option value="" <?php print( ! empty( $tmp['_caweb_menu_column_count'][0] ) && '' === $tmp['_caweb_menu_column_count'][0] ? 'selected="selected"' : '' ); ?>>Select layout...</option>
				<option value="two-columns" <?php print( ! empty( $tmp['_caweb_menu_column_count'][0] ) && 'two-columns' === $tmp['_caweb_menu_column_count'][0] ? 'selected="selected"' : '' ); ?>>2 Columns</option>
				<option value="three-columns" <?php print( ! empty( $tmp['_caweb_menu_column_count'][0] ) && 'three-columns' === $tmp['_caweb_menu_column_count'][0] ? 'selected="selected"' : '' ); ?>>3 Columns</option>
				<option value="four-columns" <?php print( ! empty( $tmp['_caweb_menu_column_count'][0] ) && 'four-columns' === $tmp['_caweb_menu_column_count'][0] ? 'selected="selected"' : '' ); ?>>4 Columns</option>
			</select>
</div>
			<?php endif; ?>

			<?php
		}

		// save menu custom fields that are added on to ca_custom_nav_walker
		public function caweb_update_nav_menu_item( $menu_id, $menu_item_db_id, $args ) {
			// Check if element is properly sent
			if ( isset( $_POST['menu-item-db-id'] ) ) {
				$args['caweb-menu-item-icon']           = $_POST[ $menu_item_db_id . '_icon' ];
				$args['caweb-menu-item-unit-size']      = $_POST[ $menu_item_db_id . '_unit_size' ];
				$args['caweb-menu-item-media-image']    = $_POST[ $menu_item_db_id . '_media_image' ];
				$args['caweb-menu-item-image']          = $_POST[ $menu_item_db_id . '_image' ];
				$args['caweb-menu-item-image-side']     = $_POST[ $menu_item_db_id . '_image_side' ];
				$args['caweb-menu-item-image-size']     = $_POST[ $menu_item_db_id . '_image_size' ];
				$args['caweb-menu-column-count']        = $_POST[ $menu_item_db_id . '_column_count' ];
				$args['caweb-nav-media-image-alt-text'] = $_POST[ $menu_item_db_id . '_caweb_nav_media_image_alt_text' ];

				update_post_meta( $menu_item_db_id, '_caweb_menu_icon', $args['caweb-menu-item-icon'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_unit_size', $args['caweb-menu-item-unit-size'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_media_image', $args['caweb-menu-item-media-image'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_image', $args['caweb-menu-item-image'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_image_side', $args['caweb-menu-item-image-side'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_image_size', $args['caweb-menu-item-image-size'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_column_count', $args['caweb-menu-column-count'] );
				update_post_meta( $menu_item_db_id, '_caweb_nav_media_image_alt_text', $args['caweb-nav-media-image-alt-text'] );
			}

			return $menu_item_db_id;
		}
	}
}

new CAWeb_Nav_Menu();
?>
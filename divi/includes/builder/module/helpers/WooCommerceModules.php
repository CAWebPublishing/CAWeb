<?php
/**
 * WooCommerce Module Helper
 *
 * @package     Divi
 * @sub-package Builder
 * @since       3.29
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

if ( et_is_woocommerce_plugin_active() ) {

	/**
	 * Class ET_Builder_Module_Helper_Woocommerce_Modules
	 *
	 * Shared code between all Woo Modules.
	 */
	class ET_Builder_Module_Helper_Woocommerce_Modules {
		/**
		 * Returns TRUE if the Product attribute value is valid.
		 *
		 * Valid values are Product Ids, `current` and `latest`.
		 *
		 * @param string $maybe_product_id
		 *
		 * @return bool
		 */
		public static function is_product_attr_valid( $maybe_product_id ) {
			if ( empty( $maybe_product_id ) ) {
				return false;
			}

			if ( absint( $maybe_product_id ) === 0
				 && ! in_array( $maybe_product_id, array( 'current', 'latest' ) ) ) {
				return false;
			}

			return true;
		}

		/**
		 * Gets the Product Id by the given Product prop value.
		 *
		 * @param string $valid_product_attr
		 *
		 * @return int
		 */
		public static function get_product_id_by_prop( $valid_product_attr ) {
			if ( ! self::is_product_attr_valid( $valid_product_attr ) ) {
				return 0;
			}

			if ( 'current' === $valid_product_attr ) {
				$current_post_id = ET_Builder_Element::get_current_post_id();

				if ( et_theme_builder_is_layout_post_type( get_post_type( $current_post_id ) ) ) {
					// We want to use the latest product when we are editing a TB layout.
					$valid_product_attr = 'latest';
				}
			}

			if ( ! in_array(
				$valid_product_attr,
				array(
					'current',
					'latest',
				)
			) && false === get_post_status( $valid_product_attr ) ) {
				$valid_product_attr = 'latest';
			}

			if ( 'current' === $valid_product_attr ) {
				$product_id = ET_Builder_Element::get_current_post_id();
			} elseif ( 'latest' === $valid_product_attr ) {
				$args = array(
					'limit'       => 1,
					'post_status' => array( 'publish', 'private' ),
					'perm'        => 'readable',
				);

				$products = wc_get_products( $args );
				if ( ! empty( $products ) ) {
					$product_id = $products[0]->get_id();
				} else {
					return 0;
				}
			} elseif ( is_numeric( $valid_product_attr ) && 'product' !== get_post_type( $valid_product_attr ) ) {
				// There is a condition that $valid_product_attr value passed here is not the product ID.
				// For example when you set product breadcrumb as Blurb Title when building layout in TB.
				// So we get the most recent product ID in date descending order.
				$query = new WC_Product_Query(
					array(
						'limit'   => 1,
						'orderby' => 'date',
						'order'   => 'DESC',
						'return'  => 'ids',
						'status'  => array( 'publish' ),
					)
				);

				$products = $query->get_products();

				if ( $products && ! empty( $products[0] ) ) {
					$product_id = absint( $products[0] );
				} else {
					$product_id = absint( $valid_product_attr );
				}
			} else {
				$product_id = absint( $valid_product_attr );
			}

			return $product_id;
		}

		/**
		 * Gets the Product (WC_Product) by the value stored in the Product attribute.
		 *
		 * @see WC_Product
		 *
		 * @param string $maybe_product_id The Value stored in the Product attribute using VB.
		 *
		 * @return false|WC_Product
		 */
		public static function get_product( $maybe_product_id ) {
			$product_id = self::get_product_id_by_prop( $maybe_product_id );

			/*
			 * No need to check `wc_get_product()` exists since this Class is defined only when
			 * WooCommerce is active.
			 */
			$product = wc_get_product( $product_id );
			if ( empty( $product ) ) {
				return false;
			}

			return $product;
		}

		/**
		 * Gets the Product ID.
		 *
		 * @see WC_Product
		 *
		 * @param string $maybe_product_id The Value stored in the Product attribute using VB.
		 *
		 * @return int WP_Product ID.
		 */
		public static function get_product_id( $maybe_product_id ) {
			$product = self::get_product( $maybe_product_id );
			if ( ! $product ) {
				return 0;
			}

			return $product->get_id();
		}

		/**
		 * Get reusable WooCommerce field definition
		 *
		 * @since 3.29
		 *
		 * @param string $name  Field template name.
		 * @param array  $attrs Attribute that need to be inserted into field definition.
		 * @param array  $unset Attribute that need to be removed from field definition.
		 *
		 * @return array
		 */
		public static function get_field( $name, $attrs = array(), $unset = array() ) {
			switch ( $name ) {
				case 'product':
					$field = array(
						'label'            => esc_html__( 'Product', 'et_builder' ),
						'type'             => 'select_product',
						'option_category'  => 'basic_option',
						'description'      => esc_html__( 'Here you can select the Product.', 'et_builder' ),
						'toggle_slug'      => 'main_content',
						'searchable'       => true,
						'displayRecent'    => false,
						'default'          => 'current',
						'post_type'        => 'product',
						'computed_affects' => array(
							'__product',
						),
					);
					break;
				case 'product_filter':
					$field = array(
						'label'            => esc_html__( 'Filter By', 'et_builder' ),
						'type'             => 'select',
						'option_category'  => 'configuration',
						'options'          => array(
							'newest' => esc_html__( 'Newest', 'et_builder' ),
						),
						'toggle_slug'      => 'main_content',
						'description'      => esc_html__( 'Here you can filter the Products.', 'et_builder' ),
						'default'          => 'newest',
						'show_if'          => array(
							'product' => '-1',
						),
						'computed_affects' => array(
							'__product',
						),
					);
					break;
				case 'posts_number':
					$field = array(
						'default'          => '12',
						'label'            => esc_html__( 'Product Count', 'et_builder' ),
						'type'             => 'text',
						'option_category'  => 'configuration',
						'description'      => esc_html__( 'Define the number of products that should be displayed per page.', 'et_builder' ),
						'computed_affects' => array(
							'__product',
						),
						'toggle_slug'      => 'main_content',
					);
					break;
				case 'columns_number':
					$field = array(
						'label'            => esc_html__( 'Column Layout', 'et_builder' ),
						'type'             => 'select',
						'option_category'  => 'layout',
						'options'          => array(
							'6' => sprintf( esc_html__( '%1$s Columns', 'et_builder' ), esc_html( '6' ) ),
							'5' => sprintf( esc_html__( '%1$s Columns', 'et_builder' ), esc_html( '5' ) ),
							'4' => sprintf( esc_html__( '%1$s Columns', 'et_builder' ), esc_html( '4' ) ),
							'3' => sprintf( esc_html__( '%1$s Columns', 'et_builder' ), esc_html( '3' ) ),
							'2' => sprintf( esc_html__( '%1$s Columns', 'et_builder' ), esc_html( '2' ) ),
							'1' => esc_html__( '1 Column', 'et_builder' ),
						),
						'default'          => '0',
						'description'      => esc_html__( 'Choose how many columns to display.', 'et_builder' ),
						'computed_affects' => array(
							'__product',
						),
						'toggle_slug'      => 'main_content',
					);
					break;
				case 'orderby':
					$field = array(
						'label'            => esc_html__( 'Order', 'et_builder' ),
						'type'             => 'select',
						'option_category'  => 'configuration',
						'options'          => array(
							'default'    => esc_html__( 'Default Sorting', 'et_builder' ),
							'menu_order' => esc_html__( 'Sort by Menu Order', 'et_builder' ),
							'popularity' => esc_html__( 'Sort By Popularity', 'et_builder' ),
							'date'       => esc_html__( 'Sort By Date: Oldest To Newest', 'et_builder' ),
							'date-desc'  => esc_html__( 'Sort By Date: Newest To Oldest', 'et_builder' ),
							'price'      => esc_html__( 'Sort By Price: Low To High', 'et_builder' ),
							'price-desc' => esc_html__( 'Sort By Price: High To Low', 'et_builder' ),
						),
						'default_on_front' => 'default',
						'description'      => esc_html__( 'Choose how your products should be ordered.', 'et_builder' ),
						'computed_affects' => array(
							'__shop',
						),
						'toggle_slug'      => 'main_content',
					);
					break;
				default:
					$field = array();
					break;
			}

			// Added custom attribute(s).
			if ( ! empty( $attrs ) ) {
				$field = wp_parse_args( $attrs, $field );
			}

			// Remove default attribute(s).
			if ( ! empty( $unset ) ) {
				foreach ( $unset as $unset_attr ) {
					unset( $field[ $unset_attr ] );
				}
			}

			return $field;
		}

		/**
		 * Gets the Reviews title.
		 *
		 * @since 3.29
		 *
		 * @param WC_Product $product The Product Post.
		 *
		 * @return string
		 */
		public static function get_reviews_title( $product ) {
			$reviews_title = '';

			if ( ! ( $product instanceof WC_Product ) ) {
				return $reviews_title;
			}

			$count = $product->get_review_count();
			if ( $count ) {
				$reviews_title = sprintf(
					esc_html( _n( '%1$s review for %2$s', '%1$s reviews for %2$s', $count, 'et_builder' ) ),
					esc_html( $count ),
					'<span>' . $product->get_title() . '</span>'
				);
			} else {
				$reviews_title = esc_html__( 'Reviews', 'et_builder' );
			}

			return $reviews_title;
		}

		/**
		 * Gets the Reviews comment form.
		 *
		 * @since 3.29
		 *
		 * @param WC_Product   $product  The Product Post.
		 * @param WP_Comment[] $comments Array of Comment objects.
		 *
		 * @return string
		 */
		public static function get_reviews_comment_form( $product, $comments ) {
			$has_reviews = empty( $comments ) ? false : true;
			ob_start();
			?>
			<?php
			if ( get_option( 'woocommerce_review_rating_verification_required' ) === 'no' ||
					   wc_customer_bought_product( '', get_current_user_id(), $product->get_id() ) ) :
				?>

				<div id="review_form_wrapper">
					<div id="review_form">
						<?php
						$commenter = wp_get_current_commenter();

						$comment_form = array(
							'title_reply'         => $has_reviews ? esc_html__( 'Add a review', 'et_builder' ) : sprintf( esc_html__( 'Be the first to review &ldquo;%s&rdquo;', 'woocommerce' ), get_the_title( $product->get_id() ) ),
							'title_reply_to'      => esc_html__( 'Leave a Reply to %s', 'et_builder' ),
							'title_reply_before'  => '<span id="reply-title" class="comment-reply-title">',
							'title_reply_after'   => '</span>',
							'comment_notes_after' => '',
							'fields'              => array(
								'author' => '<p class="comment-form-author">' . '<label for="author">' . esc_html__( 'Name', 'woocommerce' ) . '&nbsp;<span class="required">*</span></label> ' .
											'<input id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30" required /></p>',
								'email'  => '<p class="comment-form-email"><label for="email">' . esc_html__( 'Email', 'woocommerce' ) . '&nbsp;<span class="required">*</span></label> ' .
											'<input id="email" name="email" type="email" value="' . esc_attr( $commenter['comment_author_email'] ) . '" size="30" required /></p>',
							),
							'label_submit'        => esc_html__( 'Submit', 'et_builder' ),
							'submit_button'       => '<button name="%1$s" type="submit" id="%2$s" class="et_pb_button %3$s" />%4$s</button>',
							'logged_in_as'        => '',
							'comment_field'       => '',
						);

						if ( $account_page_url = wc_get_page_permalink( 'myaccount' ) ) {
							/* translators: %s opening and closing link tags respectively */
							$comment_form['must_log_in'] = '<p class="must-log-in">' . sprintf( esc_html__( 'You must be %1$slogged in%2$s to post a review.', 'woocommerce' ), '<a href="' . esc_url( $account_page_url ) . '">', '</a>' ) . '</p>';
						}

						if ( get_option( 'woocommerce_enable_review_rating' ) === 'yes' ) {
							$comment_form['comment_field'] = '<div class="comment-form-rating"><label for="rating">' . esc_html__( 'Your rating', 'et_builder' ) . '</label><select name="rating" id="rating" required>
								<option value="">' . esc_html__( 'Rate&hellip;', 'et_builder' ) . '</option>
								<option value="5">' . esc_html__( 'Perfect', 'et_builder' ) . '</option>
								<option value="4">' . esc_html__( 'Good', 'et_builder' ) . '</option>
								<option value="3">' . esc_html__( 'Average', 'et_builder' ) . '</option>
								<option value="2">' . esc_html__( 'Not that bad', 'et_builder' ) . '</option>
								<option value="1">' . esc_html__( 'Very poor', 'et_builder' ) . '</option>
							</select></div>';
						}

						$comment_form['comment_field'] .= '<p class="comment-form-comment"><label for="comment">' . esc_html__( 'Your review', 'et_builder' ) . '&nbsp;<span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required></textarea></p>';

						comment_form(
							apply_filters( 'woocommerce_product_review_comment_form_args', $comment_form ),
							$product->get_id()
						);
						?>
					</div>
				</div>

			<?php else : ?>

				<p class="woocommerce-verification-required"><?php esc_html_e( 'Only logged in customers who have purchased this product may leave a review.', 'woocommerce' ); ?></p>

			<?php endif; ?>
			<?php
			return ob_get_clean();
		}

		/**
		 * Gets the formatted weight markup for the given Product Id.
		 *
		 * @param int $product_id Product Id.
		 *
		 * @return string
		 */
		public static function get_weight_formatted( $product_id ) {
			$product = self::get_product( $product_id );
			$markup  = '';

			if ( ! $product ) {
				return $markup;
			}

			return ( $product->has_weight() ) ? wc_format_weight( $product->get_weight() ) : $markup;
		}

		/**
		 * Gets the formatted dimension markup for the given Product Id.
		 *
		 * @param int $product_id Product Id.
		 *
		 * @return string
		 */
		public static function get_dimensions_formatted( $product_id ) {
			$product = self::get_product( $product_id );
			$markup  = '';

			if ( ! $product ) {
				return $markup;
			}

			return ( $product->has_dimensions() ) ? wc_format_dimensions( $product->get_dimensions( false ) ) : $markup;
		}

		/**
		 * Filters the $outer_wrapper_attrs.
		 * Adds 'data-background-layout' and 'data-background-layout-hover' attributes if needed.
		 *
		 * @since 3.29
		 *
		 * @param array              $outer_wrapper_attrs Key value pairs of outer wrapper attributes.
		 * @param ET_Builder_Element $this_class          Module's class.
		 *
		 * @return array filtered $outer_wrapper_attrs.
		 */
		public static function maybe_add_background_layout_data( $outer_wrapper_attrs, $this_class ) {
			$background_layout               = et_()->array_get( $this_class->props, 'background_layout', '' );
			$background_layout_hover         = et_pb_hover_options()->get_value( 'background_layout', $this_class->props, 'light' );
			$background_layout_hover_enabled = et_pb_hover_options()->is_enabled( 'background_layout', $this_class->props );

			if ( $background_layout_hover_enabled ) {
				$outer_wrapper_attrs['data-background-layout']       = esc_attr( $background_layout );
				$outer_wrapper_attrs['data-background-layout-hover'] = esc_attr( $background_layout_hover );
			}

			return $outer_wrapper_attrs;
		}

		/**
		 * Processes the Background Layout options for Woocommerce Modules.
		 * Adds Background Layout related classes.
		 * Adds Filter for $outer_wrapper_attrs, so required data attributes can be added for specific modules.
		 *
		 * @since 3.29
		 *
		 * @param string             $render_slug Module's render slug.
		 * @param ET_Builder_Element $this_class  Module's class.
		 *
		 * @return void.
		 */
		public static function process_background_layout_data( $render_slug, $this_class ) {
			$background_layout        = et_()->array_get( $this_class->props, 'background_layout', '' );
			$background_layout_values = et_pb_responsive_options()->get_property_values( $this_class->props, 'background_layout' );
			$background_layout_tablet = et_()->array_get( $background_layout_values, 'tablet', '' );
			$background_layout_phone  = et_()->array_get( $background_layout_values, 'phone', '' );

			$this_class->add_classname( "et_pb_bg_layout_{$background_layout}" );

			if ( ! empty( $background_layout_tablet ) ) {
				$this_class->add_classname( "et_pb_bg_layout_{$background_layout_tablet}_tablet" );
			}

			if ( ! empty( $background_layout_phone ) ) {
				$this_class->add_classname( "et_pb_bg_layout_{$background_layout_phone}_phone" );
			}

			add_filter( "et_builder_module_{$render_slug}_outer_wrapper_attrs", array( 'ET_Builder_Module_Helper_Woocommerce_Modules', 'maybe_add_background_layout_data' ), 10, 2 );
		}

		/**
		 * Processes the Button Icon options for Woocommerce Modules.
		 * Adds et_pb_woo_custom_button_icon class if needed.
		 * Adds Filter for $outer_wrapper_attrs, so required button icon attributes can be added for specific modules.
		 *
		 * @since 3.29
		 *
		 * @param string             $render_slug Module's render slug.
		 * @param ET_Builder_Element $this_class  Module's class.
		 *
		 * @return void.
		 */
		public static function process_custom_button_icons( $render_slug, $this_class ) {
			$button_custom      = $this_class->props['custom_button'];
			$custom_icon_values = et_()->array_get( $this_class->props, 'button_icon', '' );

			// Exit if no custom styles or icons defined for button.
			if ( 'on' !== $button_custom || '' === $custom_icon_values ) {
				return;
			}

			$this_class->add_classname( 'et_pb_woo_custom_button_icon' );
			add_filter( "et_builder_module_{$render_slug}_outer_wrapper_attrs", array( 'ET_Builder_Module_Helper_Woocommerce_Modules', 'add_custom_button_icons' ), 10, 2 );
		}

		/**
		 * Filters the $outer_wrapper_attrs.
		 * Adds 'data-button-class', 'data-button-icon', 'data-button-icon-tablet' and 'data-button-icon-phone' attributes if needed.
		 *
		 * @since 3.29
		 *
		 * @param array              $outer_wrapper_attrs Key value pairs of outer wrapper attributes.
		 * @param ET_Builder_Element $this_class          Module's class.
		 *
		 * @return array filtered $outer_wrapper_attrs.
		 */
		public static function add_custom_button_icons( $outer_wrapper_attrs, $this_class ) {
			$custom_icon_values = et_pb_responsive_options()->get_property_values( $this_class->props, 'button_icon' );
			$custom_icon        = isset( $custom_icon_values['desktop'] ) ? $custom_icon_values['desktop'] : '';
			$custom_icon_tablet = isset( $custom_icon_values['tablet'] ) ? $custom_icon_values['tablet'] : '';
			$custom_icon_phone  = isset( $custom_icon_values['phone'] ) ? $custom_icon_values['phone'] : '';

			if ( '' !== $custom_icon || '' !== $custom_icon_tablet || '' !== $custom_icon_phone ) {
				$outer_wrapper_attrs['data-button-class']       = esc_attr( $this_class->get_button_classname() );
				$outer_wrapper_attrs['data-button-icon']        = esc_attr( et_pb_process_font_icon( $custom_icon ) );
				$outer_wrapper_attrs['data-button-icon-tablet'] = esc_attr( et_pb_process_font_icon( $custom_icon_tablet ) );
				$outer_wrapper_attrs['data-button-icon-phone']  = esc_attr( et_pb_process_font_icon( $custom_icon_phone ) );
			}

			return $outer_wrapper_attrs;
		}

		/**
		 * Gets the columns default.
		 *
		 * @return string
		 */
		public static function get_columns_posts_default() {
			return array(
				'filter',
				'et_builder_get_woo_default_columns',
			);
		}

		/**
		 * Gets the columns default value for the current Product.
		 *
		 * @return string
		 */
		public static function get_columns_posts_default_value() {
			$post_id = et_core_page_resource_get_the_ID();
			$post_id = $post_id ? $post_id : (int) et_()->array_get( $_POST, 'current_page.id' );

			$page_layout = get_post_meta( $post_id, '_et_pb_page_layout', true );

			if ( $page_layout && 'et_full_width_page' !== $page_layout && ! ET_Builder_Element::is_theme_builder_layout() ) {
				return '3'; // Set to 3 if page has sidebar.
			}

			/*
			 * Default number is based on the WooCommerce plugin default value.
			 *
			 * @see woocommerce_output_related_products()
			 */
			return '4';
		}

		/**
		 * Gets the Title header tag.
		 *
		 * WooCommerce version influences the returned header.
		 *
		 * @return string
		 */
		public static function get_title_header() {
			$header = 'h3';

			if ( ! et_is_woocommerce_plugin_active() ) {
				return $header;
			}

			global $woocommerce;
			if ( version_compare( $woocommerce->version, '3.0.0', '>=' ) ) {
				$header = 'h2';
			}

			return $header;
		}

		/**
		 * Gets the Title selector.
		 *
		 * WooCommerce changed the title tag from h3 to h2 in v3.0.0
		 *
		 * @uses ET_Builder_Module_Helper_Woocommerce_Modules::get_title_header()
		 *
		 * @return string
		 */
		public static function get_title_selector() {
			return sprintf( 'li.product %s', self::get_title_header() );
		}

		/**
		 * Appends Data Icon attribute to the Outer wrapper.
		 *
		 * @param array $outer_wrapper_attrs Key value pairs of outer wrapper attributes.
		 * @param mixed $this_class          Module's class.
		 *
		 * @return array
		 */
		public static function output_data_icon_attrs( $outer_wrapper_attrs, $this_class ) {
			$hover_icon         = et_()->array_get( $this_class->props, 'hover_icon', '' );
			$hover_icon_values  = et_pb_responsive_options()->get_property_values( $this_class->props, 'hover_icon' );
			$hover_icon_tablet  = et_()->array_get( $hover_icon_values, 'tablet', '' );
			$hover_icon_phone   = et_()->array_get( $hover_icon_values, 'phone', '' );
			$hover_icon_sticky  = et_pb_sticky_options()->get_value( 'hover_icon', $this_class->props );
			$overlay_attributes = ET_Builder_Module_Helper_Overlay::get_attributes(
				array(
					'icon'        => $hover_icon,
					'icon_tablet' => $hover_icon_tablet,
					'icon_phone'  => $hover_icon_phone,
					'icon_sticky' => $hover_icon_sticky,
				)
			);

			return array_merge( $outer_wrapper_attrs, $overlay_attributes );
		}

		/**
		 * Return all possible product tabs.
		 * See woocommerce_default_product_tabs() in woocommerce/includes/wc-template-functions.php
		 *
		 * @return array
		 */
		public static function get_default_product_tabs() {
			$tabs = array(
				'description'            => array(
					'title'    => esc_html__( 'Description', 'et_builder' ),
					'priority' => 10,
					'callback' => 'woocommerce_product_description_tab',
				),
				'additional_information' => array(
					'title'    => esc_html__( 'Additional information', 'et_builder' ),
					'priority' => 20,
					'callback' => 'woocommerce_product_additional_information_tab',
				),
				'reviews'                => array(
					'title'    => esc_html__( 'Reviews', 'et_builder' ),
					'priority' => 30,
					'callback' => 'comments_template',
				),
			);

			// Add custom tabs on default for theme builder.
			if ( et_builder_tb_enabled() ) {
				et_theme_builder_wc_set_global_objects();
				$tabs = apply_filters( 'woocommerce_product_tabs', $tabs );
				et_theme_builder_wc_reset_global_objects();
			}

			return $tabs;
		}

		public static function get_default_tab_options() {
			$tabs    = self::get_default_product_tabs();
			$options = array();

			foreach ( $tabs as $name => $tab ) {
				if ( ! isset( $tab['title'] ) ) {
					continue;
				}

				$options[ $name ] = array(
					'value' => $name,
					'label' => 'reviews' === $name ? esc_html__( 'Reviews', 'et_builder' ) :
						esc_html( $tab['title'] ),
				);
			}

			return $options;
		}

		/**
		 * Get calculated star rating width based on letter spacing value.
		 *
		 * WooCommerce's .star-rating uses `em` based width on float layout;
		 * any additional width caused by letter-spacing makes the calculation incorrect;
		 * thus the `width: calc()` overwrite.
		 *
		 * @param  string $value
		 *
		 * @return string
		 */
		public static function get_rating_width_style( $value ) {
			$value          = et_builder_process_range_value( $value );
			$property_value = 'calc(5.4em + (' . $value . ' * 4))';

			return sprintf( 'width: %1$s;', esc_html( $property_value ) );
		}

		/**
		 * Get margin properties & values based on current alignment status.
		 *
		 * Default star alignment is not controlled by standard text align system. It uses float to control
		 * how stars symbol will be displayed based on the percentage. It's not possible to convert it to
		 * simple text align. We have to use margin left & right to set the alignment.
		 *
		 * @param  string $align
		 * @param  string $mode
		 *
		 * @return string
		 */
		public static function get_rating_alignment_style( $align, $mode = 'desktop' ) {
			// Bail early if mode is desktop and alignment is left or justify.
			if ( 'desktop' === $mode && in_array( $align, array( 'left', 'justify' ) ) ) {
				return array();
			}

			$margin_properties = array(
				'center' => array(
					'left'  => 'auto',
					'right' => 'auto',
				),
				'right'  => array(
					'left'  => 'auto',
					'right' => '0',
				),
			);

			// By default (left or justify), the margin will be left: inherit and right: auto.
			$margin_left  = et_()->array_get( $margin_properties, "{$align}.left", '0' );
			$margin_right = et_()->array_get( $margin_properties, "{$align}.right", 'auto' );

			return sprintf(
				'margin-left: %1$s !important; margin-right: %2$s !important;',
				esc_html( $margin_left ),
				esc_html( $margin_right )
			);
		}

		/**
		 * Get specific star rating style based on property type.
		 *
		 * @param  string $type
		 * @param  string $value
		 * @param  string $mode
		 *
		 * @return array
		 */
		public static function get_rating_style( $type, $value, $mode = 'desktop' ) {
			$style = array();

			switch ( $type ) {
				case 'rating_letter_spacing':
					$style = self::get_rating_width_style( $value );
					break;
				case 'rating_text_align':
					$style = self::get_rating_alignment_style( $value, $mode );
					break;
			}

			return $style;
		}

		/**
		 * Set styles for Woo's .star-rating element.
		 *
		 * @since 3.29
		 *
		 * @param string $render_slug
		 * @param array  $attrs
		 * @param string $selector
		 * @param string $hover_selector
		 *
		 * @return void
		 */
		public static function add_star_rating_style( $render_slug, $attrs, $selector = '%%order_class%% .star-rating', $hover_selector = '%%order_class%%:hover .star-rating', $props = array() ) {
			// Supported star rating properties will be handled here.
			if ( ! is_array( $props ) || empty( $props ) ) {
				$props = array( 'rating_letter_spacing', 'rating_text_align' );
			}

			foreach ( $props as $prop ) {
				// Get raw value.
				$values           = et_pb_responsive_options()->get_property_values( $attrs, $prop );
				$hover_value      = et_pb_hover_options()->get_value( $prop, $attrs, '' );
				$processed_values = array();

				// Get specific style value for desktop, tablet, and phone.
				foreach ( $values as $device => $value ) {
					if ( empty( $value ) ) {
						continue;
					}

					$processed_values[ $device ] = self::get_rating_style( $prop, $value, $device );
				}

				// Generate style for desktop, tablet, and phone.
				et_pb_responsive_options()->declare_responsive_css(
					$processed_values,
					$selector,
					$render_slug
				);

				// Generate style for hover.
				if ( et_builder_is_hover_enabled( $prop, $attrs ) && ! empty( $hover_value ) ) {
					ET_Builder_Element::set_style(
						$render_slug,
						array(
							'selector'    => $hover_selector,
							'declaration' => self::get_rating_style( $prop, $hover_value, 'hover', true ),
						)
					);
				}
			}
		}

		/**
		 * Get the product default.
		 *
		 * @return array
		 */
		public static function get_product_default() {
			return array(
				'filter',
				'et_builder_get_woo_default_product',
			);
		}

		/**
		 * Get the product default value for the current post type.
		 *
		 * @return string
		 */
		public static function get_product_default_value() {
			$post_id   = et_core_page_resource_get_the_ID();
			$post_id   = $post_id ? $post_id : (int) et_()->array_get( $_POST, 'current_page.id' );
			$post_type = get_post_type( $post_id );

			if ( 'product' === $post_type || et_theme_builder_is_layout_post_type( $post_type ) ) {
				return 'current';
			}

			return 'latest';
		}

		/**
		 * Converts the special chars in to their entities to be used in :before or :after
		 * pseudo selector content.
		 *
		 * @param string $chars
		 *
		 * @since 4.0
		 * @see   https://github.com/elegantthemes/Divi/issues/16976
		 *
		 * @return string
		 */
		public static function escape_special_chars( $chars ) {
			switch ( trim( $chars ) ) {
				case '&':
					return '\0026';
				case '>':
				case '&#8221;>&#8221;':
					return '\003e';
				default:
					return $chars;
			}
		}

		/**
		 * Gets the WooCommerce Tabs defaults.
		 *
		 * Implementation based on
		 *
		 * @see   https://github.com/elegantthemes/submodule-builder/pull/6568
		 *
		 * @since 4.4.2
		 *
		 * @return array
		 */
		public static function get_woo_default_tabs() {
			return array(
				'filter',
				'et_builder_get_woo_default_tabs',
			);
		}

		/**
		 * Gets the WooCommerce Tabs options for the given Product.
		 *
		 * @since 4.4.2
		 *
		 * @return string
		 */
		public static function get_woo_default_tabs_options() {
			$maybe_product_id = self::get_product_default_value();
			$product_id       = self::get_product( $maybe_product_id );

			$current_product = wc_get_product( $product_id );
			if ( ! $current_product ) {
				return '';
			}

			global $product, $post;
			$original_product = $product;
			$original_post    = $post;
			$product          = $current_product;
			$post             = get_post( $product->get_id() );

			$tabs = apply_filters( 'woocommerce_product_tabs', array() );
			// Reset global $product.
			$product = $original_product;
			$post    = $original_post;

			if ( ! empty( $tabs ) ) {
				return implode( '|', array_keys( $tabs ) );
			}

			return '';
		}

		/**
		 * Sets the Display type to render only Products.
		 *
		 * @since 4.1.0
		 *
		 * @see     https://github.com/elegantthemes/Divi/issues/17998
		 *
		 * @used-by ET_Builder_Module_Woocommerce_Related_Products::render()
		 * @used-by ET_Builder_Module_Woocommerce_Upsells::render()
		 *
		 * @param string $option_name
		 * @param string $display_type
		 *
		 * @return string
		 */
		public static function set_display_type_to_render_only_products( $option_name, $display_type = '' ) {
			$existing_display_type = get_option( $option_name );
			update_option( $option_name, $display_type );

			return $existing_display_type;
		}

		/**
		 * Resets the display type to the existing value.
		 *
		 * @since 4.1.0
		 *
		 * @see     https://github.com/elegantthemes/Divi/issues/17998
		 *
		 * @used-by ET_Builder_Module_Woocommerce_Related_Products::render()
		 * @used-by ET_Builder_Module_Woocommerce_Upsells::render()
		 *
		 * @param $option_name
		 * @param $display_type
		 */
		public static function reset_display_type( $option_name, $display_type ) {
			update_option( $option_name, $display_type );
		}
	}

	add_filter(
		'et_builder_get_woo_default_columns',
		array(
			'ET_Builder_Module_Helper_Woocommerce_Modules',
			'get_columns_posts_default_value',
		)
	);

	add_filter(
		'et_builder_get_woo_default_product',
		array(
			'ET_Builder_Module_Helper_Woocommerce_Modules',
			'get_product_default_value',
		)
	);

	add_filter(
		'et_builder_get_woo_default_tabs',
		array(
			'ET_Builder_Module_Helper_Woocommerce_Modules',
			'get_woo_default_tabs_options',
		)
	);
}

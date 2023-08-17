<?php
/**
 * CAWeb Service Tiles Module (Fullwidth)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb Service Tiles Module (Fullwidth)
 */
class CAWeb_Module_Fullwidth_Service_Tiles extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_fullwidth_service_tiles';
	/**
	 * Visual Builder Support
	 *
	 * @var string Whether or not this module supports Divi's Visual Builder.
	 */
	public $vb_support = 'on';

	/**
	 * Module Initialization
	 *
	 * @return void
	 */
	public function init() {
		$this->name      = esc_html__( 'FullWidth Service Tiles', 'et_builder' );
		$this->fullwidth = true;

		$this->child_slug      = 'et_pb_ca_fullwidth_service_tiles_item';
		$this->child_item_text = esc_html__( 'Tile', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'body'   => esc_html__( 'Body', 'et_builder' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'text' => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
				),
			),
		);

		add_action( 'wp_footer', array( $this, 'caweb_service_tiles_init' ), 20 );
	}

	/**
	 * Set tile information before rendering
	 *
	 * @return void
	 */
	public function before_render() {
		global $caweb_tile_count, $caweb_tiles;

		$caweb_tiles = array();
		$titles      = array();
		$tile_images = array();
		$tile_sizes  = array();
		$tile_links  = array();
		$tile_urls   = array();

		$caweb_tile_count = 0;
	}

	/**
	 * Returns an array of all the Module Fields.
	 *
	 * @return array
	 */
	public function get_fields() {
		$general_fields = array(
			'view_more_on_off' => array(
				'label'           => esc_html__( 'View More', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'view_more_url' => array(
				'label'             => esc_html__( 'Link Url', 'et_builder' ),
				'type'              => 'text',
				'show_if'           => array( 'view_more_on_off' => 'on' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'body',
			),
			'view_more_text' => array(
				'label'             => esc_html__( 'Link Text', 'et_builder' ),
				'type'              => 'text',
				'show_if'           => array( 'view_more_on_off' => 'on' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'body',
			),
		);

		$design_fields = array();

		$advanced_fields = array();

		return array_merge( $general_fields, $design_fields, $advanced_fields );
	}

	/**
	 * Renders the Module on the frontend
	 *
	 * @param  mixed $unprocessed_props Module Props before processing.
	 * @param  mixed $content Module Content.
	 * @param  mixed $render_slug Module Slug Name.
	 * @return string
	 */
	public function render( $unprocessed_props, $content, $render_slug ) {
		$view_more_on_off = $this->props['view_more_on_off'];
		$view_more_text   = $this->props['view_more_text'];
		$view_more_url    = $this->props['view_more_url'];

		$this->add_classname( 'section-understated' );
		$this->add_classname( 'collapsed' );
		$class = sprintf( ' class="%1$s" ', $this->module_classname( $render_slug ) );

		global $caweb_tile_count, $caweb_tiles;

		$view_more = 'on' === $view_more_on_off ? sprintf( '<div class="more-button"><div class="more-content"></div><a href="%1$s" class="btn-more inverse" target="_blanK"><span class="ca-gov-icon-plus-fill" aria-hidden="true"></span><span class="more-title">%2$s</span></a></div>', esc_url( $view_more_url ), $view_more_text ) : '';

		$output = '';

		for ( $i = 0; $i < $caweb_tile_count; $i++ ) {
			$title      = sprintf( '<div class="teaser"><h4 class="title">%1$s</h4></div>', $caweb_tiles[ $i ]['item_title'] );
			$tile_size  = $caweb_tiles[ $i ]['tile_size'];
			$item_image = $caweb_tiles[ $i ]['item_image'];

			if ( 'half' === $tile_size ) {
				$tile_size = 'w-50';
			} elseif ( 'full' === $tile_size ) {
				$tile_size = 'w-100';
			}

			if ( 'on' === $caweb_tiles[ $i ]['tile_link'] ) {
				if ( ! empty( $item_image ) ) {
					$alt_text   = caweb_get_attachment_post_meta( $item_image, '_wp_attachment_image_alt' );
					$item_image = sprintf( '<img src="%1$s" alt="%2$s" class="w-100" style="background-size: cover;height: 320px;" />', $item_image, ! empty( $alt_text ) ? $alt_text : ' ' );
				}

				$output .= sprintf( '<div tabindex="0" class="service-tile service-tile-empty %1$s" data-url="%2$s" data-link-target="new" >%3$s%4$s</div>', $tile_size, $caweb_tiles[ $i ]['tile_url'], $item_image, $title );
			} else {
				$output .= sprintf( '<div tabindex="0" class="service-tile %2$s" data-tile-id="panel-%1$s" style="background-image:url(%3$s); background-size: cover;">%4$s</div>', $i + 1, $tile_size, $item_image, $title );
			}
		}
		for ( $i = 0; $i < $caweb_tile_count; $i++ ) {
			if ( 'off' === $caweb_tiles[ $i ]['tile_link'] ) {
				$output .= sprintf(
					'<div %1$s data-tile-id="panel-%2$s"><div class="section section-default px-3"><div class="container pt-0"><div class="card card-block"><button type="button" class="close btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><div class="group px-3">%3$s</div></div></div></div></div>',
					$caweb_tiles[ $i ]['module_class'],
					$i + 1,
					$caweb_tiles[ $i ]['content']
				);
			}
		}

		$output .= $this->content;

		$output = sprintf( '<div%1$s%2$s><div class="service-group clearfix">%3$s</div>%4$s</div>', $this->module_id(), $class, $output, $view_more );

		return $output;
	}


	/**
	 * Service Tile script taken from State Template after it was removed.
	 *
	 * @return void
	 */
	public function caweb_service_tiles_init() {
		?>
		<script>
			var __$currentRow = null;
			/**
			 * TODO: +Docs
			 * @param  {[type]} $item  [description]
			 * @param  {[type]} method [description]
			 * @return {[type]}        [description]
			 */
			function createExpandedRow($item, method) {
				var newEl = $('<div>').addClass('service-tile-full');
				$item[method](newEl);
				// HACK: trigger on focus so transitions work
				newEl.trigger("focus");
				newEl.addClass('is-open');
				return newEl;
			}

			function checkIfOldAndSet($rowEl) {
				// remove old rows if needed
				if (__$currentRow && !__$currentRow.is($rowEl)) {
					shrinkAndRemove(__$currentRow);
				}
				// set and insert our content
				__$currentRow = $rowEl;

			}

			// * TODO: +Docs
			// * @param  {[type]} $el [description]
			// * @return {[type]}     [description]

			function scrollToEl($el) {
				if (!$el || !$el.length) {
					return;
				}
				var scrollVal = $el.offset().top;
				$('html, body').animate({
					scrollTop: scrollVal
				}, 450);
			}

			/**
			 * TODO: +Docs
			 * @param  {[type]} $item [description]
			 * @return {[type]}       [description]
			 */
			function findRow($item) {

				// look at the following siblings and get the first element which is
				// not on the same row
				var $nextItem = $item.nextAll('.service-tile, .service-tile-full').filter(function () {
					return $(this).offset().top !== $item.offset().top;
				}).first();

				// We have already created and inserted the required expanded element
				if ($nextItem.is('.service-tile-full')) {
					// already created the row
					return $nextItem;
				}

				// We need to insert a expanded tile here
				if ($nextItem.is('.service-tile')) {
					// we insert the required element and then return after its inserted
					return createExpandedRow($nextItem, 'before');
				}
				if ($item.nextAll('.service-tile').length) {
					return createExpandedRow($item.nextAll('.service-tile').last(), 'after');
				}
				// at this point the only other possiblity is a new row after all siblings
				return createExpandedRow($item, 'after');

			}

			// Generated by CoffeeScript 1.4.0

			/*
			eqHeight.coffee v1.2.3
			http://jsliang.github.com/eqHeight.coffee

			Copyright (c) 2013, Jui-Shan Liang <jenny@jsliang.com>
			All rights reserved.
			Licensed under GPL v2.
			*/


			(function () {
				var $;

				$ = jQuery;

				$.fn.extend({
					eqHeight: function (column_selector) {
						return this.each(function () {
							var columns, equalizer, _equalize_marked_columns;
							columns = $(this).find(column_selector);
							if (columns.length === 0) {
								columns = $(this).children(column_selector);
							}
							if (columns.length === 0) {
								return;
							}
							_equalize_marked_columns = function () {
								var marked_columns, max_col_height;
								marked_columns = $(".eqHeight_row");
								max_col_height = 0;
								marked_columns.each(function () {
									if ($(this).height() > max_col_height) {
										return max_col_height = $(this).height();
									}
								});
								marked_columns.height(max_col_height);
								return $(".eqHeight_row").removeClass("eqHeight_row");
							};
							equalizer = function () {
								var row_top_value;
								columns.height("auto");
								row_top_value = columns.first().position().top;
								columns.each(function () {
									var current_top;
									current_top = $(this).position().top;
									if (current_top !== row_top_value) {
										_equalize_marked_columns();
										row_top_value = $(this).position().top;
									}
									return $(this).addClass("eqHeight_row");
								});
								return _equalize_marked_columns();
							};
							$(window).on("load", equalizer);
							return $(window).on("resize", equalizer);
						});
					}
				});

			}).call(this);

			jQuery(document).ready(function ($) {
				// Create the needed js event listeners, set up classes, etc
				$('.service-group').each(initServiceGroup);
			});

			function initServiceGroup() {

				// Define variables
				var $service = $(this);
				var $items = $service.find('.service-tile');


				$service.find('.service-tile-empty').on('click', function (e) {
					e.stopPropagation();
					var url = $(this).attr("data-url");
					window.location = url;
				});

				initTiles($service, $items);

				$(window).on('resize', function () {
					var newWidth = $(window).width();
					if (newWidth !== cachedWidth || undefined == cachedWidth ) {
						//DO RESIZE HERE
						if (__$currentRow) {
							shrinkAndRemove(__$currentRow);
						}
						initTiles($service, $items);

						cachedWidth = newWidth;
					}
				});

				// Mobile scrolling fires a resize event
				// http://stackoverflow.com/questions/9361968/
				// http://stackoverflow.com/questions/17328742
				var cachedWidth = $(window).width();

				// need to align all of our tiles from the get go
				$service.eqHeight(".service-tile");

				// When we ajax in more content, we have
				// to make sure our heights are still correct, and we have to
				$service.on('more.new', function () {
					$service.eqHeight(".service-tile");
					$(window).trigger('resize');
					$items = $service.find('.service-tile');
					// enable interactions
					initTiles($service, $items);
				});

				// make sure any icons are set to the proper size
				$items.find('.icon-fallback').each(setIconFallback);

				// enable interactions
				initTiles($service, $items);
				setUpEvents($service);

			}

			function initTiles($service, $items) {
				//  start off with everything closed
				$items.each(function () {
					setCloseClasses($(this));
				});
				// make sure any icons are set to the proper size
				$items.find('.icon-fallback').each(setIconFallback);
				// renable the tabs and accordian plugins
				$items.find('.collapse').collapse();

				// remove any inline height set from accordian view
				$service.find('.service-tile-full .container').css({ 'height': '' });
			}

			function shrinkAndRemove($rowEl) {
				// Explicitly set our height so css transitions can work their magic
				// $rowEl.css('height', $rowEl.height() + 'px');
				// we wait for the next redraw so

				$rowEl.animate({
					'height': '0px'
				}, 300, 'linear', function () {
					$rowEl.empty().remove();
				});

			}

			function setUpEvents($service) {

				function closeTile(e) {
					var $item = $(this);
					e.preventDefault();

					// remove the row
					var $rowEl = findRow($item);
					shrinkAndRemove($rowEl);

					// close the tile
					setCloseClasses($item);

				}

				function openTile(e) {
					var $item = $(this);
					e.preventDefault();

					// remove teasers for all others but keep this one
					// update their event handlers
					$service.find('.service-tile').not($item).each(function () {
						var $el = $(this);
						setCloseClasses($el);
					});


					// set this elements state to open
					$item.attr('data-state', 'open');

					// secure the element for holding the content and then insert it
					var $rowEl = findRow($item);

					checkIfOldAndSet($rowEl);

					insertContent($rowEl, $item);

					setCloseButtonEvent($item, closeTile);

				}


				$service.on('click', '.service-tile', function (e) {
					e.preventDefault();
					if ($(this).hasClass("touched")) {
						$(this).removeClass('touched');
						return;
					}

					var state = $(this).attr('data-state');
					switch (state) {
						case 'closed':
						case 'info':
							openTile.call(this, e);
							// this focues on close button after expandable panel is open, so user can tab into the pannel (it's for accessibility purposes)
							$("button.close").trigger("focus");
							break;
						case 'open':
							closeTile.call(this, e);
							break;
						default:
					}
				});


				// add the "tile-focus" class when got focus
				$('.service-tile').on("focusin", function () {
					$(this).addClass("tile-focus");

				});


				// Remove the "tile-focus" class when lost focus
				$('.service-tile').on("focusout", function () {
					$(this).removeClass("tile-focus");

				});


				// Make sure it works on 'enter' key (has same behavior as click event)
				$service.on('keyup', '.service-tile', function (e) {
					if (e.which === 13 && $(".service-tile").hasClass("tile-focus")) {
						$(this).trigger("click");
					}
				});


			}

			// Sets the icons to be big and still fit within the service-tile
			function setIconFallback() {
				var width = $(this).width();
				$(this).css({
					'font-size': width * 0.6
				});
			}


			// helper which does as it's name implies
			function setCloseClasses($item) {
				$item.attr('data-state', 'closed').removeClass('show-info');
			}

			function setCloseButtonEvent($item, func) {
				var id = $item.data('tile-id');
				var $content = $item.parent().find('.service-tile-panel[data-tile-id="' + id + '"]').first();
				$content.find('.close.btn').on('click', function (e) {
					func.call($item, e);
				});
			}

			function insertContent($rowEl, $item) {
				if (!$rowEl) {
					return;
				}
				var id = $item.data('tile-id');

				var $content = $item.parent().find('.service-tile-panel[data-tile-id="' + id + '"]').first();

				$rowEl.css('height', $rowEl.height() + "px");
				$rowEl.empty();
				$content.clone().appendTo($rowEl);
				$rowEl.animate({
					'height': $content.height() + 'px'
				}, 300, 'linear', function () {
					$rowEl.css('height', '');
					scrollToEl($item);
				});

			}
		</script>
		<?php
	}
}
new CAWeb_Module_Fullwidth_Service_Tiles();



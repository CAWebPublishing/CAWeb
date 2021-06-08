<?php
/**
 * Gutenberg editor typography.
 *
 * @package Builder
 * @subpackage Gutenberg
 * @since 4.7.6
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class use theme's chosen fonts in Gutenberg editor.
 *
 * Class ET_GB_Editor_Typography
 */
class ET_GB_Editor_Typography {

	/**
	 * `ET_GB_Editor_Typography` instance.
	 *
	 * @var ET_GB_Editor_Typography
	 */
	private static $_instance;

	/**
	 * TB's body layout post
	 *
	 * @var WP_Post
	 */
	private $_body_layout_post;

	/**
	 * The `et_pb_post_content` shortcode content extracted from the TB's body layout post content
	 *
	 * @var string
	 */
	private $_post_content_shortcode;

	/**
	 * The `et_pb_post_title shortcode` content extracted from the TB's body layout post content
	 *
	 * @var string
	 */
	private $_post_title_shortcode;

	/**
	 * CSS selector to target text content inside GB editor
	 *
	 * @var string
	 */
	private $_body_selector;

	/**
	 * CSS selector to target post title inside GB editor
	 *
	 * @var string
	 */
	private $_heading_selector;

	/**
	 * List of HTML element used in post content.
	 *
	 * @var array
	 */
	public static $body_selectors;

	/**
	 * List of HTML heading levels.
	 *
	 * @var array
	 */
	public static $heading_selectors;

	/**
	 * Constructor.
	 *
	 * ET_GB_Editor_Typography constructor.
	 */
	public function __construct() {

		if ( ! et_core_is_gutenberg_active() ) {
			return;
		}

		$this->register_hooks();
	}

	/**
	 * Get class instance.
	 *
	 * @return object class instance.
	 */
	public static function instance() {

		if ( null === self::$_instance ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Register hooks
	 */
	public function register_hooks() {
		add_action( 'admin_footer', array( $this, 'enqueue_block_typography_styles' ) );
	}

	/**
	 * Initialize the class.
	 */
	private function _initialize() {
		global $post;

		// Bail early if no post found.
		if ( empty( $post ) ) {
			return;
		}

		self::$body_selectors  = array( 'p', 'ol', 'ul', 'dl', 'dt' );
		$this->_body_selector  = self::_generate_selectors( self::$body_selectors, '.editor-styles-wrapper .wp-block .wp-block-freeform ' );
		$this->_body_selector .= ',' . self::_generate_selectors( self::$body_selectors, '.block-editor-block-list__layout ', '.wp-block' );

		self::$heading_selectors  = array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' );
		$this->_heading_selector  = self::_generate_selectors( self::$heading_selectors, '.editor-styles-wrapper .wp-block .wp-block-freeform ' );
		$this->_heading_selector .= ',' . self::_generate_selectors( self::$heading_selectors, '.editor-styles-wrapper ', '.rich-text' );
		$this->_heading_selector .= ',.edit-post-visual-editor__post-title-wrapper .editor-post-title__block .editor-post-title__input';

		$tb_layouts = et_theme_builder_get_template_layouts( ET_Theme_Builder_Request::from_post( $post->ID ) );

		// Bail if body layouts is not set current post.
		if ( ! isset( $tb_layouts[ ET_THEME_BUILDER_BODY_LAYOUT_POST_TYPE ] ) ) {
			return;
		}

		$body_layout             = $tb_layouts[ ET_THEME_BUILDER_BODY_LAYOUT_POST_TYPE ];
		$body_layout_id          = et_()->array_get( $body_layout, 'id' );
		$this->_body_layout_post = get_post( $body_layout_id );

		$this->_initialize_shortcode( '_post_content_shortcode', et_theme_builder_get_post_content_modules() );
		$this->_initialize_shortcode( '_post_title_shortcode', array( 'et_pb_post_title' ) );

	}

	/**
	 * Set the et_pb_post_content and et_pb_post_title shortcode from the body layout post content.
	 *
	 * @param string $prop {@see self::$_post_content_shortcode} or {@see self::$_post_title_shortcode} property.
	 * @param array  $tagnames Shortcode tagnames.
	 */
	private function _initialize_shortcode( $prop, $tagnames ) {
		$regex = get_shortcode_regex( $tagnames );

		if ( preg_match_all( "/$regex/", $this->_body_layout_post->post_content, $matches ) ) {
			$post_title_shortcodes = et_()->array_get( $matches, '0' );

			// Take the style from the first Post Title module that has the title enabled.
			foreach ( $post_title_shortcodes as $post_title_shortcode ) {
				if ( false === strpos( $post_title_shortcode, 'title="off"' ) ) {
					$this->{$prop} = $post_title_shortcode;

					return;
				}
			}
		} elseif ( preg_match_all( "/$regex/", $this->_body_layout_post->post_content, $matches, PREG_SET_ORDER ) ) {
			$this->{$prop} = et_()->array_get(
				$matches,
				'0.0'
			);
		}
	}

	/**
	 * Print GB typography style.
	 */
	public function enqueue_block_typography_styles() {

		if ( ! ( method_exists( get_current_screen(), 'is_block_editor' ) && get_current_screen()->is_block_editor() ) ) {
			return;
		}

		$this->_initialize();

		$styles = '';

		$styles .= $this->get_body_styles();
		$styles .= $this->get_title_styles();
		$styles .= $this->get_tb_styles();

		// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion -- Inline style.
		wp_register_style( 'divi-block-editor-styles', false );
		wp_enqueue_style( 'divi-block-editor-styles' );
		wp_add_inline_style( 'divi-block-editor-styles', $styles );

		// Enqueue google fonts.
		et_builder_print_font();
	}

	/**
	 * Print the post content style.
	 */
	public function get_body_styles() {

		$body_styles = '';

		$body_font = esc_html( et_get_option( 'body_font' ) );

		if ( ! empty( $body_font ) && 'none' !== $body_font ) {
			et_builder_enqueue_font( $body_font );
			$font_family = et_builder_get_font_family( $body_font );

			$body_styles .= et_builder_generate_css_style(
				array(
					'style' => 'font-family',
					'value' => str_replace( 'font-family: ', '', $font_family ),
				)
			);
		}

		$body_font_height = esc_html( et_get_option( 'body_font_height' ) );

		if ( ! empty( $body_font_height ) ) {
			$body_styles .= et_builder_generate_css_style(
				array(
					'style' => 'line-height',
					'value' => $body_font_height,
				)
			);
		}

		$body_font_size = esc_html( et_get_option( 'body_font_size' ) );

		if ( ! empty( $body_font_size ) ) {
			$body_styles .= et_builder_generate_css_style(
				array(
					'style'  => 'font-size',
					'value'  => $body_font_size,
					'suffix' => 'px',
				)
			);
		}

		$body_font_color = esc_html( et_get_option( 'font_color' ) );

		if ( ! empty( $body_font_color ) ) {
			$body_styles .= et_builder_generate_css_style(
				array(
					'style' => 'color',
					'value' => $body_font_color,
				)
			);
		}

		if ( ! empty( $body_styles ) ) {
			$body_styles = sprintf( '%1$s { %2$s }', $this->_body_selector, $body_styles );
		}

		$link_color = esc_html( et_get_option( 'link_color' ) );

		if ( ! empty( $link_color ) ) {
			$body_styles .= et_builder_generate_css(
				array(
					'style'    => 'color',
					'value'    => $link_color,
					'selector' => '.block-editor-block-list__layout .wp-block a, .editor-styles-wrapper .wp-block .wp-block-freeform a',
				)
			);
		}

		return $body_styles;
	}

	/**
	 * Print post title styles.
	 */
	public function get_title_styles() {

		$title_styles = '';

		$heading_font = esc_html( et_get_option( 'heading_font' ) );

		// Fallback to the body font.
		if ( empty( $heading_font ) || 'none' === $heading_font ) {
			$heading_font = esc_html( et_get_option( 'body_font' ) );
		}

		if ( ! empty( $heading_font ) && 'none' !== $heading_font ) {
			et_builder_enqueue_font( $heading_font );
			$font_family = et_builder_get_font_family( $heading_font );

			$title_styles .= et_builder_generate_css_style(
				array(
					'style' => 'font-family',
					'value' => str_replace( 'font-family: ', '', $font_family ),
				)
			);
		}

		$body_header_spacing = esc_html( et_get_option( 'body_header_spacing' ) );

		if ( ! empty( $body_header_spacing ) ) {
			$title_styles .= et_builder_generate_css_style(
				array(
					'style'  => 'letter-spacing',
					'value'  => $body_header_spacing,
					'suffix' => 'px',
				)
			);
		}

		$header_color = esc_html( et_get_option( 'header_color' ) );

		if ( ! empty( $header_color ) ) {
			$title_styles .= et_builder_generate_css_style(
				array(
					'style' => 'color',
					'value' => $header_color,
				)
			);
		}

		$body_header_height = esc_html( et_get_option( 'body_header_height' ) );

		if ( ! empty( $body_header_height ) && '1' !== $body_header_height ) {
			$title_styles .= et_builder_generate_css_style(
				array(
					'style' => 'line-height',
					'value' => $body_header_height,
				)
			);
		}

		$body_header_style = esc_html( et_get_option( 'body_header_style' ) );

		if ( ! empty( $body_header_style ) ) {
			// Convert string into array.
			$styles_array = explode( '|', $body_header_style );

			if ( in_array( 'bold', $styles_array, true ) ) {
				$title_styles .= et_builder_generate_css_style(
					array(
						'style' => 'font-weight',
						'value' => 'bold',
					)
				);
			}

			if ( in_array( 'italic', $styles_array, true ) ) {
				$title_styles .= et_builder_generate_css_style(
					array(
						'style' => 'font-style',
						'value' => 'italic',
					)
				);
			}

			if ( in_array( 'uppercase', $styles_array, true ) ) {
				$title_styles .= et_builder_generate_css_style(
					array(
						'style' => 'text-transform',
						'value' => 'uppercase',
					)
				);
			}

			if ( in_array( 'underline', $styles_array, true ) ) {
				$title_styles .= et_builder_generate_css_style(
					array(
						'style' => 'text-decoration',
						'value' => 'underline',
					)
				);
			}
		}

		$body_header_size = esc_html( et_get_option( 'body_header_size' ) );

		if ( ! empty( $title_styles ) ) {
			$title_styles = sprintf( '%1$s { %2$s }', $this->_heading_selector, $title_styles );
		}

		if ( ! empty( $body_header_size ) ) {
			$title_styles .= ',' . et_builder_generate_css(
				array(
					'style'    => 'font-size',
					'value'    => $body_header_size,
					'suffix'   => 'px',
					'selector' => '.editor-styles-wrapper .wp-block .wp-block-freeform h1',
				)
			);

			$title_styles .= ',' . et_builder_generate_css(
				array(
					'style'    => 'font-size',
					'value'    => intval( $body_header_size * .86 ),
					'suffix'   => 'px',
					'selector' => '.editor-styles-wrapper .wp-block .wp-block-freeform h2',
				)
			);

			$title_styles .= ',' . et_builder_generate_css(
				array(
					'style'    => 'font-size',
					'value'    => intval( $body_header_size * .73 ),
					'suffix'   => 'px',
					'selector' => '.editor-styles-wrapper .wp-block .wp-block-freeform h3',
				)
			);

			$title_styles .= ',' . et_builder_generate_css(
				array(
					'style'    => 'font-size',
					'value'    => intval( $body_header_size * .6 ),
					'suffix'   => 'px',
					'selector' => '.editor-styles-wrapper .wp-block .wp-block-freeform h4',
				)
			);

			$title_styles .= ',' . et_builder_generate_css(
				array(
					'style'    => 'font-size',
					'value'    => intval( $body_header_size * .53 ),
					'suffix'   => 'px',
					'selector' => '.editor-styles-wrapper .wp-block .wp-block-freeform h5',
				)
			);

			$title_styles .= ',' . et_builder_generate_css(
				array(
					'style'    => 'font-size',
					'value'    => intval( $body_header_size * .47 ),
					'suffix'   => 'px',
					'selector' => '.editor-styles-wrapper .wp-block .wp-block-freeform h6',
				)
			);
		}

		return $title_styles;
	}

	/**
	 * Print TB's style.
	 */
	public function get_tb_styles() {

		if ( empty( $this->_post_content_shortcode ) && empty( $this->_post_title_shortcode ) ) {
			return;
		}

		if ( ! class_exists( 'ET_Builder_Element' ) ) {
			require_once ET_BUILDER_DIR . 'class-et-builder-value.php';
			require_once ET_BUILDER_DIR . 'class-et-builder-element.php';
			require_once ET_BUILDER_DIR . 'ab-testing.php';
			et_builder_init_global_settings();
			et_builder_add_main_elements();
			et_builder_settings_init();
			ET_Builder_Element::set_media_queries();
		}

		// To generate the styles from the shortcode, this do_shortcode will intialize et_pb_post_content and et_pb_post_title modules classes.
		ob_start();
		do_shortcode( $this->_post_title_shortcode . $this->_post_content_shortcode );
		ob_end_clean();

		// Get style generated by modules.
		$tb_style = ET_Builder_Element::get_style();

		$have_post_content_style = preg_match( '/\.et_pb_post_content_0 { (.*) }/', $tb_style, $matches );
		if ( $have_post_content_style && isset( $matches[1] ) ) {
			$et_pb_post_content_styles = explode( ';', $matches[1] );
			$typography_properties     = array(
				'color',
				'font-family',
				'font-size',
				'font-weight',
				'font-style',
				'text-align',
				'text-shadow',
				'letter-spacing',
				'line-height',
				'text-transform',
				'text-decoration',
				'text-decoration-style',
			);

			$post_content_style = '';

			foreach ( $et_pb_post_content_styles as $et_pb_post_content_style ) {
				$style        = explode( ':', $et_pb_post_content_style ); // explode CSS property and value.
				$css_property = trim( et_()->array_get( $style, '0' ) );
				if ( in_array( $css_property, $typography_properties, true ) ) {
					$post_content_style .= $css_property . ':' . et_()->array_get( $style, '1' ) . ';';
				}
			}

			$tb_style = $this->_body_selector . ' {' . $post_content_style . '}' . $tb_style;
		}

		foreach ( self::$heading_selectors as $heading_selector ) {
			$tb_style = str_replace( ".et_pb_post_content_0 $heading_selector ", ".editor-styles-wrapper .wp-block .wp-block-freeform $heading_selector ,.editor-styles-wrapper $heading_selector.rich-text ", $tb_style );
		}

		$tb_style = str_replace( '.et_pb_post_content_0 a ', '.editor-styles-wrapper .wp-block .wp-block-freeform a,.block-editor-block-list__layout .wp-block a ', $tb_style );
		$tb_style = str_replace( array( '.et_pb_post_content_0 ul li ', '.et_pb_post_content_0.et_pb_post_content ul li' ), '.editor-styles-wrapper .wp-block .wp-block-freeform ul li,.block-editor-block-list__layout ul li ', $tb_style );
		$tb_style = str_replace( array( '.et_pb_post_content_0 ol li ', '.et_pb_post_content_0.et_pb_post_content ol li' ), '.editor-styles-wrapper .wp-block .wp-block-freeform ol li,.block-editor-block-list__layout ol li ', $tb_style );
		$tb_style = str_replace( array( 'et_pb_post_content_0 ul ', '.et_pb_post_content_0.et_pb_post_content ul ' ), '.editor-styles-wrapper .wp-block .wp-block-freeform ul.wp-block,.block-editor-block-list__layout ul.wp-block ', $tb_style );
		$tb_style = str_replace( array( '.et_pb_post_content_0 ol ', '.et_pb_post_content_0.et_pb_post_content ol ' ), '.editor-styles-wrapper .wp-block .wp-block-freeform ol.wp-block,.block-editor-block-list__layout ol.wp-block ', $tb_style );
		$tb_style = str_replace( array( '.et_pb_post_content_0 blockquote ', '.et_pb_post_content_0.et_pb_post_content blockquote' ), '.editor-styles-wrapper .wp-block .wp-block-freeform ol,.block-editor-block-list__layout blockquote ', $tb_style );

		// Replace the post title style selectors with editor's post title selector.
		$tb_style = str_replace( array( '.et_pb_post_title_0 .entry-title', '.et_pb_post_title_0 .et_pb_title_container h1.entry-title, .et_pb_post_title_0 .et_pb_title_container h2.entry-title, .et_pb_post_title_0 .et_pb_title_container h3.entry-title, .et_pb_post_title_0 .et_pb_title_container h4.entry-title, .et_pb_post_title_0 .et_pb_title_container h5.entry-title, .et_pb_post_title_0 .et_pb_title_container h6.entry-title' ), '.edit-post-visual-editor__post-title-wrapper .editor-post-title__block .editor-post-title__input', $tb_style );

		// Enqueue fonts.
		$fonts_regex = '/font-family:\s+[\'"]([a-zA-Z0-9\s]+)[\'"]/';
		$has_fonts   = preg_match_all( $fonts_regex, $tb_style, $matches, PREG_SET_ORDER );
		if ( false !== $has_fonts && isset( $match[1] ) ) {
			foreach ( $matches as $match ) {
				et_builder_enqueue_font( $match[1] );
			}
		}

		return $tb_style;
	}

	/**
	 * Generate css selectors from prefixes and suffixes.
	 *
	 * @param array  $selectors Selectors list.
	 * @param string $prefix Selector prefix.
	 * @param string $suffix  Selector suffix.
	 *
	 * @return string
	 */
	private static function _generate_selectors( $selectors, $prefix, $suffix = '' ) {
		$prepared_selectors = '';

		foreach ( (array) $selectors as $selector ) {
			$prepared_selectors .= $prefix . $selector . $suffix . ',';
		}

		return rtrim( $prepared_selectors, ',' );
	}

}

// Initialize ET_GB_Editor_Typography.
ET_GB_Editor_Typography::instance();

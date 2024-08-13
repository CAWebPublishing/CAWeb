<?php
/**
 * CAWeb GitHub Module (Standard)
 *
 * A list view display of a GitHub users/organizations repositories, that allow for various definitions to be displayed.
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb GitHub Module Class (Standard)
 */
class CAWeb_Module_GitHub extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_github';
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
		$this->name = esc_html__( 'GitHub', 'et_builder' );

		$this->fields_defaults = array(
			'per_page'  => array( 100, 'add_default_setting' ),
			'repo_type' => array( 'all', 'add_default_setting' ),
		);

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'style'  => esc_html__( 'Style', 'et_builder' ),
					'header' => esc_html__( 'Header', 'et_builder' ),
					'body'   => esc_html__( 'Body', 'et_builder' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'email' => esc_html__( 'Request Access Email', 'et_builder' ),
					'text'  => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
				),
			),
		);

		add_action( 'wp_enqueue_scripts', array( $this, 'caweb_github_wp_enqueue_scripts' ) );

	}

	/**
	 * Returns an array of all the Module Fields.
	 *
	 * @return array
	 */
	public function get_fields() {
		$general_fields = array(
			'per_page' => array(
				'label'       => esc_html__( 'Maximum # of results', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'Enter amount to display. Default is 100.', 'et_builder' ),
				'default'     => 100,
				'tab_slug'    => 'general',
				'toggle_slug' => 'style',
			),
			'repo_type' => array(
				'label'           => esc_html__( 'Repository Type', 'et_builder' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'all'     => esc_html__( 'All', 'et_builder' ),
					'public'  => esc_html__( 'Public', 'et_builder' ),
					'private' => esc_html__( 'Private', 'et_builder' ),
					'forks'   => esc_html__( 'Forks', 'et_builder' ),
				),
				'default'         => 'all',
				'description'     => 'Choose repository type you wish to display.',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'style',
			),
			'access_token' => array(
				'label'       => esc_html__( 'Personal Access Token', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'This is required for Private Repositories to display.', 'et_builder' ),
				'tab_slug'    => 'general',
				'toggle_slug' => 'style',
				'show_if_not' => array( 'repo_type' => 'public' ),
			),
			'request_email' => array(
				'label'       => esc_html__( 'Code Request Email', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'This is the administrators email that will receive all emails requesting access to private repositories.', 'et_builder' ),
				'tab_slug'    => 'general',
				'toggle_slug' => 'style',
				'show_if_not' => array( 'repo_type' => 'public' ),
			),
			'title' => array(
				'label'       => esc_html__( 'Title', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'Enter a title for the list.', 'et_builder' ),
				'tab_slug'    => 'general',
				'toggle_slug' => 'header',
			),
			'username' => array(
				'label'       => esc_html__( 'Username', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'Enter GitHub Username.', 'et_builder' ),
				'tab_slug'    => 'general',
				'toggle_slug' => 'body',
			),
			'increase_rate_limit' => array(
				'label'           => esc_html__( 'Increase Rate Limit', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'description'     => et_get_safe_localization( sprintf( 'Increase the maximum number of requests users are permitted to make per hour.<a href="%1$s" target="_blank" title="Rate Limiting">Rate Limiting</a>', esc_url( 'https://developer.github.com/v3/#rate-limiting' ) ) ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'client_id' => array(
				'label'       => esc_html__( 'Client ID', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'Enter GitHub Client ID.', 'et_builder' ),
				'tab_slug'    => 'general',
				'toggle_slug' => 'body',
				'show_if'     => array( 'increase_rate_limit' => 'on' ),
			),
			'client_secret' => array(
				'label'       => esc_html__( 'Client Secret', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'Enter GitHub Client Secret.', 'et_builder' ),
				'tab_slug'    => 'general',
				'toggle_slug' => 'body',
				'show_if'     => array( 'increase_rate_limit' => 'on' ),
			),
			'definitions' => array(
				'label'           => esc_html__( 'Definitions', 'et_builder' ),
				'type'            => 'multiple_checkboxes',
				'options'         => array(
					'name'       => esc_html__( 'Project Title', 'et_builder' ),
					'url'        => esc_html__( 'Add Link to repositories (Public Repositories Only)', 'et_builder' ),
					'desc'       => esc_html__( 'Description', 'et_builder' ),
					'fork'       => esc_html__( 'Fork', 'et_builder' ),
					'created_at' => esc_html__( 'Creation Date', 'et_builder' ),
					'updated_at' => esc_html__( 'Updated Date', 'et_builder' ),
					'language'   => esc_html__( 'Language', 'et_builder' ),
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
		);

		$design_fields = array(
			'title_size' => array(
				'label'             => esc_html__( 'Title Size', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => $this->caweb_get_text_sizes( array( 'p', 'h6' ) ),
				'default'           => 'h2',
				'description'       => esc_html__( 'Here you can choose the heading size for the list title.', 'et_builder' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'style',
			),
			'email_body' => array(
				'label'           => esc_html__( 'Body', 'et_builder' ),
				'type'            => 'textarea',
				'option_category' => 'basic_option',
				'description'     => et_get_safe_localization( sprintf( 'Here you can create the content that will be used within the body. Content must use proper URL Encoding (e.g. %%0A = line feed, %%91 = [, %%93 = ] )<a href="%1$s" target="_blank" title="URL Encoding Reference">URL Encoding Reference</a>', esc_url( 'https://www.w3schools.com/tags/ref_urlencode.asp' ) ) ),
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'email',
				'show_if_not'     => array( 'repo_type' => 'public' ),
			),
		);

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
		$title               = $this->props['title'];
		$title_size          = $this->props['title_size'];
		$username            = $this->props['username'];
		$client_id           = $this->props['client_id'];
		$client_secret       = $this->props['client_secret'];
		$access_token        = $this->props['access_token'];
		$definitions         = $this->props['definitions'];
		$increase_rate_limit = $this->props['increase_rate_limit'];
		$request_email       = $this->props['request_email'];
		$email_body          = $this->props['email_body'];
		$per_page            = $this->props['per_page'];
		$repo_type           = $this->props['repo_type'];

		$definitions = explode( '|', $definitions );

		$class = sprintf( ' class="%1$s"', $this->module_classname( $render_slug ) );

		$url = ! empty( $username )  ? sprintf(
				'https://api.github.com/orgs/%1$s/repos?per_page=%2$s%3$s&type=%4$s%5$s',
				$username,
				$per_page,
				'on' === $increase_rate_limit && ! empty( $client_id ) && ! empty( $client_secret ) ?
					sprintf( '&client_id=%1$s&client_secret=%2$s', $client_id, $client_secret ) : '',
				$repo_type,
				! empty( $access_token ) ? sprintf( '&access_token=%1$s', $access_token ) : ''
			) : '';

		$output = sprintf(
			'<div%1$s%2$s%3$s%4$s%5$s%6$s%7$s></div>',
			$this->module_id(),
			$class,
			! empty( $url ) ? sprintf(' data-url="%1$s"', $url ) : '',
			! empty( $title ) ? sprintf( ' data-title="%1$s"', $title ) : '',
			! empty( $title ) && ! empty( $title_size ) ? sprintf( ' data-title-size="%1$s"', $title_size ) : '',
			$request_email ? sprintf( ' data-email="%1$s"', $request_email ) : '',
			! empty( $definitions ) ? sprintf( ' data-definitions=%1$s', json_encode($definitions) ) : ''
		);

		return $output;
	}

	/**
	 * Register CAWeb Github module scripts/styles with priority of 99999999
	 *
	 * Fires when scripts and styles are enqueued.
	 *
	 * @wp_action add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 99999999 );
	 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
	 *
	 * @return void
	 */
	public function caweb_github_wp_enqueue_scripts() {
		wp_enqueue_script( 'caweb-github-script', site_url( preg_replace( '/(.*)\/wp-content/', '/wp-content', __DIR__ . '/' ) ) . '/github.js', array( 'jquery' ), CAWEB_VERSION, true );
	}
}
new CAWeb_Module_GitHub();

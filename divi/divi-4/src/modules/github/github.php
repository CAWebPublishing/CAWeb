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
				'description' => esc_html__( 'Enter amount to display per page. Default is 30, Max is 100.', 'et_builder' ),
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
				'options'           => array(
					'h1' => 'H1',
					'h2' => 'H2',
					'h3' => 'H3',
					'h4' => 'H4',
					'h5' => 'H5',
				),
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
		$title = $this->props['title'];
		$email = $this->props['request_email'];
		$emailBody = $this->props['email_body'];
		$output = '';

		// if title is set add attribute
		if( ! empty( $title ) ){
			$titleSize = $this->props['title_size'];

			$output .= sprintf( '<%1$s>%2$s</%1$s>', $titleSize, $title );
		}

		// get generated request url
		$url = $this->create_request_url();

			
		if( ! empty( $url ) ){
			$access_token        = $this->props['access_token'];
			$args = array(
				'headers' => array(
					'Accept'    => 'application/vnd.github.json',
				)
			);
			
			if( ! empty( $access_token ) ){
				$args['headers']['Authorization'] = 'Bearer ' . $access_token;
			}
				
			$request = wp_remote_get( $url, $args );
			
			if( 200 === wp_remote_retrieve_response_code( $request ) ){
				$response = wp_remote_retrieve_body( $request );
			
				// parse the data
				$data = json_decode( $response );
				
				$lis = array();

				// if definitions is set add attribute
				$definitions =  isset( $this->props['definitions'] ) && ! empty( $this->props['definitions'] ) ? 
					explode( '|', $this->props['definitions']) : array();
					
				foreach( $data as $repo ){
					$li = array();
						
					/**
					 * definition position
					 * Based on the definitions Module Field Setting
					 * 
					 * 0 - Project Title
					 * 1 - Add Link to repositories (Public Repositories Only)
					 * 2 - Description
					 * 3 - Fork
					 * 4 - Creation Date
					 * 5 - Updated Date
					 * 6 - Language
				     */
					foreach( $definitions as $i => $d ){
						// we only render if definition is on
						// we skip 1 since its more a question 
						if( 'on' ===$d && 1 !== $i){
								
							switch( $i ){
								case 0: // Project Title
									$name = esc_html( $repo->name );

									// if not private and if adding link
									$name = ! $repo->private && 'on' === $definitions[1] ? 
										sprintf( '<a href="%1$s" target="_blank">%2$s</a>', 
											$repo->html_url, 
											$name 
										) : $name;

									$li[] = sprintf( '<h3>%1$s</h3>', 
										$name 
									);
									break;
								case 2: // Description
									if( isset( $repo->description ) && ! empty( $repo->description ) ){
										$li[] = sprintf( '<p><b>Project Description:</b> %1$s</p>', $repo->description );
									}
									break;
								case 3: // Fork
									$li[] = sprintf( '<p><b>Project forked by another organization:</b> %1$s</p>', ! $repo->fork ? 'False' : 'True' );
									break;
								case 4: // Created At
									$li[] = sprintf( '<p><b>Created on:</b> %1$s</p>', $repo->created_at );
									break;
								case 5: // Updated At
									$li[] = sprintf( '<p><b>Updated on:</b> %1$s</p>', $repo->updated_at );
									break;
								case 6: // Language
									if( isset( $repo->language ) && ! empty( $repo->language ) ){
										$li[] = sprintf( '<p><b>Language:</b> %1$s</p>', $repo->language );
									}
									break;
							}
						}
					}

					if( ! empty( $email ) && $repo->private ){
						$li[] = sprintf( '<p>* This is a Private Repository <a class="btn btn-main ms-2" href="mailto:%1$s?subject=%2$s Repository Access Request%3$s">Request Access</a></p>', 
							$email,
							$repo->full_name,
							! empty( $emailBody ) ? '&body=' . $emailBody : ''
						);
					}

					$lis[] = sprintf( 
						'<li class="list-group-item border-0">%1$s</li>', 
						implode( '', $li ) 
					);
				}

				// add the list items to output
				$output .= sprintf(
					'<ul class="list-group-flush ps-0" data-definitions="%1$s"%2$s%3$s>%4$s</ul>', 
					implode( '|', $definitions ),
					! empty( $email ) ? sprintf(' data-email="%s"', esc_attr( $email ) ) : '',
					! empty( $emailBody ) ? sprintf(' data-email-body="%s"', esc_attr( $emailBody ) ) : '',
					implode( '', $lis)
				);

				// check for pagination if it exists
				$headers = wp_remote_retrieve_headers( $request );
				$links = wp_remote_retrieve_header( $request, 'link' );

				if( ! empty( $links ) ){
					// initialize the elements otherwise the array may not be indexed correctly
					$prevLinks = array(0, 0); 
					$nextLinks = array(0, 0);
					$lastPage = 1;

					// split the links at the comma,
					foreach( explode(  ',', $links ) as $link){
						// split the link at the semi colon,
						// 0 element has the url, 1 has the relationship.
						$parts = explode( ';', $link );
						// get the rel value and trim it 
						$rel = trim( str_replace( array( 'rel=', '"' ), '', $parts[1] ) );

						// we also use this to get the last page number
						$pageUrl = trim( $parts[0], ' <>' );

						// create the anchor element
						$element = sprintf(
							'<a data-url="%1$s" rel="%2$s" class="cursor-pointer fs-4 me-3">%3$s</a>',
							$pageUrl,
							$rel,
							strtoupper( $rel[0] ) . substr( $rel, 1 )
						);
						
						// We want the pagination display in the appropriate order
						switch( $rel ){
							case 'first';
								$prevLinks[0] = $element;
								break;
							case 'prev';
								$prevLinks[1] = $element;
								break;
							case 'next';
								$nextLinks[0] = $element;
								break;
							case 'last';
								$nextLinks[1] = $element;

								parse_str( parse_url( html_entity_decode( $pageUrl  ), PHP_URL_QUERY ), $params );

								$lastPage = isset($params['page']) ? $params['page'] : 1;
								break;
						}
					}
					
					// we save the PAT, client_id and client_secret in a site transient for use in ajax requests.
					// transient is only good for 30 minutes
					$transient = uniqid( 'caweb_github_' );

					set_site_transient( $transient, array(
						'pat'           => $access_token,
						'client_id'           => $this->props['client_id'],
						'client_secret'       => $this->props['client_secret'],
					), 30 * 60 );

					// add pagination to output
					$output .= sprintf(
						'<div data-info="%1$s" class="%2$s-pagination row"><strong class="text-center">Page <span class="current-page">1</span> of %3$s</strong><div class="col">%4$s</div><div class="col text-end">%5$s</div></div>',
						$transient,
						$this->slug,
						$lastPage,
						implode( '', array_filter( $prevLinks ) ), 
						implode( '', array_filter( $nextLinks ) )
					);
					
					
				}

			}
			
		}

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
		
		wp_register_script( 'caweb-github-script', site_url( preg_replace( '/(.*)\/wp-content/', '/wp-content', __DIR__ . '/' ) ) . '/github.js', array( 'jquery' ), CAWEB_VERSION, true );
		
		wp_localize_script( 'caweb-github-script', 'caweb_github_params', array(
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'caweb_github_request_url' ),
		) );
		
		wp_enqueue_script( 'caweb-github-script' );

	}

	public function create_request_url(){
		$url = '';

		// if username is set
		if( isset( $this->props['username'] ) && ! empty( $this->props['username'] ) ){	
			$username 			 = $this->props['username'];
			$per_page            = $this->props['per_page'];
			$client_id           = $this->props['client_id'];
			$client_secret       = $this->props['client_secret'];
			$increase_rate_limit = $this->props['increase_rate_limit'];
			$email_body          = $this->props['email_body'];
			$repo_type           = $this->props['repo_type'];

			$url = sprintf('https://api.github.com/orgs/%1$s/repos?per_page=%2$s%3$s&type=%4$s',
				$username,
				$per_page ,
				'on' === $increase_rate_limit && ! empty( $client_id ) && ! empty( $client_secret ) ?
					sprintf( '&client_id=%1$s&client_secret=%2$s', $client_id, $client_secret ) : '',
				$repo_type
			);

		}

		return $url;
	}

}
new CAWeb_Module_GitHub();
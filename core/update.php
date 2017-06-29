<?php
/*
	Sources
	https://github.com/WordPress/WordPress/blob/master/wp-admin/update.php
	https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/class-theme-upgrader.php
	https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/class-wp-upgrader.php
*/




function caweb_update_available(){
	if( isset( $_POST['payload'] ) ){
			global $caweb_update;

			if( !function_exists('get_site_transient') )
    		require_once ABSPATH . 'wp-includes/options.php';


			$args = array('headers' => array(
											'Authorization' => 'Basic ' . base64_encode( ':' . 'b081a0c27674a7cba62f5f314179f317b9a7a664' ),
											'Accept:' => 'application/vnd.github.v3+json', 'application/octet-stream'
										)
									);
			$payload = json_decode( stripcslashes( $_POST['payload'] ) );

			// Changelog location
			$changelog_path = '/wp-content' .  explode('wp-content', __DIR__)[1];
			$changelog  = __DIR__ . '/changelog.txt';

			// Open the log file
			$log = fopen($changelog, 'w+');

			$changelog = base64_decode( json_decode( wp_remote_retrieve_body(
									wp_remote_get(sprintf('https://api.github.com/repos/Danny-Guzman/CAWeb/contents/changelog.txt?ref=%1$s', $payload->release->target_commitish), $args)) )->content );

			// Write message to log
			fwrite($log, $changelog);


			// Close the log file
			fclose( $log );


			$caweb_update = get_site_transient( 'caweb_update_themes' );


				$last_update = new stdClass();

				$obj = array();
				$obj['new_version'] = $payload->release->tag_name;
				$obj['url'] = $_SERVER['SERVER_HOST'] . $changelog_path . '/changelog.txt';
				$obj['package'] = sprintf('https://api.github.com/repos/Danny-Guzman/CAWeb/zipball/%1$s',
																	$payload->release->tag_name);
				$theme_response = array(wp_get_theme()->Name => $obj);

				$last_update->response = (isset($caweb_update->response) ?
													$theme_response + $caweb_update->response :
													$theme_response);


				$last_update->last_checked = time();
				set_site_transient( 'caweb_update_themes' , $last_update);

	}
	exit();
}

add_action('admin_post', 'caweb_update_available');
add_action('admin_post_nopriv', 'caweb_update_available');
add_action('admin_post_nopriv_caweb_update_available', 'caweb_update_available');
add_action('admin_post_caweb_update_available', 'caweb_update_available');

function ca_admin_theme_update_init(){
	global $caweb_update;

	$caweb_core_updates = new caweb_auto_update (wp_get_theme());
}

add_action('admin_init', 'ca_admin_theme_update_init');

if(!class_exists('Theme_Upgrader') ){
      /** Theme_Upgrader class */
    	require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
      /** Theme_Upgrader class */
    	require_once ABSPATH . 'wp-admin/includes/class-theme-upgrader.php';


}

final class caweb_auto_update{
			protected $transient_name = 'caweb_update_themes';
			protected $token = 'b081a0c27674a7cba62f5f314179f317b9a7a664';

			/**
			* Theme Name
			*/

			protected $theme_name;
			protected $current_version;

			private static $_this;



			/**
			* Initialize a new instance of the WordPress Auto-Update class
			* @param string $current_version
			* @param string $theme_name
			*/
			function __construct( $theme ){
			// Set the class public variables
			$this->theme_name = $theme->Name;
			$this->current_version = $theme->Version;

			$this->args = array(
										'headers' => array(
											'Authorization' => 'Basic ' . base64_encode( ':' . $this->token ),
											'Accept:' =>  'application/vnd.github.v3+json','application/vnd.github.VERSION.raw', 'application/octet-stream'
										)
									);

			// define the alternative API for updating checking
				add_filter('pre_site_transient_update_themes', array($this, 'check_update'));

			// Define the alternative response for information checking
				add_filter('site_transient_update_themes', array($this, 'add_themes_to_update_notification'));

				//Define the alternative response for upgrader_package_options
				add_filter('upgrader_package_options', array($this, 'upgrader_package_options'), 10 );

				//Define the alternative response for download_package which gets called during theme upgrade
				add_filter('upgrader_pre_download', array($this, 'download_package'), 10 , 3 );

			}

	function upgrader_package_options($options){
		if( isset($options['hook_extra']['theme']) && $options['hook_extra']['theme'] == $this->theme_name )
			$options['destination'] = sprintf('%1$s/themes/%2$s/', WP_CONTENT_DIR, $this->theme_name);

		return $options;
	}

		// Alternative theme download for the WordPress Updater
		// https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/class-wp-upgrader.php
		public function download_package( $reply, $package ,  $upgrader ){
			if(isset($upgrader->skin->theme_info) && $upgrader->skin->theme_info->get('Name') == $this->theme_name){

				$theme = wp_remote_retrieve_body( wp_remote_get( $package , array_merge($this->args, array('timeout' => 60 ) ) ) );
				// Now use the standard PHP file functions

				file_put_contents(sprintf('%1$s/themes/%2$s.zip', WP_CONTENT_DIR, $this->theme_name), $theme);

				return sprintf('%1$s/themes/%2$s.zip', WP_CONTENT_DIR, $this->theme_name);
			}
			return $reply;
		}

		//alternative API for updating checking
		public function check_update($update_transient){
				$caweb_update_themes = get_site_transient( $this->transient_name );

				if( !isset($caweb_update_themes->response) ||  !isset($caweb_update_themes->response[$this->theme_name]) ){
						$payload = json_decode( wp_remote_retrieve_body(
													wp_remote_get('https://api.github.com/repos/Danny-Guzman/CAWeb/releases/latest', $this->args) ) );
					
					if( version_compare( $this->current_version, $payload->tag_name ) ){
							$last_update = new stdClass();

							$obj = array();
							$obj['new_version'] = $payload->tag_name;
							// Changelog location
						$changelog  = get_stylesheet_directory() . '/core/changelog.txt';

							// Open the log file
							$log = fopen($changelog, 'w+');

							$changelog = base64_decode( json_decode( wp_remote_retrieve_body(
													wp_remote_get(sprintf('https://api.github.com/repos/Danny-Guzman/CAWeb/contents/changelog.txt?ref=%1$s',
																								$payload->target_commitish), $this->args)) )->content );

							// Write message to log
							fwrite($log, $changelog);

							// Close the log file
							fclose( $log );

							$obj['url'] = get_stylesheet_directory_uri() . '/core/changelog.txt';
							$obj['package'] = sprintf('https://api.github.com/repos/Danny-Guzman/CAWeb/zipball/%1$s', $payload->tag_name);

							$theme_response = array($this->theme_name => $obj);

							$last_update->response = (isset($caweb_update_themes->response) ?
																$theme_response + $caweb_update_themes->response :
																$theme_response);

							$last_update->last_checked = time();
							set_site_transient($this->transient_name, $last_update);
					}

				}


				return $update_transient;

		}

	// Add the CAWeb Update to List of Available Updated
	public function add_themes_to_update_notification( $update_transient){
		$caweb_update_themes = get_site_transient( $this->transient_name );

		if ( ! is_object( $caweb_update_themes ) || ! isset( $caweb_update_themes->response ) ) {
			return $update_transient;
		}

		// Fix for warning messages on Dashboard / Updates page
		if ( ! is_object( $update_transient ) ) {
			$update_transient = new stdClass();
		}

		$update_transient->response = array_merge( ! empty( $update_transient->response ) ? $update_transient->response : array(), $caweb_update_themes->response );


		return $update_transient;
	}


}

?>

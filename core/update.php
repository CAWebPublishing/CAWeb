<?php
/*
	Sources
	https://github.com/WordPress/WordPress/blob/master/wp-admin/update.php
	https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/class-theme-upgrader.php
	https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/class-wp-upgrader.php
 */
if ( ! class_exists('CAWeb_Theme_Update')) {
    final class CAWeb_Theme_Update {
        protected $transient_name = 'caweb_update_themes';
        protected $user;

        /**
         * Theme Name
         */

        protected $theme_name;
        protected $current_version;
        protected $changelog;

        private static $_this;

        /**
         * Initialize a new instance of the WordPress Auto-Update class
         * @param string $current_version
         * @param string $theme_name
         */
        function __construct($theme) {
            // Don't allow more than one instance of the class
            if (isset(self::$_this)) {
                wp_die(sprintf(esc_html__('%s: You cannot create a second instance of this class.', 'et-core'), get_class($this)));
            }

            self::$_this = $this;

            // Set the class public variables
            $this->user = get_site_option('caweb_username', 'CAWebPublishing');
            $this->theme_name = $theme->Name;
            $this->current_version = $theme->Version;

            $this->args = array(
                'headers' => array(
                    'User-Agent' => 'WP-'.$this->theme_name,
                    'Accept:' =>  'application/vnd.github.v3+json', 'application/vnd.github.VERSION.raw', 'application/octet-stream'
                )
            );

            if (true == get_site_option('caweb_private_theme_enabled', false)) {
                $this->args['headers']['Authorization'] = 'Basic '.base64_encode(':'.get_site_option('caweb_password', ''));
            }

            add_action('admin_post_nopriv_caweb_update_available', array($this, 'caweb_update_available'));
            add_action('admin_post_caweb_update_available', array($this, 'caweb_update_available'));

            // define the alternative API for updating checking
            add_filter('pre_set_site_transient_update_themes', array($this, 'caweb_check_update'));

            // Define the alternative response for information checking
            add_filter('site_transient_update_themes', array($this, 'caweb_add_themes_to_update_notification'));

            //Define the alternative response for download_package which gets called during theme upgrade
            add_filter('upgrader_pre_download', array($this, 'caweb_upgrader_pre_download'), 10, 3);

            //Define the alternative response for upgrader_pre_install
            add_filter('upgrader_source_selection', array($this, 'caweb_upgrader_source_selection'), 10, 4);

            //Define the alternative response for upgrader_pre_install
            add_filter('upgrader_post_install', array($this, 'caweb_upgrader_post_install'), 10, 3);

            add_action('after_setup_theme', array($this, 'remove_theme_update_actions'), 11);

            add_action('admin_post_caweb_get_changelog', array($this, 'caweb_get_theme_changelog'));
        }

        function remove_theme_update_actions() {
            remove_filter('pre_set_site_transient_update_themes', 'caweb_check_update');
            remove_filter('site_transient_update_themes', 'caweb_add_themes_to_update_notification');
        }

        function caweb_get_theme_changelog() {
            $caweb_update_themes = get_site_transient($this->transient_name);

            if ( ! empty($caweb_update_themes) && isset($caweb_update_themes->response[$this->theme_name ]['changelog'])) {
                $content = wp_remote_get($caweb_update_themes->response[$this->theme_name ]['changelog'], $this->args);

                if ( ! is_wp_error($content) && 200 == wp_remote_retrieve_response_code($content)) {
                    print '<pre>'.wp_remote_retrieve_body($content).'</pre>';
                } else {
                    print '<pre>No Changelog Available</pre>';
                }
            }

            exit();
        }
        //alternative API for updating checking
        public function caweb_check_update($update_transient) {
            if ( ! isset($update_transient->checked)) {
                return $update_transient;
            }

            $themes = $update_transient->checked;

            $last_update = new stdClass();

            $payload = wp_remote_get(sprintf('https://api.github.com/repos/%1$s/%2$s/releases/latest', $this->user, $this->theme_name), $this->args);

            if (is_wp_error($payload)) {
                //$options['body']['failed_request'] = 'true';
					//$theme_request = wp_remote_post( 'https://cdn.elegantthemes.com/api/api.php', $options );
            }

            if ( ! is_wp_error($payload) && wp_remote_retrieve_response_code($payload) == 200) {
                $payload = json_decode(wp_remote_retrieve_body($payload));

                //version_compare( $payload->tag_name,  $this->current_version, '>')
                if ( ! empty($payload) &&  ($payload->tag_name >  $this->current_version)) {
                    $obj = array();
                    $obj['new_version'] = $payload->tag_name;

                    $changelog_url = admin_url('admin-post.php?action=caweb_get_changelog');

                    $obj['url'] = $changelog_url;
                    $obj['package'] = $payload->zipball_url;

                    $theme_response = array($this->theme_name => $obj);

                    $update_transient->response = array_merge( ! empty($update_transient->response) ? $update_transient->response : array(), $theme_response);

                    $last_update->checked  = $themes;
                    $last_update->response = $theme_response;
                } else {
                    delete_site_transient($this->transient_name);
                }
            }

            $last_update->last_checked = time();
            set_site_transient($this->transient_name, $last_update);

            return $update_transient;
        }

        // Add the CAWeb Update to List of Available Updated
        public function caweb_add_themes_to_update_notification($update_transient) {
            $caweb_update_themes = get_site_transient($this->transient_name);

            if ( ! is_object($caweb_update_themes) || ! isset($caweb_update_themes->response)) {
                return $update_transient;
            }

            // Fix for warning messages on Dashboard / Updates page
            if ( ! is_object($update_transient)) {
                $update_transient = new stdClass();
            }

            $update_transient->response = array_merge( ! empty($update_transient->response) ? $update_transient->response : array(), $caweb_update_themes->response);

            return $update_transient;
        }

        // Alternative upgrader_pre_download for the WordPress Updater
        // https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/class-wp-upgrader.php
        public function caweb_upgrader_pre_download($reply, $package, $upgrader) {
            if ( ! class_exists('Theme_Upgrader')) {
                /** Theme_Upgrader class */
                require_once ABSPATH.'wp-admin/includes/class-wp-upgrader.php';
                /** Theme_Upgrader class */
                require_once ABSPATH.'wp-admin/includes/class-theme-upgrader.php';
            }

            if (isset($upgrader->skin->theme_info) && $upgrader->skin->theme_info->get('Name') == $this->theme_name) {
                $theme = wp_remote_retrieve_body(wp_remote_get($package, array_merge($this->args, array('timeout' => 60))));

                file_put_contents(sprintf('%1$s/themes/%2$s.zip', WP_CONTENT_DIR, $this->theme_name), $theme);

                // move any external site css if external css directory exists
                if (file_exists(sprintf('%1$s/css/external/', CAWebAbsPath))) {
                    rename(sprintf('%1$s/css/external/', CAWebAbsPath),
							sprintf('%1$s/caweb_external_css/', wp_upload_dir()['basedir']));
                }

                // Delete existing transient
                delete_site_transient($this->transient_name);

                return sprintf('%1$s/themes/%2$s.zip', WP_CONTENT_DIR, $this->theme_name);
            }

            return $reply;
        }

        // Alternative upgrader_source_selection for the WordPress Updater
        // https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/class-wp-upgrader.php
        function caweb_upgrader_source_selection($src, $rm_src, $upgr, $options) {
            if ( ! isset($options['theme']) || $options['theme'] !== $this->theme_name) {
                return $src;
            }

            $tmp = explode('/', $src);
            array_shift($tmp);
            array_pop($tmp);
            $tmp[count($tmp) -1] = $tmp[count($tmp) -2];
            $tmp = sprintf('/%1$s/', implode('/', $tmp));

            rename($src, $tmp);

            return $tmp;
        }

        function caweb_upgrader_post_install($response, $hook_extra, $result) {
            // move any external site css existed move it back
            if (file_exists(sprintf('%1$s/caweb_external_css/', wp_upload_dir()['basedir']))) {
                rename(sprintf('%1$s/caweb_external_css/', wp_upload_dir()['basedir']),
			 				sprintf('%1$s/css/external/', CAWebAbsPath));
            }
        }
        function caweb_update_available() {
            if (isset($_POST['payload'])) {
                $this->check_update(null);
            }
            exit();
        }
    }
}
new CAWeb_Theme_Update(wp_get_theme());

?>

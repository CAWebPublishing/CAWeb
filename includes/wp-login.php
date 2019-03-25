<?php
/* Password Reset Filters and Actions
	https://github.com/WordPress/WordPress/blob/master/wp-login.php
 */
// Lost your password? URL
add_filter('lostpassword_url', 'caweb_lostpassword_url', 10, 2);
function caweb_lostpassword_url($lostpassword_url, $redirect) {
    return home_url('/wp-login.php?action=lostpassword');
}
// Redirect for after Lost your password has been generated
add_filter('lostpassword_redirect', 'caweb_lostpassword_redirect');
function caweb_lostpassword_redirect($lostpassword_redirect) {
    return home_url('/wp-login.php?checkemail=confirm');
}
// Changes Blog Name in title to the correct site Blog Name
add_filter('retrieve_password_title', 'caweb_retrieve_password_title', 11, 3);
function caweb_retrieve_password_title($title, $user_login, $user_data) {
    $pattern = '/\[.*\]/';
    $siteid = isset($_POST['siteid']) ? $_POST['siteid'] : 1;
    $blogname =  wp_specialchars_decode(get_blog_details($siteid)->blogname, ENT_QUOTES);

    return  preg_replace($pattern, sprintf('[%1$s]', $blogname), $title);
}

// Changes Blog Name in message to the correct site Blog Name
add_filter('retrieve_password_message', 'caweb_retrieve_password_message', 10, 4);
function caweb_retrieve_password_message($message, $key, $user_login, $user_data) {
    $pattern = array('/Site Name: .*/', '/<.*(\/wp-login.php)/');
    $siteid = isset($_POST['siteid']) ? $_POST['siteid'] : 1;
    $blogname =  wp_specialchars_decode(get_blog_details($siteid)->blogname, ENT_QUOTES);
    $blogurl = get_site_url($siteid);
    $replacements = array(sprintf('Site Name: %1$s', $blogname), sprintf('%1$s$1', $blogurl));

    $message = preg_replace($pattern, $replacements, $message);

    return $message;
}
// Change the Reset Password URL to use the site url instead of the network url
function caweb_network_site_url($url, $path, $scheme) {
    if (false !== strpos($url, '/wp-login.php?action=resetpass')) {
        return site_url('/wp-login.php?action=resetpass');
    }

    remove_filter('network_site_url', 'caweb_network_site_url');

    return $url;
}
// Add Reset Password Confirmation
add_filter('wp_login_errors', 'caweb_wp_login_errors', 10, 2);
function caweb_wp_login_errors($errors, $redirect_to) {
    global $interim_login;

    print '<style>.caweb-resetpass{border-left:4px solid #00a0d2;display:inline-block;padding:12px !important;margin: -12px -16px !important; }</style>';

    if ( ! $interim_login && isset($_GET['caweb']) && 'resetpass' == $_GET['caweb']) {
        $errors->add('updated', '<p class="caweb-resetpass">You have successfully reset your password.</p>');
    }

    return $errors;
}
// Add Site ID to lost password form
add_action('lostpassword_form', 'caweb_lostpassword_form');
function caweb_lostpassword_form() {
    printf('<input type="hidden" name="siteid" value="%1$d" />', get_current_blog_id());
}
// Login form for Lost Password
add_action('login_form_lostpassword', 'caweb_login_form_lostpassword');
function caweb_login_form_lostpassword() {
    // Check if have submitted
    $http_post     = ('POST' == $_SERVER['REQUEST_METHOD']);

    if ($http_post) {
        $errors = retrieve_password();
        if ( ! is_wp_error($errors)) {
            $redirect_to = ! empty($_REQUEST['redirect_to']) ? $_REQUEST['redirect_to'] : 'wp-login.php?checkemail=confirm';
            // wp_safe_redirect only works with local paths
            wp_redirect($redirect_to);
            exit();
        }
    }
}
// Hide the Confirm Weak Password on Reset Password
add_action('login_form_rp', 'caweb_login_form_rp');
function caweb_login_form_rp() {
    print '<style>.pw-weak{display:none !important;}</style>';

    add_filter('network_site_url', 'caweb_network_site_url', 10, 3);
}
// Password Reset Strength Validation
 add_action('validate_password_reset', 'caweb_validate_password_reset', 10, 2);
 function caweb_validate_password_reset($errors, $user) {
     if (isset($_GET['action']) && 'rp' == $_GET['action']) {
         if ( ! isset($_POST['pass1'])) {
             return;
         }

         $pass = $_POST['pass1'];
         $exp = '/^(?=.*\d)((?=.*[a-z])|(?=.*[A-Z])).{12,32}$/';

         if (strlen($pass) < 12 || ! preg_match($exp, $pass)) {
             $errors->add('error', 'Password must be alphanumeric and contain minimum 12 characters.', '');
         }
     } elseif (isset($_GET['action']) && 'resetpass' == $_GET['action']) {
         if (( ! $errors->get_error_code()) && isset($_POST['pass1']) && ! empty($_POST['pass1'])) {
             reset_password($user, $_POST['pass1']);
             setcookie($rp_cookie, ' ', time() - YEAR_IN_SECONDS, $rp_path, COOKIE_DOMAIN, is_ssl(), true);
             wp_redirect(site_url('/wp-login.php?caweb=resetpass'));
             exit;
         }
     }
 }
?>
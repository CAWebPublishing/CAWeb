<?php
/**
 * CAWeb Login
 *
 * @see https://developer.wordpress.org/reference/files/wp-login.php/
 * @see https://github.com/WordPress/WordPress/blob/master/wp-login.php
 *
 * @package CAWeb
 */

/* Actions */
add_action( 'login_init', 'caweb_login_form_init' );
add_action( 'lostpassword_form', 'caweb_lostpassword_form' );
add_action( 'login_form_lostpassword', 'caweb_login_form_lostpassword' );
add_action( 'login_form_rp', 'caweb_login_form_rp' );
add_action( 'validate_password_reset', 'caweb_validate_password_reset', 10, 2 );

/* Filters */
add_filter( 'lostpassword_url', 'caweb_lostpassword_url', 10, 2 );
add_filter( 'lostpassword_redirect', 'caweb_lostpassword_redirect' );
add_filter( 'retrieve_password_title', 'caweb_retrieve_password_title', 11, 3 );
add_filter( 'retrieve_password_message', 'caweb_retrieve_password_message', 10, 4 );
add_filter( 'wp_login_errors', 'caweb_wp_login_errors', 10, 2 );

/**
 * CAWeb Login Form
 * Adds a nonce to the login form $_REQUEST array.
 *
 * @return void
 */
function caweb_login_form_init() {
	$_REQUEST['caweb_disclaimer_nonce'] = wp_create_nonce( 'caweb_disclaimer' );
}

/**
 * Add Site ID to lost password form
 * Fires inside the lostpassword form tags, before the hidden fields.
 *
 * @link https://developer.wordpress.org/reference/hooks/lostpassword_form/
 * @return void
 */
function caweb_lostpassword_form() {
	printf( '<input type="hidden" name="siteid" value="%1$d" />', get_current_blog_id() );
}

/**
 * Login form for Lost Password
 * Fires before a specified login form action.
 *
 * @see https://developer.wordpress.org/reference/hooks/login_form_action/
 * @return void
 */
function caweb_login_form_lostpassword() {
	/* Check if have submitted*/
	$http_post = ( isset( $_SERVER['REQUEST_METHOD'] ) && 'POST' === $_SERVER['REQUEST_METHOD'] );

	if ( $http_post ) {
		$errors = retrieve_password();
		if ( ! is_wp_error( $errors ) ) {
			$redirect_to = ! empty( $_REQUEST['redirect_to'] ) ? $_REQUEST['redirect_to'] : 'wp-login.php?checkemail=confirm';
			/* wp_safe_redirect only works with local paths*/
			wp_redirect( $redirect_to );
			exit();
		}
	}
}

/**
 * Hide the Confirm Weak Password on Reset Password
 * Fires before a specified login form action.
 *
 * @see https://developer.wordpress.org/reference/hooks/login_form_action/
 * @return void
 */
function caweb_login_form_rp() {
	print '<style>.pw-weak{display:none !important;}</style>';

	add_filter( 'network_site_url', 'caweb_network_site_url', 10, 3 );
}

/**
 * Password Reset Strength Validation
 * Fires before the password reset procedure is validated.
 *
 * @link https://developer.wordpress.org/reference/hooks/validate_password_reset/
 *
 * @param  mixed $errors
 * @param  mixed $user
 *
 * @return void
 */
function caweb_validate_password_reset( $errors, $user ) {
	if ( isset( $_GET['action'] ) && 'rp' === $_GET['action'] ) {
		if ( ! isset( $_POST['pass1'] ) ) {
			return;
		}

		$pass = $_POST['pass1'];
		$exp  = '/^(?=.*\d)((?=.*[a-z])|(?=.*[A-Z])).{12,32}$/';

		if ( strlen( $pass ) < 12 || ! preg_match( $exp, $pass ) ) {
			$errors->add( 'error', 'Password must be alphanumeric and contain minimum 12 characters.', '' );
		}
	} elseif ( isset( $_GET['action'] ) && 'resetpass' === $_GET['action'] ) {
		if ( ( ! $errors->get_error_code() ) && isset( $_POST['pass1'] ) && ! empty( $_POST['pass1'] ) ) {
			reset_password( $user, $_POST['pass1'] );

			list( $rp_path ) = explode( '?', wp_unslash( $_SERVER['REQUEST_URI'] ) );

			setcookie( 'caweb-resetpass-' . md5( site_url() ), ' ', time() - YEAR_IN_SECONDS, $rp_path, COOKIE_DOMAIN, is_ssl(), true );
			wp_safe_redirect( site_url( '/wp-login.php?caweb=resetpass' ) );
			exit();
		}
	}
}

/**
 * Lost your password? URL
 * Filters the Lost Password URL.
 *
 * @link https://developer.wordpress.org/reference/hooks/lostpassword_url/
 * @param  string $lostpassword_url The lost password page URL.
 * @param  string $redirect he path to redirect to on login.
 *
 * @return URL
 */
function caweb_lostpassword_url( $lostpassword_url, $redirect ) {
	return home_url( '/wp-login.php?action=lostpassword' );
}

/**
 * Redirect for after Lost your password has been generated
 * Filters the URL redirected to after submitting the lostpassword/retrievepassword form.
 *
 * @link https://developer.wordpress.org/reference/hooks/lostpassword_redirect/
 * @param  string $lostpassword_redirect The redirect destination URL.
 *
 * @return URL
 */
function caweb_lostpassword_redirect( $lostpassword_redirect ) {
	return home_url( '/wp-login.php?checkemail=confirm' );
}

/**
 * Changes Blog Name in title to the correct site Blog Name
 * Filters the subject of the password reset email.
 *
 * @link https://developer.wordpress.org/reference/hooks/retrieve_password_title/
 *
 * @param  string  $title Default email title.
 * @param  string  $user_login The username for the user.
 * @param  WP_User $user_data WP_User object.
 *
 * @return string
 */
function caweb_retrieve_password_title( $title, $user_login, $user_data ) {
	$pattern  = '/\[.*\]/';
	$siteid   = isset( $_POST['siteid'] ) ? $_POST['siteid'] : 1;
	$blogname = wp_specialchars_decode( get_bloginfo(), ENT_QUOTES );

	return preg_replace( $pattern, sprintf( '[%1$s]', $blogname ), $title );
}

/**
 * Changes Blog Name in message to the correct site Blog Nameb_retrieve_password_message
 * Filters the message body of the password reset mail.
 *
 * @link https://developer.wordpress.org/reference/hooks/retrieve_password_message/
 *
 * @param  string  $message Default mail message.
 * @param  string  $key The activation key.
 * @param  string  $user_login The username for the user.
 * @param  WP_User $user_data WP_User object.
 *
 * @return string
 */
function caweb_retrieve_password_message( $message, $key, $user_login, $user_data ) {
	$pattern      = array( '/Site Name: .*/', '/<.*(\/wp-login.php)/' );
	$siteid       = isset( $_POST['siteid'] ) ? $_POST['siteid'] : 1;
	$blogname     = wp_specialchars_decode( get_bloginfo(), ENT_QUOTES );
	$blogurl      = get_site_url( $siteid );
	$replacements = array( sprintf( 'Site Name: %1$s', $blogname ), sprintf( '%1$s$1', $blogurl ) );

	$message = preg_replace( $pattern, $replacements, $message );

	return $message;
}

/**
 * Add Reset Password Confirmation
 * Filters the login page errors.
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_login_errors/
 * @param  mixed $errors WP Error object.
 * @param  mixed $redirect_to Redirect destination URL.
 *
 * @return string
 */
function caweb_wp_login_errors( $errors, $redirect_to ) {
	global $interim_login;

	if ( ! $interim_login && isset( $_GET['caweb'] ) && 'resetpass' === $_GET['caweb'] ) {
		$errors->add( 'updated', '<p class="caweb-resetpass">You have successfully reset your password.</p>' );
	}

	return $errors;
}

/**
 * Change the Reset Password URL to use the site url instead of the network url
 * Filters the network site URL.
 *
 * @link https://developer.wordpress.org/reference/hooks/network_site_url/
 *
 * @param  string      $url The complete network site URL including scheme and path.
 * @param  string      $path Path relative to the network site URL. Blank string if no path is specified.
 * @param  string|null $scheme Scheme to give the URL context. Accepts 'http', 'https', 'relative' or null.
 *
 * @return URL
 */
function caweb_network_site_url( $url, $path, $scheme ) {
	if ( false !== strpos( $url, '/wp-login.php?action=resetpass' ) ) {
		return site_url( '/wp-login.php?action=resetpass' );
	}

	remove_filter( 'network_site_url', 'caweb_network_site_url' );

	return $url;
}

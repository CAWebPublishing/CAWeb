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
add_action( 'lostpassword_form', 'caweb_lostpassword_form' );
add_action( 'login_form_lostpassword', 'caweb_login_form_lostpassword' );
add_action( 'login_form_rp', 'caweb_login_form_rp' );
add_action( 'validate_password_reset', 'caweb_validate_password_reset', 10, 2 );

/* Filters */
add_filter( 'lostpassword_url', 'caweb_lostpassword_url', 10, 2 );
add_filter( 'lostpassword_redirect', 'caweb_lostpassword_redirect' );
add_filter( 'retrieve_password_title', 'caweb_retrieve_password_title', 10, 3 );
add_filter( 'retrieve_password_message', 'caweb_retrieve_password_message', 10, 4 );
add_filter( 'wp_login_errors', 'caweb_wp_login_errors', 10, 2 );


/**
 * Add Site ID and nonce to lost password form
 * Fires inside the lostpassword form tags, before the hidden fields.
 *
 * @link https://developer.wordpress.org/reference/hooks/lostpassword_form/
 * @return void
 */
function caweb_lostpassword_form() {
	wp_nonce_field( 'caweb_lost_password', 'caweb_lost_password_nonce' );
	?>
	<input type="hidden" name="siteid" value="<?php print esc_attr( get_current_blog_id() ); ?>" />
	<?php
}

/**
 * Login form for Lost Password
 * Fires before a specified login form action.
 *
 * @see https://developer.wordpress.org/reference/hooks/login_form_action/
 * @return void
 */
function caweb_login_form_lostpassword() {
	if ( isset( $_POST['caweb_lost_password_nonce'] ) && wp_verify_nonce( sanitize_key( $_POST['caweb_lost_password_nonce'] ), 'caweb_lost_password' ) ) {
		/* Check if have submitted*/
		if ( isset( $_SERVER['REQUEST_METHOD'] ) && 'POST' === $_SERVER['REQUEST_METHOD'] ) {
			$errors = retrieve_password();
			if ( ! is_wp_error( $errors ) ) {
				$redirect_to = isset( $_REQUEST['redirect_to'] ) && ! empty( $_REQUEST['redirect_to'] ) ? esc_url_raw( wp_unslash( $_REQUEST['redirect_to'] ) ) : 'wp-login.php?checkemail=confirm';
				wp_safe_redirect( $redirect_to );
				exit();
			}
		}
	}

}

/**
 * Add filter to network site url on Login Form Reset Password
 * Fires before a specified login form action.
 *
 * @see https://developer.wordpress.org/reference/hooks/login_form_action/
 * @return void
 */
function caweb_login_form_rp() {
	add_filter( 'network_site_url', 'caweb_network_site_url', 10, 3 );
}

/**
 * Password Reset Strength Validation
 * Fires before the password reset procedure is validated.
 *
 * @link https://developer.wordpress.org/reference/hooks/validate_password_reset/
 *
 * @param  WP_Error $errors WP Error object.
 * @param  WP_User  $user WP_User object if the login and reset key match. WP_Error object otherwise.
 *
 * @return void
 */
function caweb_validate_password_reset( $errors, $user ) {
	$nonce    = wp_create_nonce( 'caweb_password_reset_validation' );
	$verified = wp_verify_nonce( sanitize_key( $nonce ), 'caweb_password_reset_validation' );

	$action = isset( $_GET['action'] ) ? sanitize_text_field( wp_unslash( $_GET['action'] ) ) : '';
	$pass1  = isset( $_POST['pass1'] ) ? sanitize_text_field( wp_unslash( $_POST['pass1'] ) ) : '';
	$uri    = isset( $_SERVER['REQUEST_URI'] ) ? esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';

	if ( 'rp' === $action ) {
		if ( empty( $pass1 ) ) {
			return;
		}

		$exp = '/^(?=.*\d)((?=.*[a-z])|(?=.*[A-Z])).{12,32}$/';

		if ( strlen( $pass1 ) < 12 || ! preg_match( $exp, $pass1 ) ) {
			$errors->add( 'error', 'Password must be alphanumeric and contain minimum 12 characters.', '' );
		}
	} elseif ( 'resetpass' === $action ) {
		if ( ( ! $errors->get_error_code() ) && isset( $pass1 ) && ! empty( $pass1 ) ) {
			reset_password( $user, $pass1 );

			list( $rp_path ) = explode( '?', $uri );

			$errors->add( 'updated', '<p class="caweb-resetpass">You have successfully reset your password.</p>' );

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
	if ( ! isset( $_POST['caweb_lost_password_nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['caweb_lost_password_nonce'] ), 'caweb_lost_password' ) ) {
		return $title;
	}

	$site_id = isset( $_POST['siteid'] ) ? sanitize_text_field( wp_unslash( $_POST['siteid'] ) ) : 1;

	switch_to_blog( $site_id );

	$blogname = wp_specialchars_decode( get_bloginfo(), ENT_QUOTES );

	restore_current_blog();

	return "$blogname Password Reset";
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

	if ( ! isset( $_POST['caweb_lost_password_nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['caweb_lost_password_nonce'] ), 'caweb_lost_password' ) ) {
		return $message;
	}

	$site_id = isset( $_POST['siteid'] ) ? sanitize_text_field( wp_unslash( $_POST['siteid'] ) ) : 1;

	switch_to_blog( $site_id );

	$blogname = wp_specialchars_decode( get_bloginfo(), ENT_QUOTES );
	$blogurl  = get_site_url();

	restore_current_blog();

	$pattern      = array( '/Site Name: .*/', '/.*(\/wp-login.php)/' );
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
	$nonce    = wp_create_nonce( 'caweb_password_reset' );
	$verified = wp_verify_nonce( sanitize_key( $nonce ), 'caweb_password_reset' );

	if ( isset( $_GET['caweb'] ) && 'resetpass' === $_GET['caweb'] ) {
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

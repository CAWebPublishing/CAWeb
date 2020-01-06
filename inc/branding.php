<?php
/**
 * CAWeb Publishing Service Branding
 *
 * @package CAWeb
 */

add_action( 'admin_head', 'caweb_branding_admin_head' );
add_action( 'login_enqueue_scripts', 'caweb_login_enqueue_scripts' );
add_action( 'login_footer', 'caweb_disclaimer_message' );
add_filter( 'login_headerurl', 'caweb_login_url' );
add_filter( 'login_headertext', 'caweb_login_headertext' );
add_filter( 'gettext', 'caweb_change_lost_your_password' );

/**
 * CAWeb Publishing Branding Admin Head
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @return void
 */
function caweb_branding_admin_head() {
	?>
		<link title="Fav Icon" rel="icon" href="<?php print esc_url( caweb_default_favicon_url() ); ?>">
	<?php
}

/**
 * Loads the CAWeb Admin Styles
 *
 * @link https://developer.wordpress.org/reference/hooks/login_enqueue_scripts/
 * @return void
 */
function caweb_login_enqueue_scripts() {
	$admin_css     = caweb_get_min_file( '/css/admin.css' );
	$bootstrap_css = caweb_get_min_file( '/css/bootstrap.css' );

	wp_enqueue_style( 'caweb-bootstrap-styles', $bootstrap_css, array(), CAWEB_VERSION );

	/* CAWeb Admin CSS */
	wp_enqueue_style( 'caweb-admin-styles', $admin_css, array(), CAWEB_VERSION );

	$admin_js     = caweb_get_min_file( '/js/admin.js', 'js' );
	$bootstrap_js = caweb_get_min_file( '/js/bootstrap.js', 'js' );

	/* Enqueue Scripts */
	wp_enqueue_script( 'jquery' );

	wp_register_script( 'caweb-bootstrap-scripts', $bootstrap_js, array( 'jquery' ), CAWEB_VERSION, true );
	wp_register_script( 'caweb-admin-scripts', $admin_js, array( 'jquery', 'caweb-bootstrap-scripts' ), CAWEB_VERSION, true );

	wp_enqueue_script( 'caweb-admin-scripts' );

}


/**
 * Login Page Disclaimer Message
 *
 * @link https://developer.wordpress.org/reference/hooks/login_message/
 * @return string
 */
function caweb_disclaimer_message() {
	if ( isset( $_REQUEST['action'] ) ) {
		return;
	}

	$disclaimer = '<strong class="d-block text-center">UNAUTHORIZED ACCESS TO ANY STATE OF CALIFORNIA COMPUTING SYSTEM CONTAINING US GOVERNMENT OR STATE OF CALIFORNIA INFORMATION IS A CRIMINAL VIOLATION OF PENAL CODE SECTION 502 AND/OR APPLICABLE FEDERAL LAW AND IS SUBJECT TO CIVIL AND CRIMINAL SANCTIONS.</strong><p>Whoever knowingly or intentionally accesses a computing system without authorization or exceeding authorized access, and by means of such conduct obtains, alters, damages, destroys or discloses information, or prevents authorized use of any data or computing resource owned by or operated for the State of California shall be subject to disciplinary action, prosecution or both. Use in a manner other than as intended by the State of California may result in the forfeiture of access privileges.  All computing system activities may be recorded and monitored.  Individuals using these systems expressly consent to such monitoring and shall have no expectation of privacy in their use. Evidence of possible misconduct or abuse may be provided to appropriate officials and/or law enforcement. No warranty is made for the computing resources that are subject to this policy.  Additionally, the State of California takes no responsibility of damages for the intentional misuse of these resources by any party.</p>';

	printf( '<div class="caweb-disclaimer w-50 mx-auto mt-4 text-justify">%1$s</div>', wp_kses( $disclaimer, caweb_allowed_html() ) );
}

/**
 * Changing the logo link from wordpress.org to CAWeb Support Site
 * link https://developer.wordpress.org/reference/hooks/login_url/
 *
 * @return string
 */
function caweb_login_url() {
	return 'https://caweb.cdt.ca.gov';
}


/**
 * Changing the text on the logo to show your site name
 *
 * @link https://developer.wordpress.org/reference/hooks/login_headertext/
 * @return string
 */
function caweb_login_headertext() {
	return 'CAWeb Logo';
}

/**
 * Change 'Lost your password?' text
 *
 * @link https://developer.wordpress.org/reference/hooks/gettext/
 * @param  string $text Translated text.
 *
 * @return string
 */
function caweb_change_lost_your_password( $text ) {

	if ( 'Lost your password?' === $text ) {
		$text = 'Password Reset?';

	}
	return $text;
}

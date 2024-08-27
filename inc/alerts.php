<?php
/**
 * CAWeb Alert Banners
 *
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'init', 'caweb_alert_cookies' );


/**
 * Set Cookies for Alert Banners.
 *
 * @return void
 */
function caweb_alert_cookies() {

	if ( ! headers_sent() ) {
		$alerts = get_option( 'caweb_alerts', array() );

		if ( ! empty( $alerts ) ) {
			foreach ( $alerts as $a => $alert ) {
				$status = $alert['status'];
				$cookie = isset( $_COOKIE[ "caweb-alert-$a" ] ) ? sanitize_text_field( wp_unslash( $_COOKIE[ "caweb-alert-$a" ] ) ) : true;

				if ( 'on' !== $status ) {
					$cookie = false;
				}

				setcookie( "caweb-alert-$a", $cookie, 0, '/' );

			}
		}
	}
}

/**
 * Renders Alert Banners
 *
 * @return void
 */
function caweb_render_alerts() {
	$alerts = get_option( 'caweb_alerts', array() );

	if ( empty( $alerts ) ) {
		return;
	}

	?>
	<div id="caweb_alerts">
	<?php
	foreach ( $alerts as $a => $alert ) {
		$cookie  = isset( $_COOKIE[ "caweb-alert-$a" ] ) ? sanitize_text_field( wp_unslash( $_COOKIE[ "caweb-alert-$a" ] ) ) : true;
		$display = $alert['page_display'];
		$status  = $alert['status'];

		if ( $cookie !== false && 'on' === $status &&
			(
				( is_front_page() && 'home' === $display ) ||
				( 'all' === $display )
			)
		) {
			$header = wp_unslash( $alert['header'] );
			$icon   = $alert['icon'];
			$color  = $alert['color'];
			$button = $alert['button'];
			$url    = $alert['url'];
			$text   = wp_unslash( $alert['text'] );
			$target = $alert['target'];
			$msg    = $alert['message'];

			?>
			<div  id="caweb-alert-<?php print esc_attr( $a ); ?>" style="background-color: <?php print esc_attr( $color ); ?>" class="alert alert-dismissible mb-0 border-top border-dark alert-<?php print esc_attr( $a ); ?>">
				<div class="container d-flex flex-row">
					
					<?php if ( ! empty( $button ) && ! empty( $url ) ) : ?>
					<a href="<?php print esc_url( $url ); ?>" target="<?php print empty( $target ) ? '_self' : '_blank'; ?>" class="alert-link btn btn-default btn-xs"><?php print esc_html( $text ); ?></a>
					<?php endif; ?>

					<?php if ( ! empty( $header ) ) : ?>
						<span class="alert-level">
							<?php if ( ! empty( $icon ) ) : ?>
							<span class="ca-gov-icon-<?php print esc_attr( $icon ); ?>" aria-hidden="true"></span>
							<?php endif; ?>
							<?php print esc_html( $header ); ?>
						</span>
					<?php endif; ?>

					<?php
					if ( ! empty( $msg ) ) {
						print wp_kses( $msg, 'post' );
					}
					?>
					<button data-alert="<?php print esc_attr( $a ); ?>" class="btn btn-alt ca-gov-icon-close-mark close caweb-alert-close position-relative ms-auto p-1" data-bs-dismiss="alert" aria-label="Close Alert <?php print esc_attr( $a ); ?>"><span class="sr-only">x</span></button>
				</div>
			</div>
			<?php
		}
	}
	?>
	<script>
		jQuery(document).ready(function($) {
			$('.caweb-alert-close').on( 'click', function(e){ 
				var alert_id = this.dataset.alert; 
				document.cookie = 'caweb-alert-' + alert_id + '=false;path=/';

				$(`#caweb-alert-${alert_id}`)[0].remove();
			});
		});
	</script>
	</div>
	<?php
}
?>

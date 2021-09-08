<?php
/**
 * Loads CAWeb Alerts.
 *
 * @package CAWeb
 */

$caweb_alerts = get_option( 'caweb_alerts', array() );

if ( empty( $caweb_alerts ) ) {
	return;
}

?>
<!-- Alert Banners -->
<?php
foreach ( $caweb_alerts as $caweb_a => $caweb_data ) {
	$caweb_status  = $caweb_data['status'];
	$caweb_display = $caweb_data['page_display'];

	/* If alert is active and should be displayed */
	$caweb_active_alert = in_array( $caweb_status, array( 'active', 'on' ), true ) &&
		( ( is_front_page() && 'home' === $caweb_display ) || ( 'all' === $caweb_display ) );

	if ( $caweb_active_alert ) {
		if ( isset( $_COOKIE[ "caweb-alert-id-$caweb_a" ] ) && sanitize_text_field( wp_unslash( $_COOKIE[ "caweb-alert-id-$caweb_a" ] ) ) ) {
			?>
			<div class="alert alert-dismissible alert-banner border-top border-dark alert-<?php print esc_attr( $caweb_a ); ?>" style="background-color:<?php print esc_attr( $caweb_data['color'] ); ?>;">
				<div class="container">
					<!-- Alert Close Button -->
					<button type="button" class="close caweb-alert-close" data-id="<?php print esc_attr( $caweb_a ); ?>" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<!-- Alert Read More Button -->
					<?php
					if ( ! empty( $caweb_data['button'] ) && ! empty( $caweb_data['url'] ) ) :
						$caweb_url    = $caweb_data['url'];
						$caweb_target = ! empty( $caweb_data['target'] ) ? sprintf( ' target="%1$s"', $caweb_data['target'] ) : '';
						$caweb_text   = ! empty( $caweb_data['text'] ) ? $caweb_data['text'] : '';
						?>
						<a href="<?php print esc_url( $caweb_url ); ?>" class="alert-link btn btn-default btn-xs"<?php print esc_attr( $caweb_target ); ?>><?php print esc_attr( $caweb_text ); ?></a>
					<?php endif; ?>
					<!-- Alert Header -->
					<?php
					if ( ! empty( $caweb_data['header'] ) ) :
						?>
					<span class="alert-level"><?php if ( ! empty( $caweb_data['icon'] ) ) : ?>
						<span class="ca-gov-icon-<?php print esc_attr( $caweb_data['icon'] ); ?>" aria-hidden="true"></span>
						<?php
							endif;
												print esc_html( $caweb_data['header'] );
												?>
							</span>
					<?php endif; ?>
					<!-- Alert Text -->
					<span class="alert-text"><?php print wp_kses( wp_unslash( $caweb_data['message'] ), 'post' ); ?></span>
				</div>
			</div>
			<?php
		}
	}
}

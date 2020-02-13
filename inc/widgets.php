<?php
/**
 * CAWeb Widgets
 *
 * @package CAWeb
 */

add_action( 'wp_dashboard_setup', 'caweb_add_dashboard_widgets' );
add_action( 'widgets_init', 'caweb_custom_sidebar' );

/**
 * Setup Dashboard Widgets
 *
 * @see https://developer.wordpress.org/reference/hooks/wp_dashboard_setup/
 * @return void
 */
function caweb_add_dashboard_widgets() {
	wp_add_dashboard_widget( 'caweb_news_dashboard_widget', '<img class="caweb-dashboard-widget" src="' . CAWEB_URI . '/images/system/caweb_logo.png" />CAWeb News', 'caweb_news_dashboard_widget_function' );
	wp_add_dashboard_widget( 'caweb_recent_updates_dashboard_widget', '<img class="caweb-dashboard-widget" src="' . CAWEB_URI . '/images/system/caweb_logo.png" />Recent CAWeb Help Updates', 'caweb_recent_updates_dashboard_widget_function' );
}

/**
 * Styles for Dashboard Widgets
 *
 * @return void
 */
function caweb_dashboard_styles() {
	?>
	<style>
		div#welcome-panel,
		div#caweb_news_dashboard_widget .toggle-indicator, 
		div#caweb_recent_updates_dashboard_widget .toggle-indicator, 
		label[for^="caweb_news_dashboard_widget-hide"],
		label[for^="caweb_recent_updates_dashboard_widget-hide"],
		label[for^="wp_welcome_panel-hide"]{
			display: none;
		}
		div#caweb_news_dashboard_widget .toggle-indicator, 
		div#caweb_recent_updates_dashboard_widget .toggle-indicator{
			cursor: move;
		}
		div#caweb_news_dashboard_widget .inside,
		div#caweb_recent_updates_dashboard_widget .inside{
			display: block;
		}
		img.caweb-dashboard-widget{
			margin-right: 5px;
		}
		span img.caweb-dashboard-widget{
			vertical-align: bottom;
		}
		label img.caweb-dashboard-widget{
			vertical-align: middle;
		}
	</style>
	<?php
}

/**
 * Render CAWeb News Dashboard Widget
 *
 * @return void
 */
function caweb_news_dashboard_widget_function() {
	$caweb_news_feed_url = 'https://caweb.cdt.ca.gov/category/caweb-news/feed/';
	$caweb_news_feeds    = wp_remote_retrieve_body( wp_remote_get( $caweb_news_feed_url ) );
	$caweb_news_feeds    = new SimpleXMLElement( $caweb_news_feeds );
	$count               = 0;

	?>
	<?php caweb_dashboard_styles(); ?>
	<div class="rss-widget">
		<ul>
		<?php
		foreach ( $caweb_news_feeds->channel->item as $item ) {
			$d        = new DateTime( $item['pubDate'] );
			$pub_date = date_format( $d, 'F j, Y' );
			?>
		<li><a class="rsswidget" href="<?php print esc_url( $item->link ); ?>"><?php print esc_html( $item->title ); ?></a><span class="rss-date"><?php print esc_html( $pub_date ); ?></span></li>
			<?php
			$count++;

			if ( $count >= 5 ) {
				break;
			}
		}
		?>
		</ul>
	</div>
	<?php
}

/**
 * Render CAweb Recent Updates Widget
 *
 * @return void
 */
function caweb_recent_updates_dashboard_widget_function() {
	$caweb_news_feed_url = 'https://caweb.cdt.ca.gov/category/all/feed/';
	$caweb_news_feeds    = wp_remote_retrieve_body( wp_remote_get( $caweb_news_feed_url ) );
	$caweb_news_feeds    = new SimpleXMLElement( $caweb_news_feeds );
	$count               = 0;

	?>

	<div class="rss-widget">
		<ul>
		<?php
		foreach ( $caweb_news_feeds->channel->item as $item ) {
			$d        = new DateTime( $item['pubDate'] );
			$pub_date = date_format( $d, 'F j, Y' );
			?>
		<li><a class="rsswidget" href="<?php print esc_url( $item->link ); ?>"><?php print esc_html( $item->title ); ?></a><span class="rss-date"><?php print esc_html( $pub_date ); ?></span></li>
			<?php
			$count++;

			if ( $count >= 5 ) {
				break;
			}
		}
		?>
		</ul>
	</div>
	<?php
}

/**
 * Setup Widgets
 *
 * @return void
 */
function caweb_custom_sidebar() {
	$args = array(
		'id'            => 'caweb-site-wide-widget',
		'name'          => 'Site Wide Widget',
		'description'   => 'Widget that is inserted on every page before the closing body tag.',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
	);

	register_sidebar( $args );
}

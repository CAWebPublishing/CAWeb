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
 * Refreshes the caweb_news_feed site transient if necessary
 *
 * @return array Array of CAWeb News Feeds.
 */
function caweb_refresh_news_feed() {
	$caweb_news_feeds = get_site_transient( 'caweb_news_feed' );

	if ( false === $caweb_news_feeds ) {
		// CAWeb News.
		$feed_url  = 'https://caweb.cdt.ca.gov/category/caweb-news/feed/';
		$feed_body = wp_remote_retrieve_body( wp_remote_get( $feed_url ) );

		$caweb_news_feeds['cnf'] = caweb_retrieve_feeds_data( $feed_body );

		// Recent CAWeb Help Updates.
		$feed_url  = 'https://caweb.cdt.ca.gov/category/all/feed/';
		$feed_body = wp_remote_retrieve_body( wp_remote_get( $feed_url ) );

		$caweb_news_feeds['crnf'] = caweb_retrieve_feeds_data( $feed_body );

		set_site_transient( 'caweb_news_feed', $caweb_news_feeds, 86400 );
	}

	return $caweb_news_feeds;
}

/**
 * Retrieve Data from Feed
 *
 * @param  mixed $body String content to be loaded as XML Element.
 * @param  mixed $max Max amount of elements to return.
 * @return array Array of feeds data.
 */
function caweb_retrieve_feeds_data( $body, $max = 5 ) {
	if ( empty( $body ) ) {
		return array();
	}

	$xml  = new SimpleXMLElement( $body );
	$m    = $max > count( $xml->channel->item ) ? count( $xml->channel->item ) : $max;
	$data = array();

	// iterate thru xml data.
	for ( $i = 0; $i < $m; $i++ ) {
		$item = (array) $xml->channel->item[ $i ];
		$d    = new DateTime( $item['pubDate'] );

		$data[] = array(
			'pub_date' => date_format( $d, 'F j, Y' ),
			'link'     => $item['link'],
			'title'    => $item['title'],
		);
	}

	return $data;

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
	// refreshes the site transient if necessary.
	$cnf = caweb_refresh_news_feed();
	$cnf = isset( $cnf['cnf'] ) ? $cnf['cnf'] : array();

	?>
	<?php caweb_dashboard_styles(); ?>
	<div class="rss-widget">
		<ul>
		<?php
		foreach ( $cnf as $item ) :
			?>
			<li>
				<a class="rsswidget" href="<?php print esc_url( $item['link'] ); ?>"><?php print esc_html( $item['title'] ); ?></a>
				<span class="rss-date"><?php print esc_html( $item['pub_date'] ); ?></span>
			</li>
			<?php
		endforeach;
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
	// refreshes the site transient if necessary.
	$crnf = caweb_refresh_news_feed();
	$crnf = isset( $crnf['crnf'] ) ? $crnf['crnf'] : array();

	?>

	<div class="rss-widget">
		<ul>
		<?php
		foreach ( $crnf as $item ) :
			?>
			<li>
				<a class="rsswidget" href="<?php print esc_url( $item['link'] ); ?>"><?php print esc_html( $item['title'] ); ?></a>
				<span class="rss-date"><?php print esc_html( $item['pub_date'] ); ?></span>
			</li>
			<?php
			endforeach;
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

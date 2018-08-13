<?php
global $post;
$post_content = isset($post) ? (is_object($post) ? $post->post_content : $post['content']) : '';
$ver = caweb_get_page_version(get_the_ID());
$fixed_header = (5 == $ver && get_option('ca_sticky_navigation') ? ' fixed' : '');
$color = get_option('ca_site_color_scheme', 'oceanside');
$schemes = caweb_color_schemes(caweb_get_page_version(get_the_ID()), 'filename');
$colorscheme = isset($schemes[$color]) ? $color : 'oceanside';

$default_background_img = sprintf('%1$s/images/system/%2$s/header-background.jpg',
                                 CAWebUri, $colorscheme);

$header_background_img = (4 == $ver && "" !== get_option('header_ca_background') ?
                          get_option('header_ca_background') : $default_background_img);
$header_style = (4 == $ver ? sprintf('style="background: #fff url(%1$s) no-repeat 100% 100%; background-size: cover;"', $header_background_img) : '');

?>

<header role="banner" id="header" class="global-header<?= $fixed_header; ?>" <?= $header_style; ?> >
<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
<?php

		// Version 5.0 Specific
		if (caweb_version_check(5.0, get_the_ID())) {

				// Alerts
		    $alerts = get_option('caweb_alerts', array());

		    foreach ($alerts as $a => $data) {
		        if ("inactive" !== $data['status'] && ((is_front_page() && "home" == $data['page_display']) || ("all" == $data['page_display']))) {
		            if ( ! isset($_SESSION['display_alert_'.$a]) || 1 == $_SESSION['display_alert_'.$a]) {
		                $_SESSION['display_alert_'.$a] = true;

		                $readmore = '';

		                if ( ! empty($data['button']) && ! empty($data['url'])) {
		                    $target =  ! empty($data['target']) ? sprintf(' target="%1$s"', $data['target']) : '';
		                    $readmore = sprintf('<a href="%1$s" class="alert-link btn btn-default btn-xs"%2$s>Read More</a>', esc_url($data['url']), $target);
		                } ?>
		                <div role="alert" class="alert alert-dismissible alert-banner" style="background-color:<?= $data['color'] ?>;">
											<div class="container">
												<button type="button" class="close caweb-alert-close" data-url="<?= admin_url('admin-post.php?action=caweb_clear_alert_session&alert-id='.$a) ?>" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">×</span>
												</button>
												<span class="alert-level">
													<span class="ca-gov-icon-<?= $data['icon'] ?>" aria-hidden="true"></span><?= $data['header'] ?></span>
												<span class="alert-text"><?= stripslashes($data['message']) ?></span><?=  $readmore ?>
											</div>
										</div>
										<?php
		            }
		        }
		    }

		    print '<!-- Location Bar -->';
		    // Location Bar
		    require_once(CAWebAbsPath."/ssi/location-bar.html");

		    print '<!-- Settings Bar -->';
		    // Settings Bar
		    require_once(CAWebAbsPath."/ssi/settings-bar.html");

		    print '<!-- Utility Header -->';
		    // Include Utility Header
		    get_template_part('partials/content', 'utility-header');
		}

    print '<!-- Branding -->';
    // Include Utility Header
    get_template_part('partials/content', 'branding');

         ?>

         <!-- Include Mobile Controls -->
         <?php require_once(CAWebAbsPath."/ssi/mobile-controls.html");?>

        <div class="navigation-search">

<!-- Version 4 top-right search box always displayed -->
<!-- Version 5.0 fade in/out search box displays on front page and if option is enabled -->
<!-- Include Navigation -->
<?php
    wp_nav_menu(array('theme_location' => 'header-menu',
        'style' => (get_option('ca_menu_selector_enabled') ?
                    get_post_meta(get_the_ID(), 'ca_default_navigation_menu', true) :
                    get_option('ca_default_navigation_menu')),
        'home_link' => ( ! is_front_page() && get_option('ca_home_nav_link', true) ? true : false),
        'version' => caweb_get_page_version(get_the_ID()),
    )
              );

$search = (caweb_version_check(5, get_the_ID()) && is_front_page() &&  get_option('ca_frontpage_search_enabled') ? 'featured-search fade' : '');

$custom_translate = caweb_version_check(4, get_the_ID()) && 'custom' == get_option('ca_google_trans_enabled') && "" !== get_option('ca_google_trans_page', '') ? sprintf('<a target="_blank" href="%1$s" class="caweb-custom-translate">%2$sTranslate</a>', esc_url(get_option('ca_google_trans_page')), "" !== get_option('ca_google_trans_icon') ? caweb_get_icon_span(get_option('ca_google_trans_icon')) : '') : '';

printf('<div id="head-search" class="search-container %1$s %2$s hidden-print">%3$s%4$s</div>',
       $search, ("" == get_option('ca_google_search_id') ? 'hidden' : ''),
       ("page-templates/searchpage.php" !== get_page_template_slug(get_the_ID()) ?
								sprintf('<gcse:searchbox-only resultsUrl="%1$s" enableAutoComplete="true"></gcse:searchbox-only> ', site_url('serp')) : ''), $custom_translate);

?>

        </div>

<?php  if ((true === get_option('ca_google_trans_enabled') || 'standard' == get_option('ca_google_trans_enabled')) &&  (caweb_version_check(4, get_the_ID()))): ?>
<div id="google_translate_element" class="hidden-print standard-translate"></div>
<?php endif; ?>

        <div class="header-decoration hidden-print"></div>

</header>
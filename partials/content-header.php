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

// Search
$ca_frontpage_search_enabled = get_option('ca_frontpage_search_enabled');

// Google Translate
$ca_google_search_id = get_option('ca_google_search_id', '');
$ca_google_trans_enabled = get_option('ca_google_trans_enabled');
$ca_google_trans_page = get_option('ca_google_trans_page', '');
$ca_google_trans_icon = get_option('ca_google_trans_icon', '');
$ca_google_trans_icon = ! empty($ca_google_trans_icon) ? caweb_get_icon_span($ca_google_trans_icon) : '';

?>

<header role="banner" id="header" class="global-header<?php print $fixed_header; ?>" <?php print $header_style; ?> >
<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
<?php

		// Version 5.0 Specific
		if (5 == caweb_get_page_version(get_the_ID())) {

				// Alerts
			$alerts = get_option('caweb_alerts', array());

			if ( ! empty($alerts)) {
				print '<!-- Alert Banners -->';
			}

			foreach ($alerts as $a => $data) {
				if ("inactive" !== $data['status'] && ((is_front_page() && "home" == $data['page_display']) || ("all" == $data['page_display']))) {
					if ( ! isset($_SESSION['display_alert_' . $a]) || 1 == $_SESSION['display_alert_' . $a]) {
						$_SESSION['display_alert_' . $a] = true;

						$readmore = '';
						$alert_icon = ! empty($data['icon']) ? caweb_get_icon_span($data['icon'], array('aria-hidden' => "true")) : "";
						if ( ! empty($data['button']) && ! empty($data['url'])) {
							$target =  ! empty($data['target']) ? sprintf(' target="%1$s"', $data['target']) : '';
							$readmore = sprintf('<a href="%1$s" class="alert-link btn btn-default btn-xs"%2$s>More Information</a>', esc_url($data['url']), $target);
						} ?>
		                <div class="alert alert-dismissible alert-banner" style="background-color:<?php print $data['color'] ?>;">
							<div class="container">
								<button type="button" class="close caweb-alert-close" data-url="<?php print admin_url('admin-post.php?action=caweb_clear_alert_session&alert-id=' . $a) ?>" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<span class="alert-level">
									<?php print $alert_icon . $data['header'] ?>
								</span>
								<span class="alert-text"><?php print stripslashes($data['message']) ?></span>
								<?php print  $readmore ?>
							</div>
						</div>
						<?php
					}
				}
			}

			// Include Utility Header
			get_template_part('partials/content', 'utility-header');

			// Location Bar
			require_once(CAWebAbsPath . "/ssi/location-bar.php");

			// Settings Bar
			require_once(CAWebAbsPath . "/ssi/settings-bar.php");
		}

    // Include Utility Header
    get_template_part('partials/content', 'branding');

         ?>

         <!-- Include Mobile Controls -->
         <?php require_once(CAWebAbsPath . "/ssi/mobile-controls.php");?>

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

			  $search = 5 == $ver && is_front_page() &&  $ca_frontpage_search_enabled ? ' featured-search fade' : '';
			  $search .= empty($ca_google_search_id) ? ' hidden' : '';

			  // This is the Custom Google Translate Location for the old State Template Version 4
			  $custom_translate = 4 == $ver && 'custom' == $ca_google_trans_enabled && ! empty($ca_google_trans_page) ? sprintf('<a target="_blank" href="%1$s" class="caweb-custom-translate">%2$sTranslate</a>', esc_url($ca_google_trans_page), $ca_google_trans_icon) : '';

?>
			<div id="head-search" class="search-container<?php print $search ?> hidden-print">
			<?php
				if ("page-templates/searchpage.php" !== get_page_template_slug(get_the_ID())) {
					require(CAWebAbsPath . "/ssi/searchForm.php");
				}
				print $custom_translate;
			?>
			</div>
        </div>

<?php
// This is the Standard Google Translate Location for the old State Template Version 4
if ((true === $ca_google_trans_enabled || 'standard' == $ca_google_trans_enabled) &&  4 == $ver):
?>
<div id="google_translate_element" class="hidden-print standard-translate"></div>
<?php endif; ?>
</header>

<?php
/**
 * Loads CAWeb Alerts.
 *
 * @package CAWeb
 */

$caweb_utility_home_icon            = get_option( 'ca_utility_home_icon', true );
$caweb_social_options               = caweb_get_site_options( 'social' );
$caweb_contact_us_link              = get_option( 'ca_contact_us_link', '' );
$caweb_google_trans_page            = get_option( 'ca_google_trans_page', '' );
$caweb_google_trans_enabled         = get_option( 'ca_google_trans_enabled', false );
$caweb_google_trans_page_new_window = get_option( 'ca_google_trans_page_new_window', true ) ? '_blank' : '_self';
$caweb_google_trans_icon            = get_option( 'ca_google_trans_icon', '' );

?>
<!-- Utility Header -->
<div class="utility-header hidden-print">
	<div class="container">
		<div class="group flex-row">
			<div class="social-media-links">
				<div class="header-cagov-logo">
					<a href="https://www.ca.gov/" title="CA.gov website">
						<span class="sr-only">CA.gov</span>
						<img style="height: 31px;" src="<?php print esc_url( CAWEB_URI ); ?>/images/system/logo.svg" class="pos-rel" alt="CA.gov website" aria-hidden="true" />
					</a>
				</div>

				<?php if ( $caweb_utility_home_icon ) : ?>
					<a href="/" title="Home" class="utility-home-icon ca-gov-icon-home"><span class="sr-only">Home</span></a>
					<?php
				endif;

				foreach ( $caweb_social_options as $caweb_opt ) {
					$caweb_share_email = 'ca_social_email' === $caweb_opt ? true : false;
					$caweb_sub         = rawurlencode( sprintf( '%1$s | %2$s', get_the_title(), get_bloginfo( 'name' ) ) );
					$caweb_body        = rawurlencode( get_permalink() );
					$caweb_mailto      = $caweb_share_email ? sprintf( 'mailto:?subject=%1$s&body=%2$s', $caweb_sub, $caweb_body ) : '';

					if ( get_option( "${caweb_opt}_header" ) && ( $caweb_share_email || '' !== get_option( $caweb_opt ) ) ) :
						$caweb_share  = substr( $caweb_opt, 10 );
						$caweb_share  = str_replace( '_', '-', $caweb_share );
						$caweb_class  = "utility-social-$caweb_share ca-gov-icon-$caweb_share";
						$caweb_title  = get_option( "${caweb_opt}_hover_text", 'Share via ' . ucwords( $caweb_share ) ) ;
						$caweb_href   = $caweb_share_email ? $caweb_mailto : get_option( $caweb_opt );
						$caweb_target = get_option( "${caweb_opt}_new_window" ) ? 'target="_blank"' : ''
						?>
						<a class="<?php print esc_attr( $caweb_class ); ?>" href="<?php print esc_url( $caweb_href ); ?>" title="<?php print esc_attr( $caweb_title ); ?>" <?php print esc_attr( $caweb_target ); ?>>
							<span class="sr-only"><?php print esc_attr( $caweb_title ); ?></span>
						</a>
						<?php
					endif;

				}
				?>
			</div>
			<div class="settings-links">
				<div class="quarter standard-translate" id="google_translate_element">
					<div class="skiptranslate goog-te-gadget" dir="ltr" style="">
						<div id=":0.targetLanguage">
							<select class="goog-te-combo" aria-label="Language Translate Widget">
							<option value="">Select Language</option>
							<option value="af">Afrikaans</option>
							<option value="sq">Albanian</option>
							<option value="am">Amharic</option>
							<option value="ar">Arabic</option>
							<option value="hy">Armenian</option>
							<option value="az">Azerbaijani</option>
							<option value="eu">Basque</option>
							<option value="be">Belarusian</option>
							<option value="bn">Bengali</option>
							<option value="bs">Bosnian</option>
							<option value="bg">Bulgarian</option>
							<option value="ca">Catalan</option>
							<option value="ceb">Cebuano</option>
							<option value="ny">Chichewa</option>
							<option value="zh-CN">Chinese (Simplified)</option>
							<option value="zh-TW">Chinese (Traditional)</option>
							<option value="co">Corsican</option>
							<option value="hr">Croatian</option>
							<option value="cs">Czech</option>
							<option value="da">Danish</option>
							<option value="nl">Dutch</option>
							<option value="eo">Esperanto</option>
							<option value="et">Estonian</option>
							<option value="tl">Filipino</option>
							<option value="fi">Finnish</option>
							<option value="fr">French</option>
							<option value="fy">Frisian</option>
							<option value="gl">Galician</option>
							<option value="ka">Georgian</option>
							<option value="de">German</option>
							<option value="el">Greek</option>
							<option value="gu">Gujarati</option>
							<option value="ht">Haitian Creole</option>
							<option value="ha">Hausa</option>
							<option value="haw">Hawaiian</option>
							<option value="iw">Hebrew</option>
							<option value="hi">Hindi</option>
							<option value="hmn">Hmong</option>
							<option value="hu">Hungarian</option>
							<option value="is">Icelandic</option>
							<option value="ig">Igbo</option>
							<option value="id">Indonesian</option>
							<option value="ga">Irish</option>
							<option value="it">Italian</option>
							<option value="ja">Japanese</option>
							<option value="jw">Javanese</option>
							<option value="kn">Kannada</option>
							<option value="kk">Kazakh</option>
							<option value="km">Khmer</option>
							<option value="rw">Kinyarwanda</option>
							<option value="ko">Korean</option>
							<option value="ku">Kurdish (Kurmanji)</option>
							<option value="ky">Kyrgyz</option>
							<option value="lo">Lao</option>
							<option value="la">Latin</option>
							<option value="lv">Latvian</option>
							<option value="lt">Lithuanian</option>
							<option value="lb">Luxembourgish</option>
							<option value="mk">Macedonian</option>
							<option value="mg">Malagasy</option>
							<option value="ms">Malay</option>
							<option value="ml">Malayalam</option>
							<option value="mt">Maltese</option>
							<option value="mi">Maori</option>
							<option value="mr">Marathi</option>
							<option value="mn">Mongolian</option>
							<option value="my">Myanmar (Burmese)</option>
							<option value="ne">Nepali</option>
							<option value="no">Norwegian</option>
							<option value="or">Odia (Oriya)</option>
							<option value="ps">Pashto</option>
							<option value="fa">Persian</option>
							<option value="pl">Polish</option>
							<option value="pt">Portuguese</option>
							<option value="pa">Punjabi</option>
							<option value="ro">Romanian</option>
							<option value="ru">Russian</option>
							<option value="sm">Samoan</option>
							<option value="gd">Scots Gaelic</option>
							<option value="sr">Serbian</option>
							<option value="st">Sesotho</option>
							<option value="sn">Shona</option>
							<option value="sd">Sindhi</option>
							<option value="si">Sinhala</option>
							<option value="sk">Slovak</option>
							<option value="sl">Slovenian</option>
							<option value="so">Somali</option>
							<option value="es">Spanish</option>
							<option value="su">Sundanese</option>
							<option value="sw">Swahili</option>
							<option value="sv">Swedish</option>
							<option value="tg">Tajik</option>
							<option value="ta">Tamil</option>
							<option value="tt">Tatar</option>
							<option value="te">Telugu</option>
							<option value="th">Thai</option>
							<option value="tr">Turkish</option>
							<option value="tk">Turkmen</option>
							<option value="uk">Ukrainian</option>
							<option value="ur">Urdu</option>
							<option value="ug">Uyghur</option>
							<option value="uz">Uzbek</option>
							<option value="vi">Vietnamese</option>
							<option value="cy">Welsh</option>
							<option value="xh">Xhosa</option>
							<option value="yi">Yiddish</option>
							<option value="yo">Yoruba</option>
							<option value="zu">Zulu</option>
								</select>
						</div>
							Powered by 
							<span style="white-space:nowrap">
								<a class="goog-logo-link" href="https://translate.google.com" target="_blank">
									<img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px" style="padding-right: 3px" alt="Google Translate">
									</a>
								</span>
							</div>
					</div>
				<?php
				for ( $caweb_i = 1; $caweb_i < 4; $caweb_i++ ) {
					$caweb_url    = get_option( "ca_utility_link_$caweb_i" );
					$caweb_text   = get_option( "ca_utility_link_${caweb_i}_name" );
					$caweb_target = get_option( "ca_utility_link_${caweb_i}_new_window" ) ? ' target="_blank"' : '';
					$caweb_enabled = get_option( "ca_utility_link_${caweb_i}_enable", 'init' );
					if( ('init' === $caweb_enabled && ! empty($url)  &&  ! empty($name) ) || $caweb_enabled ){
						$caweb_enabled = ' checked';
					} else{
						$caweb_enabled = '';
					}

					if ( $caweb_enabled ) {
						printf(
							'<a class="utility-custom-%1$s" href="%2$s"%3$s>%4$s</a>',
							esc_attr( $caweb_i ),
							esc_url( $caweb_url ),
							esc_attr( $caweb_target ),
							esc_html( $caweb_text )
						);
					}
				}
				?>
				<?php if ( ! empty( $caweb_contact_us_link ) ) : ?>
				<a class="utility-contact-us" href="<?php print esc_url( $caweb_contact_us_link ); ?>">Contact Us</a>
				<?php endif; ?>

				<?php if ( 'custom' === $caweb_google_trans_enabled && ! empty( $caweb_google_trans_page ) ) : ?>
				<a id="caweb-gtrans-custom" target="<?php print esc_attr( $caweb_google_trans_page_new_window ); ?>" href="<?php print esc_url( $caweb_google_trans_page ); ?>">
				<?php if ( ! empty( $caweb_google_trans_icon ) ) : ?>
				<span class="ca-gov-icon-<?php print esc_attr( $caweb_google_trans_icon ); ?>"></span>
				<?php endif; ?>
				Translate</a>
				<?php endif; ?>
				<?php if ( true === $caweb_google_trans_enabled || 'standard' === $caweb_google_trans_enabled  ) : ?>
				<div class="quarter standard-translate" id="google_translate_element"></div>
				<?php endif; ?>
				<button class="btn btn-xs btn-primary collapsed" data-toggle="collapse" data-target="#siteSettings" aria-controls="siteSettings">
					<span class="ca-gov-icon-gear" aria-hidden="true"></span> Settings</button>
			</div>
		</div>
	</div>
</div>

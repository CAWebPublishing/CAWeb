<?php
// Template Name: Search Results Page

get_header();
$keyword = $_GET['q'];
?>
<body <?php body_class('primary') ?>  >
<?php get_template_part('partials/content', 'header') ?>
<style>
        #nav-item-search, .mobile-controls .toggle-search {
            display:none;
        }
       .mobile-controls .mobile-header-icons  {
            display: block;
            height: 61px;
            width: 100%;
            cursor: default;
       }

       .non_divi_builder.title_not_displayed .main-primary {
       		padding-top: 0;
       }

		.section-search {
			width: 100%;
		}
    </style>

<div id="page-container">
<div id="et-main-area">


	<main class="main-primary">
        <!--Search result section-->
        <div class="section section-default section-search">
            <div class="container search-results-header">
                <!--Uncomment if you prefer to use original google search box. Be advided that original custom search box is not meeting WCAG accessibility standards. -->
                <!--<gcse:searchbox-only resultsUrl="/serp.html" enableAutoComplete="true"></gcse:searchbox-only>-->
				
                <form id="Search" class="pos-rel" action="<?php echo esc_url(site_url('serp')); ?>">
                    <span class="sr-only" id="SearchInput">Custom Google Search</span>
                    <input type="text" value="<?php echo esc_attr($keyword);?>" id="q" name="q" aria-labelledby="SearchInput" placeholder="Custom Search" class="w-100 height-50 border-0 p-x-sm" />
                    <button type="submit" class="pos-abs gsc-search-button right-0 top-0 width-50 height-50 border-0"><span class="ca-gov-icon-search font-size-30" aria-hidden="true"></span><span class="sr-only">Submit</span></button>
                </form>

            </div>
        </div>
        <div class="section">
            <div class="container">
				<h1>Search Results for: <?php echo esc_attr($keyword);?></h1>
                <gcse:searchresults-only></gcse:searchresults-only>
                <!-- <script src='//www.google.com/jsapi' type='text/javascript'></script> -->
            </div>
        </div>
    </main>


</div>
</div>
<?php get_footer(); ?>
<?php if (caweb_version_check(5)) : ?>
<!-- <style>.main-content{min-height: 1px}main .container{max-width: 1280px;}#post-0{margin-bottom: 0;}table.gsc-search-box td.gsc-clear-button {display: none;}td.gsc-search-button{position: relative;}input.gsc-search-button{position: relative;}
span.search-icon{right: 63px;}input.gsc-search-button{position: absolute;top: 2px;height: 51px;width: 48px;min-width: 35px ;right: 30px;opacity: 0;}
input.gsc-input {padding: 14px;height: 55px;border: 3px solid transparent;font-size: 1.1rem !important;}input.gsc-input:focus {border-color: transparent;}
.section.section-default{padding-top: 0 !important;}</style>
<?php else: ?>	
<style>.main-content{min-height: 1px}#post-0{margin-bottom: 0;}.main-content .container{padding: 0 !important;}</style>
 --><?php endif; ?>

</body>
</html>

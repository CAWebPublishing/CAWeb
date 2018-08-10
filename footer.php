<!-- Global Footer -->
<?php
wp_nav_menu(array(
    'theme_location'=> 'footer-menu',
    'version' => caweb_get_page_version(get_the_ID())
)
					);

wp_footer();

if ( ! is_404()) :
?>

<script> 
window.et_pb_smooth_scroll=function($target,$top_section,speed,easing){
                var $window_width=$(window).width();
                $("header").hasClass("fixed")&&$window_width>768?$menu_offset=$("#header").outerHeight()-1:$menu_offset=-1,
                $("#wpadminbar").length&&$window_width>600&&($menu_offset+=$("#wpadminbar").outerHeight()),
                $scroll_position=$top_section?0:$target.offset().top-$menu_offset,
                void 0===easing&&(easing="swing");
                if($scroll_position<220){ // scrollDistanceToMakeCompactHeader from cagov.core.js
                                $scroll_position-=36; // Height difference between normal and compact header
                }
                $("html, body").animate({scrollTop:$scroll_position},speed,easing);
}
</script>

<?php endif; ?>

<?php if (is_tag() || is_archive() || is_category() || is_author()) : ?>
  <script>
    
 jQuery(document).ready(function() {   
   		var articles = document.getElementsByTagName('main')[0].getElementsByTagName('article');
   		var makeSpace = false;
   
       for(var i = 0, len = articles.length; i < len; i++){
         if( articles[i].classList.contains('has-post-thumbnail')){
           makeSpace = true;
	       }
       }
   
   if(makeSpace){
     for(var i = 0, len = articles.length; i < len; i++){
       if( ! articles[i].classList.contains('has-post-thumbnail'))
         articles[i].getElementsByTagName('a')[0].setAttribute("style", "width:200px;height:150px;padding-right:20px;padding-bottom:15px;float:left;");
       
       }
   }
   
 });
    	
  </script>

<?php endif; ?>
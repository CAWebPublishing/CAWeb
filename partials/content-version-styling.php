<?php if(ca_version_check(5.0, $post->ID) ) : ?>

 <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/css/v5custom.css">

<?php elseif(ca_version_check(4.5, $post->ID) ): ?>

 <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/css/v4_5custom.css">

<?php elseif(ca_version_check(4, $post->ID) ): ?>

<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/css/v4custom.css">


<script>
 /* Remove the banner from appearing as part of the content */
if(document.getElementById('et_pb_ca_fullwidth_banner')){
 var banner = document.getElementById('et_pb_ca_fullwidth_banner');
 var banParent = banner.parentElement;

 banParent.parentElement.removeChild(banParent);
}else{
 document.body.classList.remove('primary');
}

jQuery(document).ready(function() {
  var nav_search_div = document.getElementById("header").getElementsByClassName('navigation-search')[0];
  var head_search = document.getElementById("head-search");
  var nav = document.getElementById("navigation");
  
    $(".textfield-container").click(function() {
  document.getElementById("head-search").classList.add("search-freeze-width")
    }),
    $(".search-textfield").blur(function() {
        document.getElementById("head-search").classList.remove("search-freeze-width")

    })
    
});

</script>
<?php endif; ?>

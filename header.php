<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->

<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->

<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->

<!--[if IE 9]>    <html class="no-js ie9 oldie" lang="en"> <![endif]-->

<!--[if (gt IE 9)]><!-->

<html class="no-js" lang="en"><!--<![endif]-->

<head >

    <meta charset="utf-8">


    <meta name="Author" content="State of California" />


    <meta name="Description" content="State of California" />

    <meta name="Keywords" content="California, government" />

<?php



	wp_head();



	$cssDIR = get_stylesheet_directory_uri();

	$ver = ( ca_version_check(4, $post->ID) ?  'v4' : '');

	print sprintf('<link rel="stylesheet" href="%1$s/css/cagov.%2$score.css">',$cssDIR, $ver);
	print sprintf('<link rel="stylesheet" href="%1$s/css/colorscheme-%2$s%3$s.css">',$cssDIR, $ver,get_option('ca_site_color_scheme'));  print sprintf('<link rel="stylesheet" href="%1$s/css/custom.css">',$cssDIR);  require_once(get_stylesheet_directory() . '/ssi/head-css-js.html');

?>



</head>
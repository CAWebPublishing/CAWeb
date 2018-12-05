<!DOCTYPE html>
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

    <!-- Use highest compatibility mode -->
    <meta http-equiv="X-UA-Compatible" content="IE=11">

    <!-- http://t.co/dKP3o1e -->
    <meta name="HandheldFriendly" content="True">

    <!-- for Blackberry, AvantGo -->
    <meta name="MobileOptimized" content="320">

    <!-- for Windows mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

		<!-- Google Meta-->
		<meta name="google-site-verification" content="<?php print get_option('ca_google_meta_id'); ?>" />

    <!-- Google Fonts -->
  	<link href='https://fonts.googleapis.com/css?family=Asap+Condensed:400,600|Source+Sans+Pro:400,700' rel='stylesheet' type='text/css'>
    <!-- selectivizr.com, emulates CSS3 pseudo-classes and attribute selectors in Internet Explorer 6-8 -->


<?php

printf('<link rel="apple-touch-icon" sizes="144x144" href="%1$s/images/system/apple-touch-icon-144x144.png">', CAWebUri);
printf('<link rel="apple-touch-icon" sizes="114x114" href="%1$s/images/system/apple-touch-icon-114x114.png">', CAWebUri);
printf('<link rel="apple-touch-icon" sizes="72x72" href="%1$s/images/system/apple-touch-icon-72x72.png">', CAWebUri);
printf('<link rel="apple-touch-icon" href="%1$s/images/system/apple-touch-icon-57x57.png">', CAWebUri);

// Nokia
//printf('<link rel="shortcut icon" href="%1$s/images/system/apple-touch-icon-57x57.png">', CAWebUri);

// Everything Else

	wp_head();

?>

<!--[if (lt IE 9) & (!IEMobile)]>

<script src="<?php printf('%1$s/js/libs/selectivizr-min.js', CAWebUri); ?>"></script>

<![endif]-->


<!-- Activate ClearType for Mobile IE -->

<!--[if IE]>

<meta http-equiv="cleartype" content="on">

<![endif]-->



<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 8]>

  <script src="<?php printf('%1$s/js/libs/html5shiv.min.js', CAWebUri); ?>"></script>

  <script src="<?php printf('%1$s/js/libs/respond.min.js', CAWebUri); ?>"></script>

<![endif]-->

</head>

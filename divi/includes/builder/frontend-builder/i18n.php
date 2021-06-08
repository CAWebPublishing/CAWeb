<?php
// Add strings from i18n directory. Note: We don't handle subdirectories, but we should in the future.
$i18n_files = glob( __DIR__ . '/i18n/*.php' );
$strings    = array();

foreach ( $i18n_files as $file ) {
	$filename        = basename( $file, '.php' );
	$key             = et_()->camel_case( $filename );
	$strings[ $key ] = require $file;
}

return $strings;

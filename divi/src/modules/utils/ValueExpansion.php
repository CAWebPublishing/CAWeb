<?php
namespace CAWeb\Modules\Utils;

class ValueExpansion {
    public static function convertFontIcon( $value ) {
        update_site_option('dev', $value );

        return $value;
    }
}
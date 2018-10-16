<?php

if ( ! function_exists('et_pb_is_pagebuilder_used')) {
    function et_pb_is_pagebuilder_used() {
        return false;
    }
}

if ( ! function_exists('et_get_option')) {
    function et_get_option($option_name, $default_value = '', $used_for_object = '', $force_default_value = false, $is_global_setting = false, $global_setting_main_name = '', $global_setting_sub_name = '') {
        return '';
    }
}
?>
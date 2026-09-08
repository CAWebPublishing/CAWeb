<?php
namespace CAWeb\Modules\Utils;

class ValueExpansion {

    /**
     * Get included tags.
     *
     * @param mixed $tags
     * @return array
     */
    public static function includedTags( $tags ) {
        $all_tags = get_tags(
            array( 
                'taxonomy' => 'post_tag', 
                'hide_empty' => false, 
                'fields' => 'ids'
            )
        );
                
        $tags = ! is_array( $tags ) ? explode(',', $tags ) : $tags;

        // we only return tags that are included in the $all_tags array
        return array_intersect( $tags, $all_tags );
    }

    /**
     * Updates Post List Module style with correct value
     * We want the list style to be plural, with the exception of the general-list
     * 
     * @param mixed $value
     * @return string
     */
    public static function replacePostListStyle( $value ) {
        return 'general-list' === $value ? $value : preg_replace('/([^s])-/', '$1s-', $value);
    }
}
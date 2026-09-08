<?php
/**
 * Traits: HelperTrait
 *
 * @package CAWeb\Modules\ModuleTrait
 * @since ??
 */
namespace CAWeb\Modules\Utils;


if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;

interface DepInterface extends DependencyInterface {
    /**
	 * CAWeb Google Maps Embed API Key
	 *
	 * @var string Google Maps Embed API Key.
	 */
	public const CAWEB_GOOGLE_MAPS_EMBED_API_KEY = 'AIzaSyCtq3i8ME-Ab_slI2D8te0Uh2PuAQVqZuE';

    public static function get_address( $addr );

    public static function render_address_map_link( $addr, $embed = false, $target = '_blank', $classes = '' );
    
}

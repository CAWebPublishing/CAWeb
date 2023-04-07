<?php
/**
 * CAWeb No Navigation Set Menu
 *
 * @see https://developer.wordpress.org/reference/classes/walker_nav_menu/
 * @see https://core.trac.wordpress.org/browser/tags/5.3/src/wp-includes/class-walker-nav-menu.php
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>

<nav id="navigation" class="main-navigation hidden-print nav">
	<ul id="nav_list" class="top-level-nav">
		<li class="nav-item">
			<a href="#" class="first-level-link">
				<span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span>
				<strong>There Is No Navigation Menu Set</strong>
			</a>
		</li>
	</ul>
</nav>

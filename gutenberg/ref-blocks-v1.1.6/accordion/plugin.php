<?php

/**
 * Plugin Name: Accordion
 * Plugin URI: TBD
 * Description: Accordions are expandable sections of content. Each section contains a heading (H2 or H3), a plus button (+), and more body text when opened.\n Accordions hide information unless someone opens them. This requires an extra action, which means readers have to do extra work to get this information. People cannot scan for information that’s in an accordion.
 * Version: 1.0.10
 * Author: California Office of Digital Innovation
 * @package ca-design-system
 * @depends https://github.com/cagov/design-system/tree/main/components/accordion
 * DOCS: https://[DESIGN SYSTEM WEBSITE]/components/accordion/readme/
 */

defined('ABSPATH') || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action('init', 'cagov_accordion');

function cagov_accordion()
{
	load_plugin_textdomain('ca-design-system', false, basename(__DIR__) . '/languages');
}

function cagov_accordion_dynamic_render_callback($block_attributes, $content)
{
	$title = isset($block_attributes["title"]) ? $block_attributes["title"] : "";
	return <<<EOT
	<cagov-accordion>
		<details>
			<summary>$title</summary>
			<div class="accordion-body">$content</div>
		</details>
	</cagov-accordion>
	EOT;
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 * Passes translations to JavaScript.
 */
function ca_design_system_register_accordion()
{

	if (!function_exists('register_block_type')) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'ca-design-system-accordion',
		plugins_url('block.js', __FILE__),
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
		filemtime(plugin_dir_path(__FILE__) . 'block.js'),
	);

	wp_register_style(
		'ca-design-system-accordion-editor-style',
		plugins_url('editor.css', __FILE__),
		array(),
		filemtime(plugin_dir_path(__FILE__) . 'editor.css')
	);

	register_block_type('ca-design-system/accordion', array(
		// Web component loads from bundle `./cagov-design-system/build/index.js`
		'editor_style' => 'ca-design-system-accordion-editor-style',
		'editor_script' => 'ca-design-system-accordion',
		'render_callback' => 'cagov_accordion_dynamic_render_callback'
	));
}
add_action('init', 'ca_design_system_register_accordion');

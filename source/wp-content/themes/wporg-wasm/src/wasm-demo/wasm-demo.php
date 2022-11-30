<?php
/**
 * Plugin Name:       Wasm Demo
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wasm-demo
 *
 * @package           create-block
 */

namespace WordPressdotorg\WordPressWasm\DemoBlock;

add_action( 'init', __NAMESPACE__ .'\create_block_wasm_demo_block_init' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\register_assets', 20 );

 /**
 * Renders block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the event year for the current post.
 */
function render_block( $attributes, $content ) {
	$wrapper_attributes = get_block_wrapper_attributes();
	return sprintf(
		'<div id="wporg-wasm-demo" %s></div>',
		$wrapper_attributes,
	);
}

/**
 * Register scripts, styles, and block.
 */
function register_assets() {
	$deps_path = __DIR__ . '/build/index.asset.php';
	
	if ( ! file_exists( $deps_path ) ) {
		return;
	}

	$block_info = require $deps_path;

	if ( ! is_admin() ) {
		wp_enqueue_style(
			'wporg-component-style',
			get_stylesheet_directory_uri() . '/src/wasm-demo/build/style-front.css',
			array(),
			filemtime( __DIR__ . '/build/style-front.css' )
		);
	}
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wasm_demo_block_init() {
	register_block_type( 
		__DIR__ . '/build',
	array(
		'render_callback' => __NAMESPACE__ . '\render_block',
	) );
}

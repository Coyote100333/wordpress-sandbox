<?php

namespace WordPressdotorg\Theme\Showcase_2022;

require_once __DIR__ . '/inc/block-styles.php';

// Blocks
require_once __DIR__ . '/src/wasm-demo/wasm-demo.php';

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_assets' );

/**
 * Enqueue scripts and styles.
 */
function enqueue_assets() {
	// The parent style is registered as `wporg-parent-2021-style`, and will be loaded unless
	// explicitly unregistered. We can load any child-theme overrides by declaring the parent
	// stylesheet as a dependency.
	wp_enqueue_style(
		'wporg-wasm-style',
		get_stylesheet_directory_uri() . '/style.css',
		array( 'wporg-parent-2021-style' ),
		filemtime( __DIR__ . '/style.css' )
	);
	wp_style_add_data( 'wporg-wasm-style', 'rtl', 'replace' );

}
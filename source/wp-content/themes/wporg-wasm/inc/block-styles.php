<?php
/**
 * Block Styles & Variations
 *
 * Load the CSS, JS, and register custom styles.
 */

namespace WordPressdotorg\Theme\WASM\Block_Styles;

defined( 'WPINC' ) || die();

const STYLE_HANDLE = 'wporg-wasm-block-styles';

/**
 * Actions and filters.
 */
add_action( 'init', __NAMESPACE__ . '\setup_block_styles' );

/**
 * Add our custom block styles & class names.
 */
function setup_block_styles() {
	register_block_style(
		'core/cover',
		array(
			'name'         => 'browser-frame',
			'label'        => __( 'Browser Frame', 'wporg' ),
			'style_handle' => STYLE_HANDLE,
		)
	);
}
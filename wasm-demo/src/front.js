/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import App from './components/index.js';

const init = () => {
	const domElement = document.getElementById( 'wporg-wasm-demo' );
	if ( ! domElement ) {
		return;
	}

	render( <App />, domElement );
};

document.addEventListener( 'DOMContentLoaded', init );

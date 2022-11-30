import { forwardRef } from '@wordpress/element';

export default forwardRef( ( { src }, ref ) => {
	return (
		<iframe title="WordPress.org WASM sandbox" src={ src } ref={ ref } />
	);
} );

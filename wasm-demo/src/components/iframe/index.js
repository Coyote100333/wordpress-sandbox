import { forwardRef } from '@wordpress/element';

export default forwardRef(({ src }, ref) => {
	const styles = {
		height: '600px',
		width: '100%',
	};
	return <iframe style={ styles } src={ src } ref={ ref } />;
});

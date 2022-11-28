import { forwardRef } from '@wordpress/element';

export default forwardRef(({ src }, ref) => {
	return <iframe src={ src } ref={ ref } />;
});

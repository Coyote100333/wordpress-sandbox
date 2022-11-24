import { CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default ( { label, checked = false } ) => {
	return (
		<CheckboxControl
			label={ label }
			checked={ checked }
			onChange={() => { } }
		/>
	);
};

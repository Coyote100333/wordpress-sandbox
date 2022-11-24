import { CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default ( { label, checked = false } ) => {
	const [ isChecked, setChecked ] = useState( checked );
	return (
		<CheckboxControl
			label={ label }
			checked={ isChecked }
			onChange={ setChecked }
		/>
	);
};

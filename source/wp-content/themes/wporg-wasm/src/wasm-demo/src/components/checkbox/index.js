import { CheckboxControl } from '@wordpress/components';

export default ( { label, checked = false } ) => {
	return (
		<CheckboxControl
			label={ label }
			checked={ checked }
			onChange={ () => {} }
		/>
	);
};

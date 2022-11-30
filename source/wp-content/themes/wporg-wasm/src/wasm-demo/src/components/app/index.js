/**
 * WordPress dependencies
 */
import { useState, useRef } from '@wordpress/element';
import safeAddQueryArgs from '../../safe-add-query-args';

/**
 * Internal dependencies
 */
import SetupStep from './setup-step';
import SandboxStep from './sandbox-step';

const STEP_SETUP = 'STEP_SETUP';
const STEP_SANDBOX = 'STEP_SANDBOX';

export default () => {
	const ref = useRef();
	const [ step, _setStep ] = useState(
		() =>
			new URL( window.location.href ).searchParams.get( 'step' ) ||
			STEP_SETUP
	);
	function setStep( curStep ) {
		_setStep( curStep );
		window.history.pushState(
			{},
			'',
			safeAddQueryArgs( window.location.href, { curStep } )
		);
		if ( curStep === STEP_SANDBOX ) {
			setTimeout( () => {
				ref.current.scrollIntoView( true );
			} );
		}
	}

	return (
		<div>
			{ step === STEP_SETUP && (
				<SetupStep onSubmit={ () => setStep( STEP_SANDBOX ) } />
			) }
			<SandboxStep
				onClickBack={ () => setStep( STEP_SETUP ) }
				ref={ ref }
			/>
		</div>
	);
};

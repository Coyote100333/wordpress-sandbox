/**
 * WordPress dependencies
 */
import { Flex, FlexBlock, FlexItem } from '@wordpress/components';
import { useEffect, useState, useRef } from '@wordpress/element';
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
	const [step, _setStep] = useState(() => 
		new URL(location.href).searchParams.get('step') || STEP_SETUP
	);
	function setStep(step) {
		_setStep(step);
		history.pushState({}, '', safeAddQueryArgs(location.href, { step }));
		if (step === STEP_SANDBOX) {
			setTimeout(() => {
				ref.current.scrollIntoView(true);
			})
		}
	}

	switch (step) {
		case STEP_SETUP:
			return <SetupStep onSubmit={() => setStep(STEP_SANDBOX)} />;
		case STEP_SANDBOX:
			return <SandboxStep onClickBack={() => setStep(STEP_SETUP)} ref={ref} />;
		default:
			return null;
	}
};

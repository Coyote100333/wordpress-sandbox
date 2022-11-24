/**
 * WordPress dependencies
 */
import { TabPanel } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Themes from './themes';
import Plugins from './plugins';

const onSelect = ( tabName ) => {
	console.log( 'Selecting tab', tabName );
};

export default () => (
	<TabPanel
		className="wporg-tab-panel"
		activeClass="active-tab"
		onSelect={ onSelect }
		tabs={ [
			{
				name: 'tab1',
				title: 'Themes',
				className: 'tab-one',
				content: <Themes />,
			},
			{
				name: 'tab2',
				title: 'Plugins',
				className: 'tab-two',
				content: <Plugins />,
			},
		] }
	>
		{ ( tab ) => (
			<div className="wporg-tab-panel-inner">
				<h2>Available to preview</h2>
				<p>Select an item to preview live.</p>
				{ tab.content }
			</div>
		) }
	</TabPanel>
);

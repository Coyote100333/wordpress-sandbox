/**
 * WordPress dependencies
 */
import { Flex, FlexItem, FlexBlock } from '@wordpress/components';
import { usePlugins } from '../../hooks/plugins';

/**
 * Internal dependencies
 */
import Checkbox from '../checkbox';

export default ( ) => {
	const { plugins, setActivePlugins } = usePlugins();

	return (
		<ul className="wporg-tab-item-list">
			{ plugins.map( ( plugin ) => (
				<li key={ plugin.zip }>
					<a onClick={ () => onChange( plugin ) }>
						<Flex align="flex-start">
							<FlexItem>
								<Checkbox checked={ false } />
							</FlexItem>
							<FlexBlock>
								<h3>{ plugin.name }</h3>
								<span>Version: { plugin.zip }</span>
							</FlexBlock>
						</Flex>
					</a>
				</li>
			) ) }
		</ul>
	);
};

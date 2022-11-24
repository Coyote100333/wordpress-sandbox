/**
 * WordPress dependencies
 */
import { Flex, FlexBlock, FlexItem, Button } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import Iframe from '../iframe';
import Checkbox from '../checkbox';
import { useThemes } from '../../hooks/themes';
import { usePlugins } from '../../hooks/plugins';

const BASE_URL = 'https://wasm.wordpress.net/wordpress.html';

export default ({ onSubmit }) => {
	const { themes, activeTheme, setActiveTheme } = useThemes();
	const { plugins, activePlugins, toggleActivePlugin } = usePlugins();

	const mShotsUrl = 'https://wordpress.com/mshots/v1/';
	
	return (
		<Flex className="wporg-demo-browser" align="flex-start" gap="0">
			<FlexItem>
				<h4 className='wporg-section-title'>Select a theme</h4>
				<Flex as="ul" align="flex-start" className="wporg-tab-item-list is-theme" wrap={true}>
					{ themes.map( ( theme ) => (
						<FlexItem
							as="li"
							key={theme.name}
							className={'wporg-tab-item-list-item ' + (activeTheme === theme ? 'is-active' : '')}
							onClick={() => setActiveTheme(theme)}
						>
							<a>
								<Flex align="flex-start" direction='column' gap={0}>
									<FlexItem>
										<img
											src={ `${ mShotsUrl }${ encodeURIComponent(
												theme.url + '?v=20221124'
											) }` }
										/>
									</FlexItem>
									<FlexBlock as="h3" className='wporg-tab-item-list__item-name'>
										{ theme.name }
									</FlexBlock>
								</Flex>
							</a>
							<div className="wporg-tab-item-list__overlay" />
						</FlexItem>
					) ) }
				</Flex>

				<h4 className='wporg-section-title'>Choose a few plugins</h4>
				<Flex as="ul" align="flex-start" className="wporg-tab-item-list is-plugin" wrap={true}>
					{ plugins.map( ( plugin ) => (
						<FlexItem
							as="li"
							key={plugin.zip}
							className={'wporg-tab-item-list-item ' + (activePlugins.includes(plugin) ? 'is-active' : '')}
							onClick={() => toggleActivePlugin(plugin)}
						>
							<a>
								<Flex align="flex-start" direction='row' gap={2}>
									<FlexItem>
										<img src={plugin.icon} />
									</FlexItem>
									<FlexBlock as="h3" className='wporg-tab-item-list__item-name'>
										{plugin.name}
									</FlexBlock>
								</Flex>
							</a>
							<div className="wporg-tab-item-list__overlay" />
						</FlexItem>
					) ) }
				</Flex>

				<Button
					isPrimary
					className="wporg-tab-item-list__confirm"
					onClick={onSubmit}
				>
					Start Your Sandbox!
				</Button>
			</FlexItem>
		</Flex>
	);
};

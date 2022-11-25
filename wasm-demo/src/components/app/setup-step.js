/**
 * WordPress dependencies
 */
import {
	Flex,
	FlexBlock,
	FlexItem,
	Modal,
	Button,
} from '@wordpress/components';
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

export default ( { onSubmit } ) => {
	const { themes, activeTheme, setActiveTheme } = useThemes();
	const { plugins, activePlugins, toggleActivePlugin } = usePlugins();

	const mShotsUrl = 'https://wordpress.com/mshots/v1/';

	return (
		<Modal
			isFullScreen={ true }
			title="In-Browser WordPress"
			onRequestClose={ onSubmit }
		>
			<p>
				Welcome to a new and exciting way fo testing WordPress Themes
				and Plugins all with your browser! To get started choose a theme
				and a collection of plugins.{ ' ' }
			</p>

			<Flex wrap={ true }>
				<FlexItem>
					<h4 className="wporg-section-title">1. Select a theme</h4>
					<Flex
						as="ul"
						align="flex-start"
						className="wporg-tab-item-list is-theme"
						wrap={ true }
						gap="16px"
					>
						{ themes.map( ( theme ) => (
							<FlexItem
								as="li"
								key={ theme.name }
								className={
									'wporg-tab-item-list-item ' +
									( activeTheme === theme ? 'is-active' : '' )
								}
								onClick={ () => setActiveTheme( theme ) }
							>
								<a href="#">
									<Flex
										align="flex-start"
										direction="column"
										gap={ 0 }
									>
										<FlexItem>
											<img
												src={ `${ mShotsUrl }${ encodeURIComponent(
													theme.url + '?v=20221125'
												) }` }
											/>
										</FlexItem>
										<FlexBlock
											as="h3"
											className="wporg-tab-item-list__item-name"
										>
											{ theme.name }
										</FlexBlock>
									</Flex>
								</a>
								<div className="wporg-tab-item-list__overlay" />
							</FlexItem>
						) ) }
					</Flex>

					<h4 className="wporg-section-title">
						2. Choose a few plugins
					</h4>
					<ul
						className="wporg-tab-item-list is-plugin"
					>
						{ plugins.map( ( plugin ) => (
							<li
								key={ plugin.zip }
								className={
									'wporg-tab-item-list-item ' +
									( activePlugins.includes( plugin )
										? 'is-active'
										: '' )
								}
								onClick={ () => toggleActivePlugin( plugin ) }
							>
								<a href="#">
									<Flex
										align="flex-start"
										direction="row"
										gap={ 2 }
									>
										<FlexItem>
											<img src={ plugin.icon } />
										</FlexItem>
										<FlexBlock
											as="h3"
											className="wporg-tab-item-list__item-name"
										>
											{ plugin.name }
										</FlexBlock>
									</Flex>
								</a>
								<div className="wporg-tab-item-list__overlay" />
							</li>
						) ) }
					</ul>

					<div className="wporg-setup-footer">
						<Button
							isPrimary
							className="wporg-tab-item-list__confirm"
							onClick={ onSubmit }
						>
							Start Your Sandbox!
						</Button>
					</div>
				</FlexItem>
			</Flex>
		</Modal>
	);
};

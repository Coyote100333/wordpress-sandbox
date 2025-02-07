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

/**
 * Internal dependencies
 */
import Checkbox from '../checkbox';
import { useThemes } from '../../hooks/themes';
import { usePlugins } from '../../hooks/plugins';

export default ( { onSubmit } ) => {
	const { themes, activeTheme, setActiveTheme } = useThemes();
	const { plugins, activePlugins, toggleActivePlugin } = usePlugins();

	return (
		<Modal
			isFullScreen={ true }
			title="In-Browser WordPress"
			onRequestClose={ onSubmit }
			className="wporg-setup-modal"
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
						justify="flex-start"
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
								<a
									href={ theme.url }
									onClick={ ( event ) =>
										event.preventDefault()
									}
								>
									<Flex
										align="flex-start"
										direction="column"
										gap={ 0 }
									>
										<FlexItem>
											<img
												src={ theme.thumbnail }
												alt={ theme.name }
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
						2. Add a few plugins
					</h4>
					<Flex
						className="wporg-tab-item-list is-plugin"
						justify="flex-start"
						wrap={ true }
						gap="8px"
					>
						{ plugins.map( ( plugin ) => (
							<FlexItem
								key={ plugin.zip }
								className={
									'wporg-tab-item-list-item ' +
									( activePlugins.includes( plugin )
										? 'is-active'
										: '' )
								}
								onClick={ () => toggleActivePlugin( plugin ) }
							>
								<a
									href={ plugin.url }
									onClick={ ( event ) =>
										event.preventDefault()
									}
								>
									<Flex
										align="center"
										direction="row"
										gap={ 2 }
									>
										<FlexItem>
											<img
												src={ plugin.icon }
												alt={ plugin.name }
											/>
										</FlexItem>
										<FlexBlock
											as="h3"
											className="wporg-tab-item-list__item-name"
										>
											{ plugin.name }
										</FlexBlock>
										<FlexItem>
											<Checkbox
												checked={ activePlugins.includes(
													plugin
												) }
											/>
										</FlexItem>
									</Flex>
								</a>
								<div className="wporg-tab-item-list__overlay" />
							</FlexItem>
						) ) }
					</Flex>

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

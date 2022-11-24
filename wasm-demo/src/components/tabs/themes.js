/**
 * WordPress dependencies
 */
import { Flex, FlexItem, FlexBlock } from '@wordpress/components';
import { useThemes } from '../../hooks/themes';

export default () => {
	const { themes, setActiveTheme } = useThemes();
	const mShotsUrl = 'https://wordpress.com/mshots/v1/';

	return (
		<ul className="wporg-tab-item-list">
			{ themes.map( ( theme ) => (
				<li key={ theme.name }>
					<a onClick={ () => setActiveTheme( theme ) }>
						<Flex align="flex-start">
							<FlexItem>
								<img
									src={ `${ mShotsUrl }${ encodeURIComponent(
										theme.url + '?v=20221124'
									) }` }
								/>
							</FlexItem>
							<FlexBlock>
								<h3>{ theme.name }</h3>
								<span>Version: { theme.zip }</span>
							</FlexBlock>
						</Flex>
					</a>
				</li>
			) ) }
		</ul>
	);
};

//  <Button > Theme thing</Button>

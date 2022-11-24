/**
 * WordPress dependencies
 */
import { Flex, FlexBlock, FlexItem } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import Tabs from '../tabs';
import Search from '../search';
import Iframe from '../iframe';
import PreviewBar from '../preview-bar';
import { useThemes } from '../../hooks/themes';
import { usePlugins } from '../../hooks/plugins';

const BASE_URL = 'https://wasm.wordpress.net/wordpress.html';

export default () => {
	const { activeTheme } = useThemes();
    const { activePlugins } = usePlugins();
	const [ url, setUrl ] = useState( 'theme=twentytwentythree.1.0.zip' );

	useEffect( () => {
		setUrl( addQueryArgs( '', { theme: activeTheme.zip } ) );
	}, [ activeTheme ] );

    // useEffect( () => {
	// 	setUrl( addQueryArgs( '', { plugins: activePlugins[0].zip } ) );
	// }, [ activeTheme ] );

	return (
		<Flex className="wporg-demo-browser" align="flex-start" gap="0">
			<FlexItem>
				<Search />
				<Tabs />
			</FlexItem>
			<FlexBlock>
				<Flex direction="column">
					<FlexItem>
						<PreviewBar />
					</FlexItem>

					<FlexItem>
						<Iframe
							src={ `${ BASE_URL }${ url }&mode=seamless` }
						/>
					</FlexItem>
				</Flex>
			</FlexBlock>
		</Flex>
	);
};

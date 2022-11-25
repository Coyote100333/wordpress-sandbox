/**
 * WordPress dependencies
 */
import {
	Button,
	ButtonGroup,
	Flex,
	FlexBlock,
	FlexItem,
} from '@wordpress/components';
import { useEffect, useState, useRef, forwardRef } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import Iframe from '../iframe';
import { useThemes } from '../../hooks/themes';
import { usePlugins } from '../../hooks/plugins';

const BASE_URL = 'https://wasm.wordpress.net/wordpress.html';

export default forwardRef( ( { onClickBack }, ref ) => {
	const { activeTheme } = useThemes();
	const { activePlugins } = usePlugins();
	const iframeRef = useRef();

	const queryString = buildQueryString( [
		[ 'rpc', '1' ],
		[ 'url', '/wp-admin/' ],
		[ 'mode', 'seamless' ],
		[ 'theme', activeTheme.zip ],
		...activePlugins.map( ( plugin ) => [ 'plugin', plugin.zip ] ),
	] );

	function wpRedirect( path ) {
		iframeRef.current.contentWindow.postMessage(
			{ type: 'go_to', path },
			'*'
		);
	}

	const url = `${ BASE_URL }?${ queryString }`;

	return (
		<div className="wporg-demo-browser" ref={ ref }>
			<Flex className="wporg-demo__viewport-controls">
				<FlexItem></FlexItem>
				<FlexItem>
					<Button onClick={ onClickBack } variant="primary">
						<span>Settings</span>
					</Button>
				</FlexItem>
			</Flex>
			<Iframe
				src={ url }
				ref={ iframeRef }
				className="wporg-demo__viewport"
			/>
		</div>
	);
} );

function buildQueryString( params ) {
	const esc = encodeURIComponent;
	const query = params
		.map( ( [ k, v ] ) => esc( k ) + '=' + esc( v ) )
		.join( '&' );
	return query;
}

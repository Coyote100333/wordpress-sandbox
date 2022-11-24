/**
 * Internal dependencies
 */
import App from './app';
import '../../node_modules/@wordpress/components/build-style/style.css';
import { ThemesProvider } from '../hooks/themes';
import { PluginsProvider } from '../hooks/plugins';

export default () => {
	return (
		<ThemesProvider>
			<PluginsProvider>
				<App />
			</PluginsProvider>
		</ThemesProvider>
	);
};

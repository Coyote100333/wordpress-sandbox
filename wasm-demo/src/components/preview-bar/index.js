/**
 * Internal dependencies
 */
import { useThemes } from '../../hooks/themes';
import { usePlugins } from '../../hooks/plugins';


export default ( { themeName, plugins} ) => {
	const { activeTheme } = useThemes();
    const { activePlugins } = usePlugins();

	return (
		<div className="wporg-demo-browser-preview-bar">
			Previewing <b>{ activeTheme.name }</b> with { activePlugins.length }
			{ ' ' } plugins installed.
		</div>
	);
};

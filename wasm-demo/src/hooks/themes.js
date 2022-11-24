/**
 * WordPress dependencies
 */
import { createContext, useContext, useState } from '@wordpress/element';
import safeAddQueryArgs from '../safe-add-query-args';

const StateContext = createContext();

const themes = [
	{
		url: 'https://wp-themes.com/twentytwentythree',
		name: 'Twenty Twenty-Three',
		zip: 'twentytwentythree.latest-stable.zip',
	},
	{
		url: 'https://wp-themes.com/twentytwentytwo',
		name: 'Twenty Twenty-Two',
		zip: 'twentytwentytwo.latest-stable.zip',
	},
	{
		url: 'https://wp-themes.com/twentytwentyOne',
		name: 'Twenty Twenty-One',
		zip: 'twentytwentyone.latest-stable.zip',
	},
];
export const ThemesProvider = ( { children } ) => {
	const [activeTheme, _setActiveTheme] = useState(() => {
		const urlTheme = new URL(location.href).searchParams.get('theme')
		const preselectedTheme = themes.find(theme => theme.zip === urlTheme)
		return preselectedTheme ? preselectedTheme : themes[0];
	});
	const setActiveTheme = (theme) => {
		_setActiveTheme(theme);
		history.replaceState({}, '', safeAddQueryArgs(location.href, { theme: theme.zip }));
	};
	return (
		<StateContext.Provider
			value={ {
				themes: themes,
				activeTheme,
				setActiveTheme,
			} }
		>
			{ children }
		</StateContext.Provider>
	);
};

export const useThemes = () => {
	const context = useContext( StateContext );

	if ( context === undefined ) {
		throw new Error( 'useThemes must be used within a Provider' );
	}

	return context;
};

/**
 * WordPress dependencies
 */
import { createContext, useContext, useState } from '@wordpress/element';

const StateContext = createContext();

export const ThemesProvider = ( { children } ) => {
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
	const [ activeTheme, setActiveTheme ] = useState( themes[ 0 ] );
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

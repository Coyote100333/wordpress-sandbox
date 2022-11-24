/**
 * WordPress dependencies
 */
import { createContext, useContext, useState } from '@wordpress/element';

const StateContext = createContext();

export const PluginsProvider = ( { children } ) => {
	const plugins = [
		{
			name: 'Gutenberg',
			zip: 'gutenberg.latest-stable.zip',
		},
		{
			name: 'Hello Dolly',
			zip: 'hello-dolly.latest-stable.zip',
		},
		{
			name: 'Jetpack',
			zip: 'gutenberg.latest-stable.zip',
		},
	];
	const [ activePlugins, setActivePlugins ] = useState( [] );
	return (
		<StateContext.Provider
			value={ {
				plugins: plugins,
				activePlugins,
				setActivePlugins,
			} }
		>
			{ children }
		</StateContext.Provider>
	);
};

export const usePlugins = () => {
	const context = useContext( StateContext );

	if ( context === undefined ) {
		throw new Error( 'useThemes must be used within a Provider' );
	}

	return context;
};

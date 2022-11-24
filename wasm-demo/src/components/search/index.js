import { SearchControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default () => {
    const [ searchInput, setSearchInput ] = useState( '' );

    return (
        <SearchControl
            value={ searchInput }
            onChange={ setSearchInput }
        />
    );
}
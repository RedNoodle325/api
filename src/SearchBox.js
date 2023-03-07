import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa4'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search pokemon'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;
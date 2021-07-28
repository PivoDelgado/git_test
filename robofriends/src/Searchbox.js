import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <input type='search' placeholder='Search Robofriends' onChange={searchChange} />
    )
}



export default Searchbox;
import React from 'react';
import './Searchbox.css';

const Searchbox = ({searchChange}) => {
    return (
        <input type='search' placeholder='Search Robofriends' onChange={searchChange} />
    )
}



export default Searchbox;
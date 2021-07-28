import React from 'react';
import './card.css';

const Card = ({name,email,id}) => {
    return (
        <div className='cardTotal'>
            <img src={`https://robohash.org/${id}' alt='robo'`}/>
            <div className='cardText'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card;
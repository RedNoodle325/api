import React from 'react';
import 'tachyons';
import Card from './Card.js';

const CardList = ({pokemon}) => {
    return (
        <div className='fl w-100'>
            {
                pokemon.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={i+1}
                            name={pokemon[i].name}
                        />
                    );
                }
            )
        }
        </div>
    );
}

export default CardList;


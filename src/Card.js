import React from 'react';
import 'tachyons';

const Card = (props) => {
    const { name } = props;
    return (
        <div className='tc bg-yellow dib black br3 pa3 ma2 dim bw5 shadow-5'>
            <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
            <div>
                <h2 className='ttc'> {name}</h2>
            </div>
        </div>
    );

}

export default Card;

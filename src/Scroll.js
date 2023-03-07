import React from 'react';
import 'tachyons';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '100%'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
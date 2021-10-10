import React from 'react';

const IconAndText = ({ text }) => {
    const image = require('../../public/book-open.png');

    return (
        <div style={style}>
            <img src={image}/> <span> {text} </span> 
        </div> 
    );
}

const style = {
    'display': 'grid',
    'grid-template-columns': '1fr 1fr',
    'vertical-align': 'middle',
    'justify-items': 'center'
};

export default IconAndText;
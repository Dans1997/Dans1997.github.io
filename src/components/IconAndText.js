import React from 'react';
import '../css/iconandtext.css';

export default ({ text, src }) => (
    <div className='parent'>
        <img src={src} alt='?'/> <span> {text} </span> 
    </div> 
)
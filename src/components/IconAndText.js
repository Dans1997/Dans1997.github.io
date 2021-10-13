import React from 'react';
import '../css/iconandtext.css';

export default ({ text, src, onClick }) => (
    <button className='parent' onClick={onClick}>
        <img src={src} alt=''/> <span> {text} </span> 
    </button> 
)

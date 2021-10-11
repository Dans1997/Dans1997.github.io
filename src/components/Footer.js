import React from 'react';
import IconAndText from './IconAndText'
import '../css/footer.css';

export default () => (
    <footer>
        <IconAndText text='Home' src={require('../../public/home-icon.png')}/>
        <IconAndText text='Libraries' src={require('../../public/closed-book-icon.png')}/>
        <IconAndText text='Profile' src={require('../../public/user-icon.png')}/>
    </footer>
);
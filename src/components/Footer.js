import React from 'react';
import IconAndText from './IconAndText'
import '../css/footer.css';

export default () => (
    <footer>
        <IconAndText text='Home' src={require('../images/home-icon.png').default}/>
        <IconAndText text='Libraries' src={require('../images/closed-book-icon.png').default}/>
        <IconAndText text='Profile' src={require('../images/user-icon.png').default}/>
    </footer>
);
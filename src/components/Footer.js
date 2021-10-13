import React from 'react';
import { useHistory } from 'react-router-dom';
import IconAndText from './IconAndText'
import '../css/footer.css';

export default () => {
    const history = useHistory();

    function onClick(e)
    {
        e.preventDefault();
        history.push('./home');
    }

    return (
        <footer>
            <IconAndText text='Home' src={require('../images/home-icon.png').default} onClick={onClick}/>
            <IconAndText text='Libraries' src={require('../images/closed-book-icon.png').default}/>
            <IconAndText text='Profile' src={require('../images/user-icon.png').default}/>
        </footer>
    )
};
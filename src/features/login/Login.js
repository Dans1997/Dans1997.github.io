import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { login, selectUsername, selectPassword } from './loginSlice';
import '../../css/login.css';

export default () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [usernameState, setUsernameState] = useState(useSelector(selectUsername));
    const [passwordState, setPasswordState] = useState(useSelector(selectPassword));

    function submitLogin()
    {
        dispatch(login({ username: usernameState, password: passwordState }))
        history.push("/home");
    }

    return (
        <div className='container'>
            <div className='bg'/>
            <div> <h1> <span> Welcome! </span></h1></div>
            <FormInput description='Username' placeholder='Username' type='text' onChange={e => setUsernameState(e.target.value)}/>
            <FormInput description='Password' placeholder='Password' type='password' onChange={e => setPasswordState(e.target.value)}/>
            <button className='button' aria-label='Login' onClick={submitLogin}> Login </button>
        </div>
    );
};

const FormInput = props => (
    <div className='row'>
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
    </div>  
);
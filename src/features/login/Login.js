import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { login, selectUsername, selectPassword } from './loginSlice';

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
        <div>
            <h1> Welcome! </h1>
            <h3> How can we call you? </h3>
            <input placeholder="Username" type="text" value={usernameState} onChange={e => setUsernameState(e.target.value)} /> <br/> <br/> 
            <input placeholder="Password" type="password" value={passwordState} onChange={e => setPasswordState(e.target.value)} /> <br/> <br/> 
            <button className="button" aria-label="Login" onClick={submitLogin}> Login </button>
        </div>
    );
};

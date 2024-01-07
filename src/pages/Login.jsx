// @flow
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem('authToken', true);
        navigate('/');
    }

    return (
        <>
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="password" />

            <button type='button' onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Login

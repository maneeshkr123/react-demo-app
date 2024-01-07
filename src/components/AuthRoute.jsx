// @flow
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { checkLogin } from '../controllers/AuthController';

export function AuthRoute({ children }) {
    return !checkLogin() ? children : <Navigate to="/" replace />
};
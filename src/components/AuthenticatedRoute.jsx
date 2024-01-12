// @flow
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { checkLogin } from '../controllers/AuthController';
import Header from './layout/Header';

export function AuthenticatedRoute({ children }) {
    return checkLogin() ?
        (
            <>
                <Header>{children}</Header>
            </>
        )
        :
        <Navigate to="/login" replace />
};
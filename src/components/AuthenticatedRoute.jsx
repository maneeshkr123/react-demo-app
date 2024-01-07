// @flow
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { checkLogin } from '../controllers/AuthController';
import Header from './layout/Header';
import Footer from './layout/Footer';

export function AuthenticatedRoute({ children }) {
    return checkLogin() ?
        (
            <>
                <Header />
                {children}
                <Footer />
            </>
        )
        :
        <Navigate to="/login" replace />
};
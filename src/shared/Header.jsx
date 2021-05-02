import { hot } from 'react-hot-loader/root';
import * as React from 'react';

export function HeaderComponent() {
    return (
        <header>
            <h1>ReactRedux kabzda kak prosto 123</h1>
        </header>
    );
}

export const Header = hot(HeaderComponent);
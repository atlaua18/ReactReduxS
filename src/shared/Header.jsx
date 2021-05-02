import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from "./header.less";

export function HeaderComponent() {
    return (
        <header>
            <h1 className={styles.example}>ReactRedux kabzda kak prosto 123</h1>
        </header>
    );
}

export const Header = hot(HeaderComponent);
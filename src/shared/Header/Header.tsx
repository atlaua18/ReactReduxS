import React from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import { SortBlock } from "./SortBlock/SortBlock";
import { ThreadTitle } from "./ThreadTitle/ThreadTitle";

export function Header() {
    // 1) const { Consumer } = tokenContext;
    // 2) const token = useContext(tokenContext);
    
    return (
        <header className={styles.header}>
            <SearchBlock />
            {/* <SearchBlock token={token}/> это для  2)*/}
            {/* <Consumer>
                {(token) => <SearchBlock token={token}/>}
            </Consumer> 
            это для 1)*/}
            <ThreadTitle />
            <SortBlock />
        </header>
    );
}
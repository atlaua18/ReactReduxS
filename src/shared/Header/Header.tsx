import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { saveTokenThunk } from "../../store/token/actionToken";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import { SortBlock } from "./SortBlock/SortBlock";
import { ThreadTitle } from "./ThreadTitle/ThreadTitle";

export function Header() {
    // 1) const { Consumer } = tokenContext;
    // 2) const token = useContext(tokenContext);

    const dispatch = useDispatch();
    console.log(dispatch(saveTokenThunk()));
    
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
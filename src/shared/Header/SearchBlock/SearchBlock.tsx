import React from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock/UserBlock";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

export function SearchBlock() {

    // const [data] = useUserData();
    const { iconImg, name} = useContext(userContext);

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={iconImg} username={name}/>
        </div>
    );
}
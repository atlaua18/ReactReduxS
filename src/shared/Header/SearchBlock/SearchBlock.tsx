import React from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock/UserBlock";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { useUserData } from "../../../hooks/useUserData";

export function SearchBlock() {

    const { data, loading } = useUserData();
    // const { iconImg, name } = useContext(userContext);

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
        </div>
    );
}
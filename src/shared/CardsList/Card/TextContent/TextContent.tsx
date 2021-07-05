import React, { useContext } from "react";
import { postsContext } from "../../../context/postsContext";
import { IconAnon } from "../../../icons/IconAnon";
import styles from "./textcontent.css";
import { Title } from "./Title/Title";

interface ITextContentProps {
    avatar?: string;
    username?: string;
    title?:string;
    postText?: string;
}

export function TextContent({ avatar, username, title, postText }: ITextContentProps) {
    
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    {avatar ? (
                        <img
                            className={styles.avatar}
                            src={avatar}
                            alt="avatar"
                        />
                    ) : (
                        <img className={styles.avatar} 
                        src={"https://cdn.dribbble.com/users/2837665/screenshots/15955560/media/8387ceb42f22d6489327eb9ff1e0b4ef.png?compress=1&resize=1600x1200"}
                        alt="avatar"/>
                    )}
                    <a href="#user-url" className={styles.username}>
                        {username || "Анонимно"}
                    </a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishLabel}>опубликовано </span>4
                    часа назад
                </span>
            </div>
            <Title title={title} postText={postText}/>
        </div>
    );
}

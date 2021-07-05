import React from "react";
import { useState } from "react";
import { Post } from "../../../../Post/Post";
import styles from "./title.css";

interface ITitleProps {
    title?: string;
    postText?: string;
}

export function Title({title, postText}: ITitleProps) {
    const [isModalOpened, setIsModalOpened] = useState(false);
    
    return (
        <h2 className={styles.title}>
            <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(true) }}>
                {title || "Заголовок отсутствует"}
            </a>

            {isModalOpened && (
                <Post title={title} postText={postText}
                onClose={() => { setIsModalOpened(false) }} 
                />
            )}
        </h2>
    );
}

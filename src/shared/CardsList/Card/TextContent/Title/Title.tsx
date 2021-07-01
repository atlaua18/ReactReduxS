import React from "react";
import { useState } from "react";
import { Post } from "../../../../Post/Post";
import styles from "./title.css";

export function Title() {
    const [isModalOpened, setIsModalOpened] = useState(false);
    
    return (
        <h2 className={styles.title}>
            <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(true) }}>
                Следует отметить, что новая модель организационной деятельность
                Следует отметить, что новая модель организационной деятельность
            </a>

            {isModalOpened && (
                <Post
                onClose={() => { setIsModalOpened(false) }} 
                />
            )}
        </h2>
    );
}

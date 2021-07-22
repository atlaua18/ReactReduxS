import React, { useContext } from "react";
import { IPostsData } from "../../../store/posts/actionsPosts";
// import { IPostsContext, postsContext } from "../../context/postsContext";
import styles from "./card.css";
import { Controls } from "./Controls/Controls";
import { Menu } from "./Menu/Menu";
import { Preview } from "./Preview/Preview";
import { TextContent } from "./TextContent/TextContent";

export function Card({ img, author, title, text }: IPostsData) {
    // debugger
    // const [{ img, author, title }] = useContext(postsContext);
    
    return (
        <li className={styles.card}>
            <TextContent username={author} title={title} postText={text}/>
            <Preview previewImg={img}/>
            <Menu />
            <Controls />
        </li>
    );
}

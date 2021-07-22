import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { usePostsData } from "../../hooks/usePostsData";
import { IPostsData } from "../../store/posts/actionsPosts";
import { RootState } from "../../store/reducer";
import { generateRandomString } from "../../utils/react/generateRandomIndex";
// import { IPostsContext, postsContext } from "../context/postsContext";
import { Card } from "./Card/Card";
import styles from "./cardslist.css"

export function CardsList() {
    // const data = useContext(postsContext);
    // const data = useSelector<RootState, any>(state => state.post.data);
    // debugger
    const { data, loading } = usePostsData();
    const cards = data.map(el => {
        return (<Card key={generateRandomString()} img={el.img} author={el.author} title={el.title} text={el.text}></Card>)
    })
    return (
        <ul className={styles.cardsList}>
            <Card />
            {cards}
        </ul>
    );
}
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
// import { usePostsData } from "../../hooks/usePostsData";
// import { IPostsData } from "../../store/posts/actionsPosts";
import { RootState } from "../../store/reducer";
import { generateRandomString } from "../../utils/react/generateRandomIndex";
// import { IPostsContext, postsContext } from "../context/postsContext";
import { Card } from "./Card/Card";
import styles from "./cardslist.css"

export function CardsList() {
    const token = useSelector<RootState>(state => state.token);
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');
    const [nextAfter, setNextAfter] = useState('');

    const bottomOfList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setErrorLoading('');

            try {
                const { data: { data: { after, children }} } = await axios
                .get("https://oauth.reddit.com/best", {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                        Authorization: `bearer ${token}`,
                    },
                    params: {
                        limit: 10,
                        after: nextAfter,
                    }
                });

                setNextAfter(after);
                setPosts(prevChildren => prevChildren.concat(...children));
            } catch (error) {
                setErrorLoading(String(error));
            }

            setLoading(false);
        }

        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                load();
            }
        }, {
            rootMargin: '10px',
        });

        if(bottomOfList.current) {
            observer.observe(bottomOfList.current);
        };

        return () => {
            if(bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }
    }, [bottomOfList.current, nextAfter, token])

    return (
            <ul className={styles.cardsList}>
                {posts.length === 0 && !loading && !errorLoading && (
                    <div className={styles.textDiv}>Нет ни одного поста</div>
                )}

                {posts.map(post => (
                    <Card 
                    key={generateRandomString()}
                    title={post.data.title}
                    img={post.data.thumbnail}
                    author={post.data.author}/>
                ))}

                <div ref={bottomOfList} />

                {loading && (<div className={styles.textDiv}>Загрузка...</div>)}

                {errorLoading && (
                    <div role="alert" className={styles.textDiv}>
                        {errorLoading}
                    </div>
                )}
            </ul>
        );
    
    // const { data, loading } = usePostsData();
    // const cards = data.map(el => {
    //     return (<Card key={generateRandomString()} img={el.img} author={el.author} title={el.title} text={el.text}></Card>)
    // })
    // return (
    //     <ul className={styles.cardsList}>
    //         <Card />
    //         {cards}
    //         {loading && (<div style={{ textAlign: "center"}}>Загрузка...</div>)}
    //     </ul>
    // );
}
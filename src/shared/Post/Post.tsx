import React, { useRef, useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CommentFormContainer } from "../CommentFormContainer/CommentFormContainer";
import styles from "./post.css";

interface IPost {
    onClose?: () => void;
    title?: string;
    postText?: string;
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if(event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.();
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click',handleClick)
        }
    }, []);

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2>
                {props.title}
            </h2>

            <div className={styles.content}>
                <p>
                    {props.postText}
                </p>
                <p>
                    Есть над чем задуматься: тщательные исследования конкурентов
                    представляют собой не что иное, как квинтэссенцию победы
                    маркетинга над разумом и должны быть ассоциативно
                    распределены по отраслям. Прежде всего, начало повседневной
                    работы по формированию позиции однозначно фиксирует
                    необходимость кластеризации усилий. Но сторонники
                    тоталитаризма в науке и по сей день остаются уделом
                    либералов, которые жаждут быть превращены в посмешище, хотя
                    само их существование приносит несомненную пользу обществу.
                </p>
                <p>
                    Есть над чем задуматься: тщательные исследования конкурентов
                    представляют собой не что иное, как квинтэссенцию победы
                    маркетинга над разумом и должны быть ассоциативно
                    распределены по отраслям. Прежде всего, начало повседневной
                    работы по формированию позиции однозначно фиксирует
                    необходимость кластеризации усилий. Но сторонники
                    тоталитаризма в науке и по сей день остаются уделом
                    либералов, которые жаждут быть превращены в посмешище, хотя
                    само их существование приносит несомненную пользу обществу.
                </p>
            </div>

            <CommentFormContainer />
        </div>
    ), node);
}

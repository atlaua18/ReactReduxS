import React from "react";
import ReactDOM from "react-dom";
import styles from "./post.css";

export function Post() {
    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal}>
            <h2>
                Следует отметить, что новая модель организационной деятельность
                поможет
            </h2>

            <div className={styles.content}>
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
        </div>
    ), node);
}

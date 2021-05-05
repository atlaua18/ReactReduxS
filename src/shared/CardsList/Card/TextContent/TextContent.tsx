import React from "react";
import styles from "./textcontent.css";

export class TextContent extends React.Component {
    public render() {
        return (
            <div className={styles.textContent}>
                <div className={styles.metaData}>
                    <div className={styles.userLink}>
                        <img
                            className={styles.avatar}
                            src="https://cdn.dribbble.com/users/1355613/screenshots/15594500/media/aea41a7cf22d09be0bb41afa85be2f5e.jpg"
                            alt="avatar"
                        ></img>
                        <a href="#user-url" className={styles.username}>
                            Дмитрий Гришин
                        </a>
                    </div>
                    <span className={styles.createdAt}>
                        <span className={styles.publishLabel}>опубликовано </span>
                        4 часа назад
                    </span>
                </div>
                <h2 className={styles.title}>
                    <a href="#post-url" className={styles.postLink}>
                        Следует отметить, что новая модель организационной
                        деятельность Следует отметить, что новая модель
                        организационной деятельность
                    </a>
                </h2>
            </div>
        );
    };
}
import React from "react";
import styles from "./preview.css";

export class Preview extends React.Component {
    public render() {
        return (
            <div className={styles.preview}>
                <img
                    className={styles.previewImg}
                    src="https://cdn.dribbble.com/users/230091/screenshots/15592629/media/2705cbda371b4ebd269a53bac8626e0c.png?compress=1&resize=800x600"
                    alt=""
                />
            </div>
        );
    };
}
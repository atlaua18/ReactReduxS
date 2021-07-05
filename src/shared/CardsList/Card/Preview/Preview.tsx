import React from "react";
import styles from "./preview.css";

interface IPreviewProps {
    previewImg?: string;
}

export function Preview({previewImg}: IPreviewProps) {
    return (
        <div className={styles.preview}>
            {previewImg !== "self" && previewImg !== "default" ? (
                <img
                    className={styles.previewImg}
                    src={previewImg}
                    alt="preview"
                />
            ) : (
                <img
                    className={styles.previewImg}
                    src="https://cdn.dribbble.com/users/230091/screenshots/15592629/media/2705cbda371b4ebd269a53bac8626e0c.png?compress=1&resize=800x600"
                    alt=""
                />
            )}
        </div>
    );
}

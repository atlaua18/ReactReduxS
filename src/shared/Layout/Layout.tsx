import styles from "./layout.css";
import React from "react";

interface ILayoutProps {
    children?: React.ReactNode;
}

export function Layout({children}: ILayoutProps) {
    return (
       <div className={styles.layout}>
           {children}
       </div>
    );
}
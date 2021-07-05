import React, { ChangeEvent, FormEvent, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { commentContext } from "../context/commentContex";
import styles from "./commentForm.css"

export function CommentForm() {
    // const ref = useRef<HTMLTextAreaElement>(null); // этто было для неуправляемой компоненты
    // const [value, setValue] = useState('');
    const {value, onChange } = useContext(commentContext)

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onChange(event.target.value);
    }
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(value);
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} value={value} onChange={handleChange}/>
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}
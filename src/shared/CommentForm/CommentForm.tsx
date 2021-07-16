import React, { ChangeEvent, FormEvent } from "react";
import styles from "./commentForm.css"

type Props = {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (event: FormEvent) => void;
}
export function CommentForm({ value, onChange, onSubmit }: Props) {
    
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea className={styles.input} value={value} onChange={onChange}/>
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}

// до создания контейнера тут было это:
// const ref = useRef<HTMLTextAreaElement>(null); // это было для неуправляемой компоненты
    // const [value, setValue] = useState('');
    // const { onChange } = useContext(commentContext)

    // привязка к редаксу!!!
    // const store = useStore<RootState>();
    // const value = store.getState().commentText;
    // const value = useSelector<RootState, string>(state => state.commentText); // вместо двух строчек выше
    // const dispatch = useDispatch();

    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    //     // onChange(event.target.value);
    //     dispatch(updateComment(event.target.value));
    // }
    
    // function handleSubmit(event: FormEvent) {
    //     event.preventDefault();
    //     console.log(value);
    // }
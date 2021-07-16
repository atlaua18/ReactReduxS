import React, { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateComment } from "../../store/reducer";
import { CommentForm } from "../CommentForm/CommentForm";

export function CommentFormContainer() {
    // const ref = useRef<HTMLTextAreaElement>(null); // это было для неуправляемой компоненты
    // const [value, setValue] = useState('');
    // const { onChange } = useContext(commentContext)

    // привязка к редаксу!!!
    // const store = useStore<RootState>();
    // const value = store.getState().commentText;
    const value = useSelector<RootState, string>(state => state.commentText); // вместо двух строчек выше
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        // onChange(event.target.value);
        dispatch(updateComment(event.target.value));
    }
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(value);
    }
    return (
        <CommentForm 
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
    );
}
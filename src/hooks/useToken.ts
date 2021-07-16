import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setToken } from "../store";

export function useToken() {

    // const [token, setToken] = useState('');
    const token = useSelector<RootState, string>(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        // debugger
        if (window.__token__) {
            // setToken(window.__token__);
            dispatch(setToken(window.__token__));
        }
    }, []);

    return token
}

//  для извлечения токена

// const token = useSelector<RootState, string>(state => state.token);
    // const dispatch = useDispatch();
    // dispatch(useToken());
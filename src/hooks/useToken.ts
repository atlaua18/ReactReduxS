import { useState } from "react";
import { useEffect } from "react";

export function useToken() {

    const [token, setToken] = useState('');

    useEffect(() => {
        // debugger
        if (window.__token__) {
            setToken(window.__token__);
        }
    }, []);

    return [token]
}

//  для извлечения токена

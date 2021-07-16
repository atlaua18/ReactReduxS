import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { tokenContext } from "../shared/context/tokenContext";
import { RootState } from "../store";
import { useToken } from "./useToken";

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
    // const token = useContext(tokenContext);
    const token = useToken();
    useEffect( () => {
        // debugger
        if (token !== "") {
            axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: { Authorization: `bearer ${token}` }
        })
        .then((resp) => {
            // debugger;
            const userData = resp.data;
            setData({name: userData.name, iconImg: userData.snoovatar_img});
        })
        .catch(console.log);
        }
    }, [token]);

    return [data]
}

import axios from "axios";
import { useEffect } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, setToken } from "../reducer";

export const saveTokenThunk = ():  ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    useEffect(() => {
        // debugger
        if (window.__token__) {
            dispatch(setToken(window.__token__));
            // console.log(window.__token__)
        }
    }, []);
    // axios.post(
    //     "https://www.reddit.com/api/v1/access_token",
    //     `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
    //     {
    //         auth: { username: process.env.CLIENT_ID ?? "", password: "oT_f4f8o9lxUYggG5Wq4Ws9dg73UBQ" },
    //         headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    //     }
    // )
    // .then(({ data }) => {
    //     dispatch(setToken(data['access_token']));
    // })
    // .catch(console.log);
}
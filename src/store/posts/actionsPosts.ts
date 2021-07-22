import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

//request
export const POST_REQUEST = "POST_REQUEST";
export type PostRequestAction = {
    type: typeof POST_REQUEST;
};
export const postRequest: ActionCreator<PostRequestAction> = () => ({
    type: POST_REQUEST,
});

//request success
export interface IPostsData {
    title?: string;
    text?: string;
    author?: string;
    img?: string;
}
export const POST_REQUEST_SUCCESS = "POST_REQUEST_SUCCESS";
export type PostRequestSuccessAction = {
    type: typeof POST_REQUEST_SUCCESS;
    data: IPostsData[];
};
export const postRequestSuccess: ActionCreator<PostRequestSuccessAction> = (
    data: IPostsData[]
) => ({
    type: POST_REQUEST_SUCCESS,
    data,
});

//request error
export const POST_REQUEST_ERROR = "POST_REQUEST_ERROR";
export type PostRequestErrorAction = {
    type: typeof POST_REQUEST_ERROR;
    error: string;
};
export const postRequestError: ActionCreator<PostRequestErrorAction> = (
    error: string
) => ({
    type: POST_REQUEST_ERROR,
    error,
});

// thunk
export const postRequestAsync =
    (): ThunkAction<void, RootState, unknown, Action<string>> =>
    (dispatch, getState) => {
        dispatch(postRequest());
        if (!getState().token) return;

        if (getState().token !== "") {
            axios
                .get("https://oauth.reddit.com/best", {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                        Authorization: `bearer ${getState().token}`,
                    },
                })
                .then((response) => {
                    const postsData = response.data.data.children;
                    dispatch(
                        postRequestSuccess(
                            postsData.map((el: any) => {
                                return {
                                    title: el.data.title,
                                    text: el.data.selftext,
                                    author: el.data.author,
                                    img: el.data.thumbnail,
                                };
                            })
                        )
                    );
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(postRequestError(String(error)));
                });
        }
    };

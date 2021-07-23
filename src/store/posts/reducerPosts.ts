import { Reducer } from "react";
import {
    IPostsData,
    PostRequestAction,
    PostRequestErrorAction,
    PostRequestSuccessAction,
    POST_REQUEST,
    POST_REQUEST_ERROR,
    POST_REQUEST_SUCCESS,
} from "./actionsPosts";

export type PostState = {
    loading: boolean;
    error: string;
    data: IPostsData[];
};

type PostActions =
    | PostRequestAction
    | PostRequestSuccessAction
    | PostRequestErrorAction;

export const postReducer: Reducer<PostState, PostActions> = (state, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case POST_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        default:
            return state;
    }
};

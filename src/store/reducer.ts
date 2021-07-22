import { Reducer } from "redux";
import { ActionCreator } from "redux";
import {
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction,
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
} from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import {
    PostRequestAction,
    PostRequestErrorAction,
    PostRequestSuccessAction,
    POST_REQUEST,
    POST_REQUEST_ERROR,
    POST_REQUEST_SUCCESS,
} from "./posts/actionsPosts";
import { postReducer, PostState } from "./posts/reducerPosts";

export type RootState = {
    commentText: string;
    token: string;
    me: MeState;
    post: PostState;
};

const initialState: RootState = {
    commentText: "Привет, SkillBox",
    token: "",
    me: {
        loading: false,
        error: "",
        data: {},
    },
    post: {
        loading: false,
        error: "",
        data: [],
    },
};

const UPDATE_COMMENT = "UPDATE_COMMENT";
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
};

export const updateComment: ActionCreator<UpdateCommentAction> = (
    text: string
) => ({
    type: UPDATE_COMMENT,
    text,
});

const SET_TOKEN = "SET_TOKEN";
type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
};
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token,
});

type MyAction =
    | UpdateCommentAction
    | SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction
    | PostRequestAction
    | PostRequestSuccessAction
    | PostRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            };
        case POST_REQUEST:
        case POST_REQUEST_SUCCESS:
        case POST_REQUEST_ERROR:
            return {
                ...state,
                post: postReducer(state.post, action),
            }            
        default:
            return state;
    }
};

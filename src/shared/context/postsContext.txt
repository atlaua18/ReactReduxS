import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

export interface IPostsContext {
    title?: string;
    text?: string;
    author?: string;
    img?: string;
}

export const postsContext = React.createContext<IPostsContext[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode}) {
    const data = usePostsData();
    return (
        <postsContext.Provider value={data}>
            {children}
        </postsContext.Provider>
    );
}
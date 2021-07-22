import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPostsData, postRequestAsync } from "../store/posts/actionsPosts";
import { RootState } from "../store/reducer";
// import { tokenContext } from "../shared/context/tokenContext";
// import { useToken } from "./useToken";

// class PostData {
//     public title: string;
//     public text: string;
//     public author: string;
//     public img: string;
//     constructor(
//         inputTitle: string,
//         inputText: string,
//         inputAuthor: string,
//         inputImg?: string
//     ) {
//         this.title = inputTitle;
//         this.text = inputText;
//         this.author = inputAuthor;
//         if (inputImg) {
//             this.img = inputImg;
//         } else {
//             this.img = "../../";
//         }
//     }
// }

// interface PostData {
//     title: string;
//     text: string;
//     author: string;
//     img?: string;
// }

// interface IPostsData {
//     title?: string;
//     text?: string;
//     author?: string;
//     img?: string;
// }

export function usePostsData(): { data:IPostsData[], loading:boolean } {
    const data = useSelector<RootState, IPostsData[]>(state => state.post.data);
    const loading = useSelector<RootState, boolean>(state => state.post.loading);
    const token = useSelector<RootState, string>((state) => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!token) return;
        dispatch(postRequestAsync());
    }, [token]);

    return {
        data,
        loading,
    };
}

// до thunk postRequestAsync
// const [data, setData] = useState<IPostsData[]>([]);
    // const token = useContext(tokenContext);
    // const token = useToken();
    // const token = useSelector<RootState>(state => state.token);
    // var array: IPostsData[] = []; //new Array<IPostsData>();
    // useEffect(() => {
    //     if(!token) return;
    //     if (token !== "") {
    //         axios
    //             .get("https://oauth.reddit.com/best", {
    //                 headers: {
    //                     "Content-type": "application/x-www-form-urlencoded",
    //                     Authorization: `bearer ${token}`,
    //                 },
    //             })
    //             .then((response) => {
    //                 const postsData = response.data.data.children;
    //                 // console.log(postsData);
    //                 postsData.forEach((element: any) => {
    //                     array.push({
    //                         title: element.data.title,
    //                         text: element.data.selftext,
    //                         author: element.data.author,
    //                         img: element.data.thumbnail,
    //                     });
    //                 });

    //                 setData(array);
                        
    //                 // response.data.data.children.forEach((element: any) => {
    //                 //     array.push(
    //                 //         {
    //                 //             title: element.data.title, text: element.data.selftext, author: element.data.author
    //                 //         }
    //                 //     );
    //                 // });
    //             })
    //             .catch((ex) => console.log(ex));
    //     }

// 'Access-Control-Allow-Origin': 'false'

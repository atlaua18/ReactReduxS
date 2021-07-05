import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

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

interface IPostsData {
    title?: string;
    text?: string;
    author?: string;
    img?: string;
}

export function usePostsData() {
    //: PostData[]
    const [data, setData] = useState<IPostsData[]>([]);
    const token = useContext(tokenContext);
    var array: IPostsData[] = []; //new Array<IPostsData>();
    useEffect(() => {
        if (token !== "") {
            axios
                .get("https://oauth.reddit.com/best", {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                        Authorization: `bearer ${token}`,
                    },
                })
                .then((response) => {
                    const postsData = response.data.data.children;
                    console.log(postsData);
                    postsData.forEach((element: any) => {
                        array.push({
                            title: element.data.title,
                            text: element.data.selftext,
                            author: element.data.author,
                            img: element.data.thumbnail,
                        });
                    });

                    setData(array);
                        
                    // response.data.data.children.forEach((element: any) => {
                    //     array.push(
                    //         {
                    //             title: element.data.title, text: element.data.selftext, author: element.data.author
                    //         }
                    //     );
                    // });
                })
                .catch((ex) => console.log(ex));
        }
    }, [token]);

    // console.log(data);
    return data;
}

// 'Access-Control-Allow-Origin': 'false'

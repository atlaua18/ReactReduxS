import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList/CardsList";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { BrowserRouter } from "react-router-dom";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/* <UserContextProvider> */}
                <Layout>
                    <Header />
                    <Content>
                        {/* <PostsContextProvider> */}
                        <CardsList />
                        {/* </PostsContextProvider> */}
                    </Content>
                </Layout>
                {/* </UserContextProvider> */}
            </BrowserRouter>
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);

//#region  для демонстрации работы middleware
// const ping: Middleware = (store) => (next) => (action) => {
//     console.log('ping');
//     next(action);
// }
// const pong: Middleware = (store) => (next) => (action) => {
//     console.log('pong');
//     next(action);
// }
//#endregion

//#region было до redux/rootReducer
// const [commentValue, setCommentValue] = useState("");

// const [token] = useToken();

// const CommentProvider = commentContext.Provider;

// return (
//     <Provider store={store}>
//     {/* <CommentProvider
//         value={{ value: commentValue, onChange: setCommentValue }}
//     > */}
//         {/* <tokenContext.Provider value={token}> */}
//             <UserContextProvider>
//                 <Layout>
//                     <Header />
//                     <Content>
//                         <PostsContextProvider>
//                             <CardsList />
//                         </PostsContextProvider>
//                     </Content>
//                 </Layout>
//             </UserContextProvider>
//         {/* </tokenContext.Provider> */}
//     {/* </CommentProvider> */}
//     </Provider>
// );
// }
//#endregion

// const LIST = [
//     { value: "some" },
//     { value: "other some" },
//     { value: "some" },
// ].map((item) => ({ ...item, id: generateRandomString() }));
//( (item) => ({ ...item, id: generateRandomString() })); - это 100% работает
// assignId вместо ( (item) => ({ ...item, id: generateRandomString() })); assignId - генерирует один и тот же id для всех value
// generateId вместо assignId / generateId генерирует один и тот же id для всех value (если generateId = <O extends object>(obj: O) => assignId(obj));
// generateId ошибка из-за типов, если generateId = <O extends object>(obj: O) => assoc("id", generateRandomString());

// const [list, setList] = React.useState(LIST);

// const handleItemClick = (id: string) => {
//     // console.log(id);
//     setList(list.filter((item) => item.id !== id));
// };

// const handleAdd = () => {
//     setList(list.concat(generateId({ value: generateRandomString() })));
// };

// {
    /* <button onClick={handleAdd}>Add element</button> */
// }
// {
    /* <MyList
                    list={LIST} onClick={console.log}
                /> */
// }
// {
    /* <MyList
                    list={list.map(
                        merge({
                            onClick: handleItemClick 
                        })
                    )}
                /> */
// }
// <GenericList list={list.map(
//         merge({
//             onClick: handleItemClick
//         })
//     )}/>

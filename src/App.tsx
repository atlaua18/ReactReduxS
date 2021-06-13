import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList/CardsList";
import {
    assignId,
    generateId,
    generateRandomString,
} from "./utils/react/generateRandomIndex";
import { GenericList } from "./shared/GenericList/GenericList";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown/Dropdown";

const LIST = [
    { value: "some" },
    { value: "other some" },
    { value: "some" },
].map(generateId);
//( (item) => ({ ...item, id: generateRandomString() })); - это 100% работает
// assignId вместо ( (item) => ({ ...item, id: generateRandomString() })); assignId - генерирует один и тот же id для всех value
// generateId вместо assignId / generateId генерирует один и тот же id для всех value (если generateId = <O extends object>(obj: O) => assignId(obj));
// generateId ошибка из-за типов, если generateId = <O extends object>(obj: O) => assoc("id", generateRandomString());

function AppComponent() {
    const [list, setList] = React.useState(LIST);

    // const handleItemClick = (id: string) => {
    //     // console.log(id);
    //     setList(list.filter((item) => item.id !== id));
    // };

    // const handleAdd = () => {
    //     setList(list.concat(generateId({ value: generateRandomString() })));
    // };

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <br />
                <Dropdown button={<button>Test</button>}>
                <CardsList />
                </Dropdown>
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);

{
    /* <button onClick={handleAdd}>Add element</button> */
}
{
    /* <MyList
                    list={LIST} onClick={console.log}
                /> */
}
{
    /* <MyList
                    list={list.map(
                        merge({
                            onClick: handleItemClick 
                        })
                    )}
                /> */
}
// <GenericList list={list.map(
//         merge({
//             onClick: handleItemClick
//         })
//     )}/>

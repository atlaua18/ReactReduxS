import React from "react";

// interface IItem {
//     value: string;
//     id: string;
//     onClick: (id: string) => void;
// }

// interface IMyListProps{
//     list: IItem[];
//     // onClick: (id: string) => void;
// }

// export function MyList({ list }: IMyListProps) {
//     return (
//         <ul>
//             {list.map((item) => (
//                 <li onClick={ () => item.onClick(item.id)} key={item.id}>{item.value}</li>
//             ))}
//         </ul>
//     );
// };

interface IGenericListProps {
    list: IItem[];
}

interface IItem {
    value: string;
    id: string;
    onClick: (id: string) => void;
    className?: string;
    As?: "a" | "li" | "button" | "div";
    href?: string;
}

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {list.map(({ As = "div", value, onClick, className, id, href }) => (
                <As className={className} onClick={() => onClick(id)} key={id} href={href}>
                    {value}
                </As>
            ))}
        </>
    );
}

import React from "react";
import { Dropdown } from "../../Dropdown/Dropdown";
import styles from "./card.css";
import { CardDropdown } from "./CardDropdown/CardDropdown";
import { Controls } from "./Controls/Controls";
import { Menu } from "./Menu/Menu";
import { Preview } from "./Preview/Preview";
import { TextContent } from "./TextContent/TextContent";

export function Card() {
    return (
        <li className={styles.card}>
            <TextContent />
            <Preview />
            {/* <Menu /> */}
            <div className={styles.dropdownContainer}>
            <Dropdown button={<Menu />}>
                <CardDropdown />
            </Dropdown>
            </div>
            {/* <Menu>
                <Dropdown button={<button></button>}>
                <CardDropdown />
                </Dropdown>
            </Menu> */}
            <Controls />
        </li>
    );
}

import React from "react";
import { Dropdown } from "../../../Dropdown/Dropdown";
import { MenuIcon } from "../../../icons/MenuIcon";
import { EColors } from "../../../Text/Text";
import styles from "./menu.css";

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
            >
                <div className={styles.dropdown}>
                MenuItems
                <button className={styles.closeBtn}>
                <Text mobileSize={12} size={14} color={EColors.grey66}>
                    Закрыть
                </Text>
                </button>
                </div>
            </Dropdown>
        </div>
    );
}

import React from "react";
import { useState } from "react";
// import { Dropdown } from "../../../Dropdown/Dropdown";
import { DropdownPortal } from "../../../DropdownPortal/DropdownPortal";
import { MenuIcon } from "../../../icons/MenuIcon";
import { EColors, Text } from "../../../Text/Text";
import styles from "./menu.css";
import { MenuItemsList } from "./MenuItemList/MenuItemsList";

export function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id="dropdown_menu" className={styles.menu}>
            <button className={styles.menuButton} onClick = { () => setIsOpen(!isOpen)}>
                <MenuIcon />
            </button>
            {isOpen && (
            <DropdownPortal onClose={() => setIsOpen(false)}>
                <div className={styles.dropdown}>
                    <MenuItemsList postId="1234" />
                    <button className={styles.closeBtn}>
                        <Text mobileSize={12} size={14} color={EColors.grey66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
            </DropdownPortal>)}
        </div>
    );
}

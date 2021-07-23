import React from "react";
import { useState } from "react";
// import { Dropdown } from "../../../Dropdown/Dropdown";
import { DropdownPortal } from "../../../DropdownPortal/DropdownPortal";
import { MenuIcon } from "../../../icons/MenuIcon";
import { EColors, Text } from "../../../Text/Text";
import styles from "./menu.css";
import { MenuItemsList } from "./MenuItemList/MenuItemsList";

export function Menu() {
    

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.menu}>
            <div className={styles.menu}>
                <button
                    id="btn_menu"
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MenuIcon />
                </button>
                {isOpen && (
                    <DropdownPortal
                        onClose={() => setIsOpen(false)}
                        // button={
                        //     <button className={styles.menuButton}>
                        //         <MenuIcon />
                        //     </button>
                        // }
                    >
                        <div className={styles.dropdown}>
                            <button className={styles.menuButton}>
                                <MenuIcon />
                            </button>
                            <MenuItemsList postId="1234" />
                            <button className={styles.closeBtn}>
                                <Text
                                    mobileSize={12}
                                    size={14}
                                    color={EColors.grey66}
                                >
                                    Закрыть
                                </Text>
                            </button>
                        </div>
                    </DropdownPortal>
                )}
            </div>
        </div>
    );
}

// для DropDownPortal
// {
    /* <div id="dropdown_menu" className={styles.menu}>
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
</div> */
// }

// для обычного Dropdown
// {
    /* <div className={styles.menu}>
            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
            >
                <div className={styles.dropdown}>
                    <MenuItemsList postId="1234" />
                    <button className={styles.closeBtn}>
                        <Text mobileSize={12} size={14} color={EColors.grey66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
            </Dropdown>
        </div> */
// }

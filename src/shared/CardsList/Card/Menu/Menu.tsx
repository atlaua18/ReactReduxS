import React, { useRef } from "react";
import { useState } from "react";
// import { Dropdown } from "../../../Dropdown/Dropdown";
import { DropdownPortal } from "../../../DropdownPortal/DropdownPortal";
import { MenuIcon } from "../../../icons/MenuIcon";
import { EColors, Text } from "../../../Text/Text";
import styles from "./menu.css";
import { MenuItemsList } from "./MenuItemList/MenuItemsList";

export function Menu() {
    const ref = useRef<HTMLButtonElement>(null);
    // let btn = document.getElementById("btn_menu");
    // let coords = btn?.getBoundingClientRect();
    let coords = ref.current?.getBoundingClientRect();

    // coords?.left + "px";
    // coords?.top + "px";

    // btn?.addEventListener("click", () => {
    //     let x = Math.round(btn?.getBoundingClientRect().x);
    //     let y = btn?.getBoundingClientRect().y;
    //     console.log(x);
    //     console.log(y);
    // });

    const handleClick = () => {
        // debugger
        setIsOpen(!isOpen);
        console.log(coords?.left + " px " + coords?.top + " px");
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
            <div className={styles.menu}>
                <button
                    ref={ref}
                    className={styles.menuButton}
                    // onClick={() => setIsOpen(!isOpen)}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </button>
                {}
                {isOpen && (
                    <DropdownPortal
                        onClose={() => setIsOpen(false)}
                        left={coords?.left}
                        top={coords?.top}
                    >
                        <div className={styles.dropdown}>
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

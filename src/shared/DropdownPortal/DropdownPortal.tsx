import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "../Dropdown/dropdown.css";

interface IDropdownPortalProps {
    // button: React.ReactNode;
    children: React.ReactNode;
    onClose?: () => void;
}

export function DropdownPortal(props: IDropdownPortalProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (
                event.target instanceof Node &&
                !ref.current?.contains(event.target)
            ) {
                props.onClose?.();
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const node = document.querySelector(`#dropdown_menu`);
    if (!node) return null;

    return ReactDOM.createPortal(
        <div className={styles.container} ref={ref}>
            <div className={styles.listContainer}>
                <div className={styles.list}>{props.children}</div>
            </div>
        </div>,
        node
    );
}

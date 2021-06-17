import React from "react";
import styles from "./menuItemsList.css"
import { BlockIcon } from "../../../../icons/BlockIcon";
import { EColors, Text } from "../../../../Text/Text";
import { WarningIcon } from "../../../../icons/WarningIcon";
import { CommentsIcon } from "../../../../icons/CommentsIcon";
import { ShareIcon } from "../../../../icons/ShareIcon";
import { SaveIcon } from "../../../../icons/SaveIcon";

interface IMenuItemsListProps {
    postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
    return(
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem + " " + styles.hide}>
                <CommentsIcon />
                <Text size={12} color={EColors.grey99}>Комментарии</Text>
            </li>

            <div className={styles.divider + " " + styles.hide}/>

            <li className={styles.menuItem + " " + styles.hide}>
                <ShareIcon />
                <Text size={12} color={EColors.grey99}>Поделиться</Text>
            </li>

            <div className={styles.divider + " " + styles.hide}/>

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <BlockIcon />
                <Text size={12} color={EColors.grey99}>Скрыть</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItem + " " + styles.hide}>
                <SaveIcon />
                <Text size={12} color={EColors.grey99}>Сохранить</Text>
            </li>

            <div className={styles.divider + " " + styles.hide}/>

            <li className={styles.menuItem}>
                <WarningIcon />
                <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
            </li>
        </ul>
    );
}
import React from "react";
import classNames from "classnames";
import { CommentsIcon } from "../icons/CommentsIcon";

export enum EIcons {
    comments = "<CommentsIcon />"
}

interface IIconProps {
    name: EIcons;
}

export function Icon( { name }: IIconProps) {

    // const classes = classNames(
    //     name,
    // );

    return <>{name}</>
}
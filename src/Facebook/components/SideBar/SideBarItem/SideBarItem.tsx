import React from "react";
import classes from './SideBarItem.module.css'

type PropsType = {
    title: string
    src: string
}

export const SideBarItem: React.FC<PropsType> = ({src, title}) => {
    return (
        <div className={classes.SideBarElement}>
            <div className={classes.SideBarIconElement}>
                {src && <img src={src} alt={'Icon'}/>}
            </div>
            <span className={classes.SideBarTextElement}>
            {title}
            </span>
        </div>
    );
}
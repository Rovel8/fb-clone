import React from "react";
import classes from './BookmarksItem.module.css'

type PropsType = {
    title: string
    src: string
}

export const BookmarksItem: React.FC<PropsType> = ({src, title}) => {
    return (
        <div className={classes.BookmarksElement}>
            <div className={classes.BookmarksIconElement}>
                {src && <img src={src} alt={'Icon'}/>}
            </div>
            <span className={classes.BookmarksTextElement}>
            {title}
            </span>
        </div>
    );
}
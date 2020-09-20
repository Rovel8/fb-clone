import React from "react";
import classes from './Feed.module.css'
import {StoryReel} from "./StoryReel/StoryReel";
import {MainInput} from "./MainInput/MainInput";
import {Posts} from './Posts/Posts'


export const Feed: React.FC<{}> = () => {
    return (
        <div className={classes.Feed}>
            <StoryReel />
            <MainInput />
            <Posts />
        </div>
    );
}
import React from "react";
import classes from './StoryReelItem.module.css'

type PropsType = {
    image: string
    text: string
    profilePic: string
}

export const StoryReelItem: React.FC<PropsType> = ({image, text, profilePic}) => {
    return (
        <div className={classes.StoryReelItem}>
                <img src={image} alt={'StoryReelItem'} />
                <div className={classes.ProfilePic}>
                    <img width={'40'} height={'40'} src={profilePic} alt={'ProfilePic'}/>
                </div>
            <div className={classes.Text}>
                <span>
                    {text}
                </span>
            </div>
        </div>
    );
}
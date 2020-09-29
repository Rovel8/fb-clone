import React from "react";
import classes from './Activity.module.css'
import {ActivityItem} from "./ActivityItem/ActivityItem";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export const Activity: React.FC<{}> = () => {
    return (
        <div className={classes.Activity}>
            <button className={classes.Item}><ActivityItem color={"crimson"} Image={VideocamIcon} title={'Live Video'}/>
            </button>
            <button className={classes.Item}><ActivityItem color={"green"} Image={PhotoSizeSelectActualIcon}
                                                           title={'Photo/Video'}/></button>
            <button className={classes.Item}><ActivityItem color={"#f5bb41"} Image={InsertEmoticonIcon}
                                                           title={'Feeling/Activity'}/></button>

        </div>
    );
}
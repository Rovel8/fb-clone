import React from "react";
import classes from './HeaderCenter.module.css'
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

export const HeaderCenter: React.FC<{}> = () => {
    return <div className={classes.HeaderMiddleWrapper}>
        <div className={classes.HeaderMiddle}>
            <div className={classes.HeaderMiddleItem}>
                <HomeIcon style={{ fontSize: 30 }}/>
            </div>
            <div className={classes.HeaderMiddleItem}>

                <PeopleAltIcon style={{ fontSize: 30 }}/>
            </div>
            <div className={classes.HeaderMiddleItem}>
                <LiveTvIcon style={{ fontSize: 30 }}/>
            </div>
            <div className={classes.HeaderMiddleItem}>
                <GroupWorkIcon style={{ fontSize: 30 }}/>
            </div>
            <div className={classes.HeaderMiddleItem}>
                <SportsEsportsIcon style={{ fontSize: 30 }}/>
            </div>
        </div>
    </div>
}
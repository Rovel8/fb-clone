import React from "react";
import classes from './ActivityItem.module.css'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core/SvgIcon/SvgIcon";

type PropsType = {
    Image: OverridableComponent<SvgIconTypeMap>
    title: string
    color: string
}


export const ActivityItem: React.FC<PropsType> = ({Image, title, color}) => {

    const useStyles = makeStyles({
        root: {
            fontSize: "xx-large",
            color: color
        }
    });

    const localStyle = useStyles();

    return (
        <div className={classes.ActivityItem}>
            <div className={classes.ActivityItemImg}>
                {Image && <Image className={localStyle.root} />}
            </div>
            <div className={classes.ActivityItemTitle}>
                {title}
            </div>
        </div>
    );
}
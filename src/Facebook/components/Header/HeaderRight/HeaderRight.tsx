import React, {useState} from "react";
import classes from './HeaderRight.module.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TelegramIcon from "@material-ui/icons/Telegram";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {useTypedSelector} from "../../../../App";
import {DropDown} from "./DropDown/DropDown";
import defaultProfile from '../../../../assets/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'


export const HeaderRight: React.FC<{}> = () => {

    const picture = useTypedSelector(state => state.user.picture)
    const name = useTypedSelector(state => state.user.name)

    const profilePicture = picture ? picture : defaultProfile

    return <div className={classes.HeaderRight}>
        <div className={classes.HeaderRightUser}>
            <img src={profilePicture} alt={'ProfilePic'}/>
            <h4>{name}</h4>
        </div>
        <div className={classes.HeaderRightItems}>
            <div className={classes.HeaderRightAddIcon}>
                <IconButton>
                    <AddIcon/>
                </IconButton>
            </div>
            <div className={classes.HeaderRightMessageIcon}>
                <IconButton>
                    <TelegramIcon/>
                </IconButton>
            </div>
            <div className={classes.HeaderRightNotification}>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
            </div>
            <div className={classes.HeaderRightExpandBtn}>
                <ExpandMoreIconElem/>
            </div>
        </div>
    </div>
}

const ExpandMoreIconElem: React.FC<{}> = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={classes.ExpandMoreIconElem}>
            <button className={classes.expandButton} onClick={() => setOpen(!open)}><ExpandMoreIcon/></button>
            {open && <DropDown/>}
        </div>
    )
}
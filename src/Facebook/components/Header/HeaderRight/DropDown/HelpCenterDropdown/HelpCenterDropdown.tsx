import React from "react";
import classes from './HelpCenterDropdown.module.css';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HelpIcon from '@material-ui/icons/Help';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EmailIcon from '@material-ui/icons/Email';
import ErrorIcon from '@material-ui/icons/Error';

type HelpCenterPropsType = {
    setActive: (value: string) => void
}
export const HelpCenterDropdown: React.FC<HelpCenterPropsType> = (props) => {


    return <div className={classes.dropdownSettings}>
        <div className={classes.dropdownContent}>
            <div className={classes.dropdownHeader}>
                <button onClick={() => props.setActive('main')}
                        className={classes.dropdownBackBtn}><ArrowBackIcon/></button>
                <span className={classes.dropdownHeaderText}>Help & Support</span>
            </div>
            <div className={classes.dropdownItem}>
                <HelpIcon className={classes.dropdownItemIcon}/>
                <div className={classes.dropdownItemText}><span>Help center</span></div>
            </div>
            <div className={classes.dropdownItem}>
                <ChatBubbleIcon className={classes.dropdownItemIcon}/>
                <div className={classes.dropdownItemText}><span>Help Community</span></div>
            </div>
            <div className={classes.dropdownItem}>
                <EmailIcon className={classes.dropdownItemIcon}/>
                <div className={classes.dropdownItemText}><span>Support Inbox</span></div>
            </div>
            <div className={classes.dropdownItem}>
                <ErrorIcon className={classes.dropdownItemIcon}/>
                <div className={classes.dropdownItemText}><span>Report a Problem</span></div>
            </div>
        </div>
    </div>
}
import React from "react";
import classes from './SettingsDropdown.module.css'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SettingsIcon from "@material-ui/icons/Settings";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ListIcon from "@material-ui/icons/List";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import LanguageIcon from "@material-ui/icons/Language";

type SettingsPropsType = {
    setActive: (value: string) => void
}
export const SettingsDropdown: React.FC<SettingsPropsType> = (props) => {


    return <div className={classes.dropdown}>
        <div className={classes.dropdownContent}>
            <div className={classes.dropdownHeader}>
                <button onClick={() => props.setActive('main')}
                        className={classes.dropdownBackBtn}><ArrowBackIcon /></button>
                <span className={classes.dropdownHeaderText}>Settings & Privacy</span>
            </div>
            <div className={classes.dropdownItem}>
                <SettingsIcon className={classes.dropdownItemIcon} />
                <div className={classes.dropdownItemText} ><span>Settings</span></div>
            </div>
            <div className={classes.dropdownItem}>
                <LockIcon className={classes.dropdownItemIcon} />
                <div className={classes.dropdownItemText} ><span>Privacy Checkup</span></div>
            </div>
            <div className={classes.dropdownItem}>
                <LockOpenIcon className={classes.dropdownItemIcon} />
                <div className={classes.dropdownItemText} ><span>Privacy Shortcuts</span></div>
            </div>
            <div className={classes.dropdownItem}>
                <ListIcon className={classes.dropdownItemIcon} />
                <div className={classes.dropdownItemText} ><span>Activity Log</span></div>
            </div>
            <div className={classes.dropdownItem}>
                <FeaturedPlayListIcon className={classes.dropdownItemIcon} />
                <div className={classes.dropdownItemText} ><span>News Feed Preferences</span></div>
            </div>
            <div className={classes.dropdownItem}>
                <LanguageIcon className={classes.dropdownItemIcon} />
                <div className={classes.dropdownItemText} ><span>Language</span></div>
            </div>
        </div>
    </div>
}
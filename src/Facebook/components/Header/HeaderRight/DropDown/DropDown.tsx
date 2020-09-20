import React, {useEffect, useRef, useState} from "react";
import classes from './DropDown.module.css';
import {auth} from "../../../../../Source/Firebase";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import {useTypedSelector} from "../../../../../App";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {SettingsDropdown} from "./SettingsDropdownPage/SettingsDropdown";
import {HelpCenterDropdown} from "./HelpCenterDropdown/HelpCenterDropdown";
import CSSTransition from "react-transition-group/CSSTransition";
import defaultProfileImg
    from '../../../../../assets/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'
import {Switch} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {themeActions} from "../../../../../redux/themeReducer";

export const DropDown: React.FC<{}> = () => {

    const picture = useTypedSelector(state => state.user.picture)
    const darkMode = useTypedSelector(state => state.theme.darkMode)
    const fullName = useTypedSelector(state => state.user.fullName)
    const [active, setActive] = useState('main')
    const [menuHeight, setMenuHeight] = useState<number>(0)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const pictureOfUserProfile = picture ? picture : defaultProfileImg

    const dispatch = useDispatch()

    const onSubmit = () => {
        auth.signOut()
        dispatch(themeActions.changeTheme(false))
    }

    useEffect(() => {
        const value = dropdownRef.current?.children[0]
        value instanceof HTMLElement && setMenuHeight(value.offsetHeight)
    }, [])

    const calculateHeight = (element: HTMLElement) => {
        const height = element.offsetHeight;
        setMenuHeight(height)
    }

    return (
        <div style={{height: menuHeight}} ref={dropdownRef} className={classes.dropdown}>
            <CSSTransition onEnter={calculateHeight} in={active === 'settings'} timeout={{enter: 400, exit: 400}}
                           unmountOnExit={true}
                           classNames={{
                               enter: classes.dropdownSecondaryEnter,
                               enterActive: classes.dropdownSecondaryEnterActive,
                               exit: classes.dropdownSecondaryExit,
                               exitActive: classes.dropdownSecondaryExitActive
                           }}>
                <SettingsDropdown setActive={setActive}/>
            </CSSTransition>
            <CSSTransition onEnter={calculateHeight} in={active === 'help'} timeout={{enter: 400, exit: 400}}
                           unmountOnExit={true}
                           classNames={{
                               enter: classes.dropdownSecondaryEnter,
                               enterActive: classes.dropdownSecondaryEnterActive,
                               exit: classes.dropdownSecondaryExit,
                               exitActive: classes.dropdownSecondaryExitActive
                           }}>
                <HelpCenterDropdown setActive={setActive}/>
            </CSSTransition>
            <CSSTransition onEnter={calculateHeight} unmountOnExit={true} timeout={{enter: 400, exit: 400}}
                           in={active === 'main'} classNames={{
                enter: classes.dropdownMainEnter,
                enterActive: classes.dropdownMainEnterActive,
                exit: classes.dropdownMainExit,
                exitActive: classes.dropdownMainExitActive
            }}>
                <div className={classes.dropdownContent}>
                    <div className={classes.dropdownHeader}>
                        <img src={pictureOfUserProfile} alt="ProfilePicture"/>
                        <div className={classes.dropdownFullName}>
                            {fullName}
                        </div>
                    </div>
                    <div className={classes.dropdownBody}>
                        <div onClick={() => setActive('settings')} className={classes.dropdownItem}>
                            <SettingsIcon className={classes.dropdownItemIcon}/>
                            <div className={classes.dropdownItemBox}>
                                <div className={classes.dropdownItemText}>Settings & Privacy</div>
                                <ArrowForwardIosIcon className={classes.dropdownItemArrow}/>
                            </div>

                        </div>
                        <div onClick={() => setActive('help')} className={classes.dropdownItem}>
                            <HelpIcon className={classes.dropdownItemIcon}/>
                            <div className={classes.dropdownItemBox}>
                                <div className={classes.dropdownItemText}>Help & Support</div>
                                <ArrowForwardIosIcon className={classes.dropdownItemArrow}/>
                            </div>
                        </div>
                        <div className={classes.dropdownItem}>
                            <Brightness3Icon className={classes.dropdownItemIcon}/>
                            <div className={classes.darkModeContent}>
                                <div className={classes.dropdownItemText}>Dark Mode</div>
                                <Switch checked={darkMode} onClick={() => dispatch(themeActions.changeTheme(!darkMode))}
                                        color={'primary'}/>
                            </div>

                        </div>
                        <div className={classes.dropdownItem}>
                            <a href={'#'} onClick={() => onSubmit()} className={classes.dropdownItemFormButton}
                               type={'submit'}>
                                <ExitToAppIcon className={classes.dropdownItemIcon}/>
                                <div className={classes.dropdownItemText}>Log Out</div>
                            </a>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}




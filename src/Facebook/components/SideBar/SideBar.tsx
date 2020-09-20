import React from "react";
import classes from './SideBar.module.css'
import {SideBarItem} from "./SideBarItem/SideBarItem";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useTypedSelector} from "../../../App";
import defaultProfileImg from '../../../assets/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'
import Friends from '../../../assets/sideBarIcons/Friends.png'
import Groups from '../../../assets/sideBarIcons/Groups.png'
import Events from '../../../assets/sideBarIcons/Events.png'
import Memories from '../../../assets/sideBarIcons/Memories.png'
import Saved from '../../../assets/sideBarIcons/Saved.png'
import Pages from '../../../assets/sideBarIcons/Pages.png'
import Videos from '../../../assets/sideBarIcons/Videos.png'


export const SideBar: React.FC<{}> = () => {

    const profileImage = useTypedSelector(state => state.user.picture)
    const fullName = useTypedSelector(state => state.user.fullName)

    const pictureOfUserProfile = profileImage ? profileImage : defaultProfileImg

    return (
        <div className={classes.SideBar}>
            <div className={classes.SideBarUser}>
                <div className={classes.SideBarProfilePic}>
                    <img src={pictureOfUserProfile} alt="ProfileImg"/>
                </div>
                <div className={classes.SideBarProfileName}>
                <span>
                    {fullName}
                </span>
                </div>
            </div>
            <SideBarItem src={Friends} title={'Find Friends'}/>
            <SideBarItem src={Groups} title={'Groups'}/>
            <SideBarItem src={Videos} title={'Videos'}/>
            <SideBarItem src={Events} title={'Events'}/>
            <SideBarItem src={Memories} title={'Memories'}/>
            <SideBarItem src={Saved} title={'Saved'}/>
            <SideBarItem src={Pages} title={'Pages'}/>
            <div className={classes.seeMore}>
                <ExpandMoreIcon className={classes.seeMoreIcon} />
                <div className={classes.seeMoreText}>See more</div>
            </div>
        </div>
    );
}

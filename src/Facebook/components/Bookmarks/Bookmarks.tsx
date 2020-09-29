import React from "react";
import classes from './Bookmarks.module.css'
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
import {BookmarksItem} from "./BookmarksItem/BookmarksItem";
import {Header} from "../Header/Header";
import { Redirect } from "react-router-dom";


export const Bookmarks: React.FC<{}> = () => {

    const profileImage = useTypedSelector(state => state.user.picture)
    const fullName = useTypedSelector(state => state.user.fullName)
    const isLoggedIn = useTypedSelector(state => state.login.isLoggedIn)


    const pictureOfUserProfile = profileImage ? profileImage : defaultProfileImg

    if(!isLoggedIn) return <Redirect to={'/login'} />

    return (
        <>
            <Header/>
            <div className={classes.Bookmarks}>
                <div className={classes.BookmarksUser}>
                    <div className={classes.BookmarksUserPic}>
                        <img src={pictureOfUserProfile} alt="ProfileImg"/>
                    </div>
                    <div className={classes.BookmarksUserName}>
                <span>
                    {fullName}
                </span>
                    </div>
                </div>
                <BookmarksItem src={Friends} title={'Find Friends'}/>
                <BookmarksItem src={Groups} title={'Groups'}/>
                <BookmarksItem src={Videos} title={'Videos'}/>
                <BookmarksItem src={Events} title={'Events'}/>
                <BookmarksItem src={Memories} title={'Memories'}/>
                <BookmarksItem src={Saved} title={'Saved'}/>
                <BookmarksItem src={Pages} title={'Pages'}/>
                <div className={classes.seeMore}>
                    <ExpandMoreIcon className={classes.seeMoreIcon}/>
                    <div className={classes.seeMoreText}>See more</div>
                </div>
            </div>
        </>
    );
}

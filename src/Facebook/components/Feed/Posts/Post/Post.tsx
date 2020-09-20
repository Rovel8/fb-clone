import React from "react";
import classes from './Post.module.css'
import {Avatar} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import {Form, Formik} from "formik";
import {db} from "../../../../../Source/Firebase";
import {useTypedSelector} from "../../../../../App";
import CloseIcon from '@material-ui/icons/Close';

type PropsType = {
    profilePic?: string
    profileName: string
    time: firebase.firestore.DocumentData
    textContent: string
    mediaContent?: string
    id: string
    uid: string
}

export const Post: React.FC<PropsType> = ({profilePic, profileName, time, textContent, mediaContent, id, uid}) => {

    const initialValues = {}

    const ownUserUid = useTypedSelector(state => state.user.uid)

    const onSubmit = () => {
        db.collection('posts').doc(id).delete()
    }

    const useStyles = makeStyles({
        thumbUp: {
            fontSize: "",
            color: "royalblue",
            paddingLeft: 10
        },
        heart: {
            fontSize: "",
            color: "crimson"
        },
        smile: {
            fontSize: "",
            color: "yellow"
        },
    });

    const localStyle = useStyles();

    return (
        <div className={classes.Post}>
            <div className={classes.PostHeader}>
                <div className={classes.SenderImage}>
                    <Avatar src={profilePic} />
                </div>
                <div className={classes.SenderInfo}>
                    <div className={classes.SenderName}>
                        {profileName}
                    </div>
                    <div className={classes.SenderDate}>
                        {new Date(time?.toDate()).toUTCString()}
                    </div>
                </div>
                <div className={classes.PostHeaderMore}>
                    {ownUserUid === uid &&
                    <Formik onSubmit={onSubmit} initialValues={initialValues}>
                        <Form>
                            <button type={'submit'}><CloseIcon/></button>
                        </Form>
                    </Formik>
                    }
                </div>
            </div>
            <div className={classes.PostBody}>
                <div className={classes.PostBodyText}>
                    {textContent}
                </div>
                <div className={classes.PostBodyMedia}>
                    {mediaContent ? <img src={mediaContent} alt={'PostImage'} /> : ''}
                </div>
            </div>
            <div className={classes.PostBottom}>
                <div className={classes.PostBottomStats}>
                    <div className={classes.PostBottomStatsLeftSide}>
                        <ThumbUpAltIcon className={localStyle.thumbUp} />
                        <FavoriteIcon className={localStyle.heart} />
                        <InsertEmoticonIcon className={localStyle.smile} />
                        <div className={classes.PostBottomStatsValue}>
                            <span>829</span>
                        </div>
                    </div>
                    <div className={classes.PostBottomStatsRightSide}>
                        <div className={classes.PostBottomStatsActionsComments}>
                            <span>752 comments</span>
                        </div>
                        <div className={classes.PostBottomStatsActionsShares}>
                            <span>1070 shares</span>
                        </div>
                    </div>
                </div>
                <div className={classes.PostBottomActions}>
                    <div className={classes.PostBottomActionsItem}>
                        <ThumbUpAltOutlinedIcon />
                        <span className={classes.PostBottomActionsItemText}>Like</span>
                    </div>
                    <div className={classes.PostBottomActionsItem}>
                        <QuestionAnswerOutlinedIcon />
                        <span className={classes.PostBottomActionsItemText}>Comment</span>
                    </div>
                    <div className={classes.PostBottomActionsItem}>
                        <ReplyOutlinedIcon />
                        <span className={classes.PostBottomActionsItemText}>Share</span>
                    </div>
                </div>
            </div>
        </div>
);
}
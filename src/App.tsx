import React from 'react';
import classes from './App.module.css';
import {Header} from "./Facebook/components/Header/Header";
import {SideBar} from "./Facebook/components/SideBar/SideBar";
import {Feed} from "./Facebook/components/Feed/Feed";
import {Widgets} from "./Facebook/components/Widgets/Widgets";
import {Login} from "./Facebook/components/Login/Login";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/reduxStore";
import {auth, db} from "./Source/Firebase";
import {actions} from "./redux/userReducer";
import {CircularProgress, createStyles, Theme} from "@material-ui/core";
import {actionsInit} from "./redux/initializeAppReducer";
import {Route, Redirect} from "react-router-dom";
import {Bookmarks} from "./Facebook/components/Bookmarks/Bookmarks";
import {SignUp} from "./Facebook/components/Login/SignUp/SignUp";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Backdrop from "@material-ui/core/Backdrop";

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector

export const App: React.FC<{}> = () => {

    return (
        <div>
            <Route path='/bookmarks' render={() => <Bookmarks />}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/MainPage' render={() => <MainPage/>}/>
            <Route path='/signup' render={() => <SignUp />} />
            <Route exact path='/' render={() => <Redirect to={'/MainPage'} />} />
        </div>
    );
}

const MainPage: React.FC<{}> = () => {

    const initialized = useTypedSelector(state => state.user.isInitialized)

    if (!initialized) return <Redirect to={'/login'}/>

    return (
        <div className="App">
            <Header/>
            <div className={classes.MainBlock}>
                <div className={classes.SideBar}>
                    <SideBar/>
                </div>
                <div className={classes.Feed}>
                    <Feed/>
                </div>
                <div className={classes.Widgets}>
                    <Widgets/>
                </div>
            </div>
        </div>
    );
}

export const InitializedApp: React.FC<{}> = () => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            backdrop: {
                background: '#fff',
                zIndex: theme.zIndex.drawer + 1,
                color: '#a09d9d',
            },
        }),
    )

    const classes = useStyles()

    const isInitialized = useTypedSelector(state => state.initializeApp.appIsInitialized)

    const dispatch = useDispatch()

    auth.setPersistence('local').then(() => auth.onAuthStateChanged( async (user) => {
        if (user) {
            const userInf = await db.collection('users').doc(user.uid).get().then(doc => doc.data())
            const uid = user.uid
            const fullName = user.displayName ? user.displayName : userInf ? userInf.fullName : ''
            const picture = user.photoURL ? user.photoURL : ''
            const name = user.displayName ? user.displayName.split(' ')[0] : (userInf && userInf.name)
            dispatch(actions.setUserDataActionCreator(picture, name, fullName, uid))
            dispatch(actions.setIsFetching(false))
            dispatch(actionsInit.initializeAppActionCreator())
        } else {
            dispatch(actions.setUserDataActionCreator('', '', '', '', false))
            dispatch(actionsInit.initializeAppActionCreator())
        }
    }))

return (
    <div>
        {isInitialized ? <App/> : <Backdrop className={classes.backdrop} open={!isInitialized}>
            <CircularProgress color="inherit" />
        </Backdrop>}
    </div>
);
}

export default App;

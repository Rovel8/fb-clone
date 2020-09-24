import React, {useEffect} from 'react';
import classes from './App.module.css';
import {Header} from "./Facebook/components/Header/Header";
import {SideBar} from "./Facebook/components/SideBar/SideBar";
import {Feed} from "./Facebook/components/Feed/Feed";
import {Widgets} from "./Facebook/components/Widgets/Widgets";
import {Login} from "./Facebook/components/Login/Login";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/reduxStore";
import {setUser} from "./redux/userReducer";
import {CircularProgress, createStyles, Theme} from "@material-ui/core";
import {Redirect, Route, Switch} from "react-router-dom";
import {Bookmarks} from "./Facebook/components/Bookmarks/Bookmarks";
import {SignUp} from "./Facebook/components/Login/SignUp/SignUp";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Backdrop from "@material-ui/core/Backdrop";

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector

export const App: React.FC<{}> = () => {

    return (
        <div>
            <Switch>
            <Route path='/bookmarks' render={() => <Bookmarks/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/MainPage' render={() => <MainPage/>}/>
            <Route exact path='/' render={() => <Redirect to={'/MainPage'}/>}/>
            </Switch>
        </div>
    );
}

const MainPage: React.FC<{}> = () => {

    const loggedIn = useTypedSelector(state => state.login.isLoggedIn)

    if (!loggedIn) return <Redirect to={'/login'}/>

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
    const dispatch = useDispatch()
    const isInitialized = useTypedSelector(state => state.initializeApp.appIsInitialized)

    useEffect(() => {
        dispatch(setUser())
    }, [])

    return (
        <div>
            {isInitialized ? <App/> : <Backdrop className={classes.backdrop} open={!isInitialized}>
                <CircularProgress color="inherit"/>
            </Backdrop>}
        </div>
    );
}

export default App;

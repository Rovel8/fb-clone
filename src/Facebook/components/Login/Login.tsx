import React from "react";
import facebookName from '../../../assets/Без названия.png'
import classes from './Login.module.css'
import {useTypedSelector} from "../../../App";
import {NavLink, Redirect, Route} from "react-router-dom";
import {SignUp} from "./SignUp/SignUp";
import {LogIn} from "./LogIn/LogIn";
import googleImage from '../../../assets/_uwwJdr3_400x400.jpg'
import facebookImage from '../../../assets/Flogo.png'
import CSSTransition from "react-transition-group/CSSTransition";
import {useDispatch} from "react-redux";
import {loginWithGoogle} from "../../../redux/LoginReducer";
import {ErrorMsg} from "./ErrorMsg/ErrorMsg";


export const Login: React.FC<{}> = () => {

    const loggedIn = useTypedSelector(state => state.login.isLoggedIn)
    const haseError = useTypedSelector(state => state.login.hasError)

    const dispatch = useDispatch()

    const googleAuth = () => {
        dispatch(loginWithGoogle())
    }

    if (loggedIn) return <Redirect to={'/MainPage'}/>

    return (
        <div className={classes.login}>
            <Route exact path={'/login/signup'} children={({match}) => {
                return <CSSTransition classNames={{
                    enter: classes.popUpEnter,
                    enterActive: classes.popUpEnterActive,
                    exitActive: classes.popUpExitActive
                }}
                                      unmountOnExit={true} in={match != null} timeout={{enter: 300, exit: 300}}>
                    <SignUp/>
                </CSSTransition>
            }}/>

            <CSSTransition classNames={{
                exitActive: classes.errorMsgExitActive,
                enter: classes.errorMsgEnter,
                enterActive: classes.errorMsgEnterActive
            }} in={haseError} unmountOnExit={true} timeout={700}>
                <ErrorMsg/>
            </CSSTransition>

            <div className={classes.loginImages}>
                <img className={classes.logo}
                     src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt=""/>
                <div className={classes.text}>
                    <img src={facebookName} alt=""/>
                </div>
            </div>
            <div className={classes.LoginPanel}>
                <div className={classes.fbLogoWith992}>
                    <img src={facebookName} alt=""/>
                </div>
                <div className={classes.InnerLoginPanel}>
                    <div className={classes.LogInItem}>
                        <LogIn/>
                    </div>
                    <div className={classes.createNewAccountBtn}>
                        <NavLink to={'/login/signup'}>Create new account</NavLink>
                    </div>
                    <div className={classes.LogInWithServices}>
                        <div className={classes.LogInWithServicesText}>Sign in with</div>
                        <div className={classes.LogInWithServicesLinks}>
                            <div className={classes.LogInWithServicesItem}>
                                <button onClick={() => googleAuth()}
                                        type={'submit'}><img src={googleImage} alt="GoogleAuthBtn"/></button>
                            </div>
                            <div className={classes.LogInWithServicesItem}>
                                <button><img src={facebookImage} alt="FacebookAuthBtn"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




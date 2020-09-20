import React, {useState} from "react";
import facebookName from '../../../assets/Без названия.png'
import classes from './Login.module.css'
import {auth, provider} from "../../../Source/Firebase";
import {useTypedSelector} from "../../../App";
import {Redirect} from "react-router-dom";
import {SignUp} from "./SignUp/SignUp";
import {LogIn} from "./LogIn/LogIn";
import googleImage from '../../../assets/_uwwJdr3_400x400.jpg'
import facebookImage from '../../../assets/Flogo.png'
import CloseIcon from '@material-ui/icons/Close';
import CSSTransition from "react-transition-group/CSSTransition";

export const Login: React.FC<{}> = () => {

    const initialized = useTypedSelector(state => state.user.isInitialized)

    const [open, setOpen] = useState<boolean>(false)

    if (initialized) return <Redirect to={'/MainPage'}/>

    return (
        <div className={classes.login}>
            <CSSTransition classNames={{ enter: classes.popUpSignUpWrapperEnter,
                            enterActive: classes.popUpSignUpWrapperEnterActive,
                            exitActive: classes.popUpSignUpWrapperExitActive}}
                           unmountOnExit={true} appear={true} in={open} timeout={{enter: 300, exit: 300}}>
                <SignUnPopUpWindow open={open} setOpen={setOpen} />
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
                    <div className={classes.SignUp}>
                        <button onClick={() => setOpen(true)}>Create New Account</button>
                    </div>
                    <div className={classes.LogInWithServices}>
                        <div className={classes.LogInWithServicesText}>Sign in with</div>
                        <div className={classes.LogInWithServicesLinks}>
                            <div className={classes.LogInWithServicesItem}>
                                <button onClick={() => auth.setPersistence('local').then(() => auth.signInWithPopup(provider))}
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

type SignUnPopUpWindowType = {
    open: boolean
    setOpen: (value: boolean) => void
}

const SignUnPopUpWindow: React.FC<SignUnPopUpWindowType> = (props) => {
    return(
            <div className={classes.popUpSignUpWrapper}>
                <div className={classes.popUpSignUpBody}>
                    <div className={classes.popUpSignUpBodyHeader}>
                        <div className={classes.popUpSignUpContentText}>Sign Up</div>
                        <div className={classes.popUpSignUpContentClose}>
                            <button onClick={() => props.setOpen(false)}><CloseIcon /></button>
                        </div>
                    </div>
                    <div className={classes.popUpSignUpContent}>
                        <SignUp />
                    </div>
                </div>
            </div>
    )
}
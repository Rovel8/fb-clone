import React from "react";
import ReactDOM from "react-dom";
import classes from './ErrorMsg.module.css'
import {useTypedSelector} from "../../../../App";
import {useDispatch} from "react-redux";
import {loginActions} from "../../../../redux/LoginReducer";

export const ErrorMsg = () => {

    const errorMessage = useTypedSelector(state => state.login.errorMessage)

    const dispatch = useDispatch()

    return ReactDOM.createPortal(
        <div onClick={() => dispatch(loginActions.setErrorMessage(errorMessage, false))} className={classes.errorMsg}>
            <span className={classes.errorMsgText}>{errorMessage}</span>
        </div>, document.getElementById('errorMsg') as HTMLElement
    )
}
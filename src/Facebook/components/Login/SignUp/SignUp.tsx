import React from "react";
import classes from './SignUp.module.css'
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../../App";
import {createSignUpInput} from "../../../common/SignUpInput/SignUpInput";
import {SignUpForm} from "../../../../redux/LoginReducer";
import CloseIcon from "@material-ui/icons/Close";
import ReactDOM from 'react-dom'
import {NavLink} from "react-router-dom";

export const SignUp: React.FC<{}> = (props) => {

    const isFetching = useTypedSelector(state => state.user.isFetching)

    const initialValues = {
        email: '',
        password: '',
        fullName: '',
    };

    type InitialValuesType = typeof initialValues

    const dispatch = useDispatch()

    const onSubmit = (values: InitialValuesType) => {
        const {email, password, fullName} = values
        const truth = email && password && fullName
        if (truth) dispatch(SignUpForm(email, password, fullName))
    };

    const validationSchema = Yup.object({
        email: Yup.string().required("!").email('!'),
        password: Yup.string().required('!'),
        fullName: Yup.string().required("!"),
    })

    return ReactDOM.createPortal(
        <div className={classes.popUpSignUpWrapper}>
            <div className={classes.popUpSignUpBody}>
                <div className={classes.popUpSignUpBodyHeader}>
                    <div className={classes.popUpSignUpContentText}>Sign Up</div>
                    <div className={classes.popUpSignUpContentClose}>
                        <NavLink to={'/login'}><CloseIcon/></NavLink>
                    </div>
                </div>
                <div className={classes.popUpSignUpContent}>
                    <div className={classes.SignUpWrapper}>
                        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
                            {formik =>
                                <Form className={classes.SignUp}>
                                    <div className={classes.formFields}>
                                        {createSignUpInput({
                                            name: 'email',
                                            placeholder: 'Enter your email',
                                            type: 'email'
                                        })}
                                        {createSignUpInput({
                                            name: 'password',
                                            placeholder: 'Enter your password',
                                            type: 'password'
                                        })}
                                        {createSignUpInput({
                                            name: 'fullName',
                                            placeholder: 'Enter your full name',
                                            type: 'text'
                                        })}
                                    </div>


                                    <div className={classes.formBtn}>
                                        <button disabled={isFetching} type={'submit'}>Sign Up</button>
                                    </div>
                                </Form>
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </div>, document.getElementById('signUp') as HTMLElement
    )
}
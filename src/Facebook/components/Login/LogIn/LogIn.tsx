import React from "react";
import classes from './LogIn.module.css'
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../../App";
import {createField} from "../../../common/LoginInput/LoginInput";
import {loginWithForm} from "../../../../redux/LoginReducer";

export const LogIn: React.FC<{}> = () => {

    const initialValues = {
        email: '',
        password: '',
    };

    type InitialValuesType = typeof initialValues

    const dispatch = useDispatch()

    const isFetching = useTypedSelector(state => state.user.isFetching)

    const onSubmit = (values: InitialValuesType) => {
        const {email, password} = values
        if (email && password) {
            dispatch(loginWithForm(email, password))
        }
    };

    const validationSchema = Yup.object({
        email: Yup.string().required('!').email('!'),
        password: Yup.string().required('!'),
    })

    return (
        <>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
                {formik =>
                    <Form className={classes.LogIn}>
                        <div className={classes.inputItem}>
                            {createField({name: 'email', placeholder: 'Enter your email', type: 'text'})}
                        </div>

                        <div className={classes.inputItem}>
                            {createField({name: 'password', placeholder: 'Enter your password', type: 'password'})}
                        </div>


                        <button disabled={isFetching} type={'submit'}>Log in</button>
                    </Form>
                }
            </Formik>
        </>
    );
}
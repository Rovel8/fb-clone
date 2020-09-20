import React from "react";
import classes from './SignUp.module.css'
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import {auth, db} from "../../../../Source/Firebase";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../../App";
import {actions} from "../../../../redux/userReducer";
import {createSignUpInput} from "../../../common/SignUpInput/SignUpInput";

export const SignUp: React.FC<{}> = () => {

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
        if(truth) dispatch(actions.setIsFetching(true))
        if(truth) auth.createUserWithEmailAndPassword(email, password).then((result) => {
            return db.collection('users').doc(result.user?.uid).set({
                fullName: fullName,
                name: fullName.split(' ')[0]
            })
        })
    };

    const validationSchema = Yup.object({
        email: Yup.string().required("!").email('!'),
        password: Yup.string().required('!'),
        fullName: Yup.string().required("!"),
    })

    return (
        <div className={classes.SignUpWrapper}>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
                {formik =>
                    <Form className={classes.SignUp}>
                        <div className={classes.formFields}>
                            {createSignUpInput({name: 'email', placeholder: 'Enter your email', type: 'email'})}
                            {createSignUpInput({
                                name: 'password',
                                placeholder: 'Enter your password',
                                type: 'password'
                            })}
                            {createSignUpInput({name: 'fullName', placeholder: 'Enter your full name', type: 'text'})}
                        </div>
                        <div className={classes.formBtn}>
                            <button disabled={isFetching} type={'submit'}>Sign Up</button>
                        </div>
                    </Form>
                }
            </Formik>
        </div>
    );
}
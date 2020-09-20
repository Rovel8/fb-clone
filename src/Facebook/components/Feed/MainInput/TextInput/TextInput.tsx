import React from "react";
import classes from './TextInput.module.css'
import {Avatar} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import {Field, Form, Formik, FormikHelpers} from "formik";
import {db} from "../../../../../Source/Firebase";
import firebase from "firebase";
import {useTypedSelector} from "../../../../../App";

export const TextInput: React.FC<{}> = () => {

    const picture = useTypedSelector(state => state.user.picture)
    const name = useTypedSelector(state => state.user.fullName)
    const uid = useTypedSelector(state => state.user.uid)

    const initialValues = {
        text: '',
        url: ''
    }

    type InitialValuesType = typeof initialValues

    const onSubmit = (values: InitialValuesType, onSubmitEvent: FormikHelpers<InitialValuesType>) => {
        db.collection('posts').add({
            uid: uid,
            textContent: values.text,
            mediaContent: values.url,
            time: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: picture,
            profileName: name
        })
        onSubmitEvent.resetForm()
    }

    return (
        <div className={classes.TextInput}>
            <div className={classes.ProfilePic}>
                <Avatar src={picture} />
            </div>
                <Formik  onSubmit={onSubmit} initialValues={initialValues} >
                    <Form className={classes.InputWrapperForm}>
                        <div className={classes.TextInputField}>
                            <Field as={CustomInput} name={'text'} id={'text'} placeholder={"What's on your mind"} type={'text'} />
                        </div>
                        <div className={classes.UrlInputField}>
                            <Field as={CustomInput} name={'url'} id={'url'} placeholder={"Optional URL"} type={'url'} />
                        </div>
                        <button type={'submit'}>Post</button>
                    </Form>
                </Formik>
        </div>
    );
}

const CustomInput: React.FC<{}> = (props) => {
    return (
        <React.Fragment>
            <Input className={classes.Input} {...props} disableUnderline={true} fullWidth={true} />
        </React.Fragment>
    );
}
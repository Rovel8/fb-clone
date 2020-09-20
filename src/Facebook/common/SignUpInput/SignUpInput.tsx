import React from "react";
import classes from './SignUpInput.module.css'
import {Field} from "formik";

type PropsType = {
    name: string
    placeholder: string
    type: string
}

export const createSignUpInput: React.FC<PropsType> = ({name, placeholder, type}) => {
    return <>
        <Field name={name}>

            {
                (props: any) => {
                    const {field, meta} = props
                    const {error} = meta
                    return <>
                    <div className={meta.touched && meta.error ? classes.inputItemErrorMsg : classes.input}>
                        <input placeholder={placeholder} {...field} type={type}/>
                        {meta.touched && meta.error && <div className={classes.inputItemErrorMsgText}>{error}</div>}
                    </div>
                    </>
                    }
                    }

        </Field>
        </>
}
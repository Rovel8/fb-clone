import React from "react";
import {Field} from "formik";
import classes from './LoginInput.module.css'

type PropsType = {
    name: string
    placeholder: string
    type: string
}

export const createField: React.FC<PropsType> = ({name, placeholder, type}) => {
    return <>
        <Field  name={name}>
            {
                (props: any) => {
                    const {field, meta} = props
                    return <>
                        <div className={meta.touched && meta.error ? classes.errorMsgWrapper : classes.input}>
                            <input placeholder={placeholder} {...field} type={type}/>
                        </div>
                    </>
                }
            }
        </Field>
        </>
}
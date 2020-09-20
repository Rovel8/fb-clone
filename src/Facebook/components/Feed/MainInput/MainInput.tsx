import React from "react";
import classes from './MainInput.module.css'
import {Activity} from "./Activity/Activity";
import {TextInput} from "./TextInput/TextInput";

export const MainInput: React.FC<{}> = () => {
    return (
        <div className={classes.MainInput}>
            <TextInput />
            <Activity />
        </div>
    );
}
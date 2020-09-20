import React from "react";
import classes from './Header.module.css'
import {HeaderLeft} from "./HeaderLeft/HeaderLeft";
import {HeaderCenter} from "./HeaderCenter/HeaderCenter";
import {HeaderRight} from "./HeaderRight/HeaderRight";

export const Header: React.FC<{}> = () => {

    return (
        <div className={classes.header}>
            <HeaderLeft/>
            <HeaderCenter/>
            <HeaderRight/>
        </div>
    );
}




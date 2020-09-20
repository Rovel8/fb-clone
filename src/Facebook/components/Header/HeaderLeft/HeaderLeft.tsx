import React from "react";
import classes from './HeaderLeft.module.css'
import {Field, Form, Formik} from "formik";
import {NavLink} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';

export const HeaderLeft: React.FC<{}> = () => {

    const initialValues = {
        search: ''
    }

    const onSubmit = () => {
    }

    return <div className={classes.HeaderLeft}>
        <NavLink to={'/MainPage'}><img
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'}
            alt="Logo"/></NavLink>

        <div className={classes.HeaderLeftInput}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <Field as={HeaderSearchInput} name={'search'} id={'search'}/>
                </Form>
            </Formik>
        </div>
        <div className={classes.HeaderLeftBurger}>
            <NavLink to={'../bookmarks'}>
                <MenuIcon/>
            </NavLink>
        </div>

    </div>
}


const HeaderSearchInput: React.FC<{}> = () => {
    return <TextField placeholder={'Search Facebook'}
                      InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                              <InputAdornment position="start">
                                  <SearchIcon style={{color: 'grey'}}/>
                              </InputAdornment>
                          )
                      }}
    />
}
import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, {ThunkAction} from 'redux-thunk';
import {initializeAppReducer} from "./initializeAppReducer";
import {themeReducer} from "./themeReducer";
import {LoginReducer} from "./LoginReducer";

let reducers = combineReducers({
    user: userReducer,
    initializeApp: initializeAppReducer,
    theme: themeReducer,
    login: LoginReducer
})

type ReducersType = typeof reducers

export type Initialize<T> = T extends {[key: string]: (...args: any) => infer U} ? U : never

export type AppStateType = ReturnType<ReducersType>

export type ThunkType = ThunkAction<void, AppStateType, unknown, Action>

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)))

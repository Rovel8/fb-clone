import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {initializeAppReducer} from "./initializeAppReducer";
import {themeReducer} from "./themeReducer";

let reducers = combineReducers({
    user: userReducer,
    initializeApp: initializeAppReducer,
    theme: themeReducer
})

type ReducersType = typeof reducers

export type Initialize<T> = T extends {[key: string]: (...args: any) => infer U} ? U : never

export type AppStateType = ReturnType<ReducersType>

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)))

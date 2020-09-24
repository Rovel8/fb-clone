import {Initialize, ThunkType} from "./reduxStore";
import {auth, db} from "../Source/Firebase";
import {actionsInit} from "./initializeAppReducer";
import {loginActions} from "./LoginReducer";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

const initialState = {
    picture: '',
    name: '',
    fullName: '',
    isFetching: false,
    uid: ''
}

type InitialValuesType = typeof initialState

export const userReducer = (state = initialState, action: Actions): InitialValuesType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                picture: action.payload.picture,
                fullName: action.payload.fullName,
                name: action.payload.name,
                uid: action.payload.uid
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetching
            }
        default: return state
    }
}



export type Actions = Initialize<typeof actions>

export const actions = {
    setUserDataActionCreator: (picture: string, name: string, fullName: string, uid: string) => (
        {type: SET_USER_DATA, payload: {picture, name, fullName, uid}} as const),
    setIsFetching: (fetching: boolean) => ({type: SET_IS_FETCHING, fetching} as const)
}

export const setUser = (): ThunkType => (dispatch, getState) => {
    auth.setPersistence('local').then(() => auth.onAuthStateChanged( async (user) => {
        if (user) {
            const userInf = await db.collection('users').doc(user.uid).get().then(doc => doc.data())
            const uid = user.uid
            const fullName = user.displayName ? user.displayName : userInf ? userInf.fullName : ''
            const picture = user.photoURL ? user.photoURL : ''
            const name = user.displayName ? user.displayName.split(' ')[0] : (userInf && userInf.name)
            dispatch(actions.setUserDataActionCreator(picture, name, fullName, uid))
            dispatch(loginActions.loginWithFormAC(true))
            dispatch(actions.setIsFetching(false))
            dispatch(actionsInit.initializeAppActionCreator())
        } else {
            dispatch(actions.setUserDataActionCreator('', '', '', ''))
            dispatch(loginActions.loginWithFormAC(false))
            dispatch(actionsInit.initializeAppActionCreator())
        }
    }))
}
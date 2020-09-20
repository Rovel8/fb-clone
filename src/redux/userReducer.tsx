import {Initialize} from "./reduxStore";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

const initialState = {
    picture: '',
    name: '',
    fullName: '',
    isInitialized: false,
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
                isInitialized: action.payload.isInitialized,
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
    setUserDataActionCreator: (picture: string, name: string, fullName: string, uid: string, isInitialized: boolean = true) => (
        {type: SET_USER_DATA, payload: {picture, name, fullName, uid, isInitialized}} as const),
    setIsFetching: (fetching: boolean) => ({type: SET_IS_FETCHING, fetching} as const)
}
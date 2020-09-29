import {Initialize} from "./reduxStore";

const SET_MODE = 'SET_MODE'

const initialState = {
    darkMode: false
}

type InitialStateType = {
    darkMode: boolean
}

export const themeReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_MODE:
            return {
                ...state,
                darkMode: action.darkMode
            }
        default:
            return state
    }
}

type ActionsTypes = Initialize<typeof themeActions>

export const themeActions = {
    changeTheme: (darkMode: boolean) => ({type: SET_MODE, darkMode} as const)
}
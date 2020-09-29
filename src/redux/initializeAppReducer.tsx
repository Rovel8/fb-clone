import {Initialize} from "./reduxStore";

const INITIALIZE_APP = 'INITIALIZE_APP'

type initialStateType = typeof initialState

const initialState = {
    appIsInitialized: false
}

export const initializeAppReducer = (state = initialState, action: Actions): initialStateType => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                appIsInitialized: true
            }
        default:
            return state
    }
}

type Actions = Initialize<typeof actionsInit>

export const actionsInit = {
    initializeAppActionCreator: () => ({type: INITIALIZE_APP} as const)
}


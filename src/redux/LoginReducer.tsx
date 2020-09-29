import {Initialize, ThunkType} from "./reduxStore";
import {auth, db, provider} from "../Source/Firebase";
import {actionsUser} from "./userReducer";
import {themeActions} from "./themeReducer";

const LOGIN_WITH_FORM = 'LOGIN_WITH_FORM'
const ERROR_MESSAGE = 'ERROR_MESSAGE'

const initialState = {
    isLoggedIn: false,
    hasError: false,
    errorMessage: ''
}

type InitialStateType = typeof initialState

export const LoginReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case LOGIN_WITH_FORM:
            return {
                ...state,
                isLoggedIn: action.isLogged
            }
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                hasError: action.hasError
            }
        default:
            return state
    }
}

type ActionsType = Initialize<typeof loginActions>

export const loginActions = {
    loginWithFormAC: (isLogged: boolean) => ({type: LOGIN_WITH_FORM, isLogged} as const),
    setErrorMessage: (errorMessage: string, hasError: boolean = true) => ({
        type: ERROR_MESSAGE,
        errorMessage,
        hasError
    } as const),
}

export const loginWithForm = (email: string, password: string): ThunkType =>
    async (dispatch) => {
        try {
            dispatch(actionsUser.setIsFetching(true))
            await auth.signInWithEmailAndPassword(email, password)
            dispatch(loginActions.loginWithFormAC(true))
        } catch (error) {
            dispatch(loginActions.setErrorMessage(error.message))
        } finally {
            dispatch(actionsUser.setIsFetching(false))
        }
    }

export const loginWithGoogle = (): ThunkType => async (dispatch) => {
    await auth.setPersistence('local').then(() => auth.signInWithPopup(provider))
    dispatch(loginActions.loginWithFormAC(true))
}

export const SignUpForm = (email: string, password: string, fullName: string): ThunkType =>
    async (dispatch) => {
        try {
            dispatch(actionsUser.setIsFetching(true))
            let result = await auth.createUserWithEmailAndPassword(email, password)
            await db.collection('users').doc(result.user?.uid).set({
                fullName: fullName,
                name: fullName.split(' ')[0]
            })
            dispatch(loginActions.loginWithFormAC(true))
        } catch (error) {
            dispatch(loginActions.setErrorMessage(error.message))
        } finally {
            dispatch(actionsUser.setIsFetching(false))
        }
    }

export const LogOut = (): ThunkType => async (dispatch) => {
    await auth.signOut()
    dispatch(themeActions.changeTheme(false))
    dispatch(loginActions.loginWithFormAC(false))
}
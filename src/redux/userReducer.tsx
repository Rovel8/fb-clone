import {Initialize, ThunkType} from "./reduxStore";
import {auth, db} from "../Source/Firebase";
import {actionsInit} from "./initializeAppReducer";
import {loginActions} from "./LoginReducer";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_POSTS = 'SET_POSTS'
const REMOVE_POST ='REMOVE_POST'

const initialState = {
    picture: '',
    name: '',
    fullName: '',
    isFetching: false,
    uid: '',
    posts: [] as Array<string> // IDs of posts
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
        case SET_POSTS:
            return {
                ...state,
                posts: [...state.posts, state.posts.includes(action.postId) ? '' : action.postId ] // remove repeated values in array
                    .filter(post => post.length > 1) // remove whitespaces in array
            }
        case REMOVE_POST:
            return {
                ...state,
                posts: [...state.posts].filter(post => post !== action.postId) // filter out deleted post
            }
        default:
            return state
    }
}


export type Actions = Initialize<typeof actionsUser>

export const actionsUser = {
    setUserDataActionCreator: (picture: string, name: string, fullName: string, uid: string) => (
        {type: SET_USER_DATA, payload: {picture, name, fullName, uid}} as const),
    setIsFetching: (fetching: boolean) => ({type: SET_IS_FETCHING, fetching} as const),
    setPosts: (postId: string) => ({type: SET_POSTS, postId} as const),
    removePost: (postId: string) => ({type: REMOVE_POST, postId} as const)
}

export const setUser = (): ThunkType => (dispatch) => {
    auth.setPersistence('local').then(() => auth.onAuthStateChanged(async (user) => {
        if (user) {
            const userInf = await db.collection('users').doc(user.uid).get().then(doc => doc.data())
            const uid = user.uid
            const fullName = user.displayName ? user.displayName : userInf ? userInf.fullName : ''
            const picture = user.photoURL || ''
            const name = user.displayName ? user.displayName.split(' ')[0] : (userInf && userInf.name)
            dispatch(actionsUser.setUserDataActionCreator(picture, name, fullName, uid))
            dispatch(loginActions.loginWithFormAC(true))
            dispatch(actionsUser.setIsFetching(false))
            dispatch(actionsInit.initializeAppActionCreator())
        } else {
            dispatch(actionsUser.setUserDataActionCreator('', '', '', ''))
            dispatch(loginActions.loginWithFormAC(false))
            dispatch(actionsInit.initializeAppActionCreator())
        }
    }))
}

export const deletePost = (id: string): ThunkType => async (dispatch) => {
    await db.collection('posts').doc(id).delete()
    dispatch(actionsUser.removePost(id))
}
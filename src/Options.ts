import { redirect, Bag, NOT_FOUND } from "redux-first-router"
export default {
    onBeforeChange: async (dispatch: Function, getState: Function, action: Bag) => {
        /* console.log(getState())
        const state = getState()
        if (!state.user.loggedIn) {
            dispatch(redirect({type: NOT_FOUND}))
            console.log("Go to login")
        } else {

        } */
    }
}
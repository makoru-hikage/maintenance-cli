import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    loggedIn: boolean
}

const initialState: UserState = { loggedIn: false }


const user = (state: UserState = initialState, action: PayloadAction<boolean>) => {
    switch (action.type) {
        case 'user/login': {
            if (action.payload === true) {
                return {...state, loggedIn: true}
            }
            break
        }
        case 'user/logout': {
            return {...state, loggedIn: false}
            break
        }
        default: {
            return state
            break
        }
    }
}

export {user}
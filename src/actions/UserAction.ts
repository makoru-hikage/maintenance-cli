import { ThunkAction } from "redux-thunk"
import { RootState } from "../ConfigStore"
import { AnyAction } from "redux"
import axios from "axios"
import Cookies from "universal-cookie"
import { redirect } from "redux-first-router"
import { isSet } from "immer/dist/internal"

interface CredentialsInterface {
  username: string,
  password: string
}

const userCheck = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const cookie = new Cookies()
      const token = cookie.get('token')
      const baseUrl = import.meta.env.VITE_BACKEND_URL
      const resp = await axios({
        url: baseUrl + '/api/token-check',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      dispatch({ type: 'user/login', payload: true})
    } catch (error) {
      dispatch({ type: 'user/login', payload: false})
    }
  }
}

const userLogin = (credentials: CredentialsInterface):
  ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL
      const resp = await axios({
        url: baseUrl + '/api/login',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data: credentials
      })
      dispatch({ type: 'user/login', payload: true})
    } catch (error) {
      dispatch({ type: 'user/login', payload: false})
    }
  }
}
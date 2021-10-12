import { useState, ChangeEvent } from "react"
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Redirect } from "react-router"

interface CredentialsInterface {
  username: string,
  password: string
}

const Login = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const [credentials, setState] = useState<CredentialsInterface>({
    username: "",
    password: "",
  })
  const [loggedIn, setLoggedIn] = useState({
    loggedIn: false
  })

  const updateField = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const storeToken = (token: string) => {
    setCookie("token", token, {sameSite: 'strict'})
  }

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const baseUrl = import.meta.env.VITE_BACKEND_URL
    axios({
      url: baseUrl + '/api/login',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: credentials
    })
    .then((response) => {
      storeToken(response.data['token'])
      setLoggedIn( x => ({
        loggedIn: true
      }))
    })
  }

  if (loggedIn.loggedIn){
    return <Redirect to="/home" />
  }

  return <div className="inline-block align-bottom bg-gray-400 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    <form className="flex flex-col flex-wrap px-8 pt-6 pb-8 mb-4 bg-gray-300">
      <div className="m-4">
        <label htmlFor="username" className="table-cell text-black">Username: </label>
        <input onChange={updateField} type="text" name="username" id="username-field" value={credentials.username} className="border shadow table-cell"/>
      </div>
      <div className="m-4">
        <label htmlFor="password" className="table-cell text-black">Password: </label>
        <input onChange={updateField} type="password" name="password" id="password-field" value={credentials.password} className="border shadow table-cell"/>
      </div>
      <div className="m-4">
        <button onClick={login} id="login-button" className="text-black p-2 border align-end bg-gray-400">Login</button>
      </div>
    </form>
  </div>
}

export default Login
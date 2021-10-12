import { useEffect, useState } from "react"
import axios from "axios"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"

import Index from './Index'
import Login from './Login'
import { useCookies } from 'react-cookie'

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [state, setState] = useState({
    loggedIn: false,
  })

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    axios({
      url: baseUrl + '/api/token-check',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookies.token
      }
    }).then((response) => {
      setState( x => ({
        loggedIn: true
      }))
    })
  },[])


  return <Router>
    <Switch>
      <Route exact path="/">
        {state.loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/home">
        {state.loggedIn ? <Index /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
      {!state.loggedIn ? <Login /> : <Redirect to="/home" /> }
      </Route>
    </Switch>
  </Router>
}

export default App
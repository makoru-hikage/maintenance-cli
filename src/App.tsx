import { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

import Index from './Index'
import Login from './Login'
import { FloorAreaEditor } from './components/FloorAreaEditor'

const App = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
}

export default App
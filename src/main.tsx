import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'tailwindcss/tailwind.css'
import './index.css'
import App from './App'
import Store from './ConfigStore'

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

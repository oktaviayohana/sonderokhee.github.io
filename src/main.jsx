import React from 'react'
import ReactDOM from 'react-dom'
import './views/css/style.css'
import Navigation from './views/pages/Navigation.jsx'
import Login from './views/pages/Login.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
)

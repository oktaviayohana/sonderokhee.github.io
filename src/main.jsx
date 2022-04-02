import React from 'react'
import ReactDOM from 'react-dom'
import './views/style/index.css'
import App from './views/pages/Index'
import Navigation from './views/pages/Navigation.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

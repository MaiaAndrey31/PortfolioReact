import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Router from '../src/routes/routes.jsx'
import GlobalStyle from '../src/styles/GlobalStyles.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
)

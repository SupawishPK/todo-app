import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import RequireAuth from './components/RequireAuth'

import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Landing} />
      <Route path="/dashboard" component={RequireAuth(Dashboard)} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()

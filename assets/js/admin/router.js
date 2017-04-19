import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Route,
  Link,
  hashHistory,
  withRouter,
  Redirect
} from 'react-router-dom'
import { signIn, signOut } from './actions/auth'
import Header from './containers/Header'
import Top from './pages/Top'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'

const GlobalRouter = () => {
  return (
    <div>
      <Header />
      <div className={'content'}>
        <div className={'container'}>
          <ul>
            <li><Link to="/">TOP</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
            <li><Link to="/account">account</Link></li>
          </ul>
          <div className={'main'}>
            <Route exact={true} path="/" component={Top}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/Account" component={Account}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalRouter

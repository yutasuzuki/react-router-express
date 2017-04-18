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
      <Route exact={true} path="/" component={Top}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/Account" component={Account}/>
    </div>
  )
}

export default GlobalRouter

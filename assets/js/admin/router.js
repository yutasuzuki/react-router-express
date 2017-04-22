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
import User from './pages/User'

const GlobalRouter = () => {
  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/account">account</Link></li>
          <li><Link to="/user">user</Link></li>
        </ul>
      </nav>
      <main className={'main'}>
        <Route exact={true} path="/" component={Top}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/Account" component={Account}/>
        <Route path="/user" component={User}/>
      </main>
    </div>
  )
}

export default GlobalRouter

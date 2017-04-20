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
      <nav>
        <ul>
          <li><Link to="/">TOP</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/account">account</Link></li>
        </ul>
      </nav>
      <main className={'main'}>
        <div className={'container'}>
          <div className={'main'}>
            <Route exact={true} path="/" component={Top}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/Account" component={Account}/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GlobalRouter

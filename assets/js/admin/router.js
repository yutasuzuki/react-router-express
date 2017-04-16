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
import Admin from './pages/admin/'

const GlobalRouter = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Top}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path={`/topics/:topicId`} component={Topic}/>
      <Route exact={true} path={'/topics'} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
}

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component , auth}) => (
  <Route render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={'/'}/>
    )
  )}/>
)


const Home = () => (
  <div>
    <Header />
    <ul>
      <li><Link to="/">TOP</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <Header />
    <ul>
      <li><Link to="/">TOP</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <Header />
    <ul>
      <li><Link to="/">TOP</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3> 1{match.params.topicId}</h3>
  </div>
)

export default GlobalRouter

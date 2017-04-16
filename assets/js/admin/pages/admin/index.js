import React from 'react'
import {
  Route,
  Link,
  hashHistory,
  withRouter,
  Redirect
} from 'react-router-dom'
import Dashboard from './Dashboard'

const Admin = () => (
  <div>
    <Route path="/admin" component={Dashboard}/>
  </div>
)

export default Admin

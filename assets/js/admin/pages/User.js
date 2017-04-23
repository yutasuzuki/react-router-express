import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserList from '../components/UserList'

const User = () => (
  <div>
    <h1>User!!</h1>
    <ul>
      <UserList />
    </ul>
  </div>
)

export default User

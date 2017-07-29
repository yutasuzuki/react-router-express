import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserList from '../components/UserList'

const User = () => (
  <div className={'c-card'}>
    <h1 className={'c-heading-page'}>User!!</h1>
    <ul>
      <UserList />
    </ul>
  </div>
)

export default User

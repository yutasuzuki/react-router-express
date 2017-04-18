import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../containers/Header'

const Top = () => (
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
          <h1>TOP</h1>
        </div>
      </div>
    </div>
  </div>
)

export default Top

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../containers/Header'

const Top = () => (
  <div>
    <Header />
    <div className={'content'}>
      <div className={'container'}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">admin</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        <div className={'main'}>
          <h1>TOP</h1>
        </div>
        <aside className={'aside'}>
          aside
        </aside>
      </div>
    </div>
  </div>
)

export default Top

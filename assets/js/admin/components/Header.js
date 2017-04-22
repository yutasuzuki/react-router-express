import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={'header'}>
        <div className={'header__inner'}>
          <h1 className={'header__title'}>
            <Link to="/">Palette</Link>
          </h1>
        </div>
      </header>
    )
  }
}

export default Header

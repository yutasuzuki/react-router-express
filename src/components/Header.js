import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header__inner'}>
        <Link to='/'>
          <h1>ページタイトル</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header

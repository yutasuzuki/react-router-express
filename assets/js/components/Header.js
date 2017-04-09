import React, { Component } from 'react'
import { Link } from 'react-router'

const Header = (state) => {
  let status = 'false'
  if (state.modal.status) {
    status = 'true'
  }
  return (
    <header onClick={() => state.onClickModal()}  className={'header'}>
      <span>{status}</span>
      <div className={'header__inner'}>
        <h1>ページタイトル</h1>
      </div>
    </header>
  )
}

export default Header
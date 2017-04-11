import React, { Component } from 'react'
import { Link } from 'react-router'

const Header = (state) => {
  console.log(state)
  let status = 'false'
  if (state.modal.status) {
    status = 'true'
  }
  return (
    <header onClick={() => state.onClickModal()}  className={'header'}>
      <span>{status}</span>
      <span>{state.counter}</span>
      <div className={'header__inner'}>
        <h1>ページタイトル</h1>
      </div>
    </header>
  )
}

export default Header

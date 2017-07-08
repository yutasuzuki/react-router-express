import React from 'react'
import { connect } from 'react-redux'
import { getAllUsers, incrementAsync } from '../actions/modalAction'
import { signIn, signOut } from '../actions/auth'
import HeaderComponent from '../components/Header'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllUser: () => {
      dispatch(signIn());
    }
  }
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default Header

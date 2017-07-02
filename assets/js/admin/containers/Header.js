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
    onSubmitSignIn: () => {
      dispatch(signIn())
    },
    onSubmitSignOut: () => {
      dispatch(signOut())
    },
    onClickModal: () => {
      dispatch(incrementAsync())
    },
    onGetAllUser: () => {
      dispatch('SIGN_IN');
      fetch(`/api/users`).then((response) => {
        response.json().then((json) => {
          console.log(json)
          dispatch(getAllUsers(json))
        })
      })
    }
  }
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default Header

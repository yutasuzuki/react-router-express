import React from 'react'
import { connect } from 'react-redux'
import { getAllUsers, incrementAsync } from '../actions/modalAction'
import { signIn, signOut } from '../actions/auth'
import HeaderComponent from '../components/Header'
import axios from 'axios'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAuth: () => {
      axios.get('/api/signin').then((res) => {
        dispatch({type: 'SIGN_IN', data: res.data});
      })
    }
  }
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default Header

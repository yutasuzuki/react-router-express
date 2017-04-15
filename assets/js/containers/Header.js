import React from 'react'
import { connect } from 'react-redux'
import { getAllUsers, incrementAsync } from '../actions/modalAction'
import HeaderComponent from '../components/Header'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickModal: () => {
      dispatch(incrementAsync())
    },
    onGetAllUser: () => {
      fetch(`/api/users/12432`).then((response) => {
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

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
    }
  }
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default Header

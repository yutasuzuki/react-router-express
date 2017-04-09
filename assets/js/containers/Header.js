import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../actions/modalAction'
import HeaderComponent from '../components/Header'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickModal: () => {
      dispatch(toggleModal())
    }
  }
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default Header

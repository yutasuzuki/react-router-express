import React, { Component } from 'react'
import { Link } from 'react-router'

const Header = (state) => {
  console.log(state)
  let status = 'false'
  if (state.modal.status) {
    status = 'true'
  }
  return (
    <header onClick={() => state.onGetAllUser()}  className={'header'}>
      <span>{status}</span>
      <span>{state.counter}</span>
      <div className={'header__inner'}>
        <h1>ページタイトル</h1>
      </div>
    </header>
  )
}

class ProjectList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    console.log(this.props)
    this.props.onGetAllUser()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <header onClick={() => this.props.onGetAllUser(12)}  className={'header'}>
          <div className={'header__inner'}>
            <h1>ページタイトル</h1>
          </div>
        </header>
        <ul>
        {this.props.user.map((u, index) => {
          return <li key={ index }>{ u.id } : {u.text}</li>;
        })}
        </ul>
      </div>
    )
  }
}

export default ProjectList

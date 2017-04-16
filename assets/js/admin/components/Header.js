import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      valid: {
        status: false,
        text: 'メールアドレス、またはパスワードが正しくありません。'
      }
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    this.props.onGetAllUser()
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value })
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value })
  }

  handleSignIn() {
    if (this.state.email && this.state.password) {
      axios.post('/api/signIn', {
        email: this.state.email,
        password: this.state.password
      }).then((response) => {
        console.log(response)
        this.props.onSubmitSignIn(this.state)
      })
    }
  }

  handleSignOut() {
    this.props.onSubmitSignOut()
  }

  render() {
    return (
      <div>
        <header onClick={() => this.props.onGetAllUser(12)} className={'header'}>
          <div className={'header__inner'}>
            <h1>ページタイトル</h1>
          </div>
        </header>
        <ul>
        {this.props.user.map((u, index) => {
          return <li key={ index }>{ u.id } : {u.text}</li>;
        })}
        </ul>
          {this.props.auth.isAuthenticated ?
          (<div>
            <button onClick={this.handleSignOut.bind(this)}>sign out</button>
          </div>)
          :
          (<div>
            <input type='email' name='email' onChange={this.handleChangeEmail}/><br />
            <input type='password' name='password' onChange={this.handleChangePassword}/><br />
            <button onClick={this.handleSignIn.bind(this)}>submit</button>
          </div>)}
      </div>
    )
  }
}

export default Header

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    }
    console.log(props)
  }

  componentWillMount() {
    axios.get('/api/users').then((res) => {
      this.setState({ users: res.data.user});
    })
  }

  render() {
    return (
      <div>
        <ul className={'u-grid'}>
          <li className={'u-col__20'}>
            NAME
          </li>
          <li className={'u-col__20'}>
            POINT
          </li>
          <li className={'u-col__20'}>
            UPDATED
          </li>
        </ul>
        <ul>
          {this.state.users.map((user, i) => <UserItem key={i} user={user}/>)}
        </ul>
      </div>
    )
  }
}


class UserItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const user = this.props.user
    return (
      <li className={'c-listUser u-grid'}>
        <div className={'c-listUser__cell u-col__20'}>
          <div className={'c-listUser__name'}>
            {user.name}
          </div>
        </div>
        <div className={'u-col__20'}>
          point: {user.point}
        </div>
        <div className={'u-col__20'}>
          最終ログイン: 
          {moment(user.updated).format('YYYY-MM-DD HH:mm:ss dddd')}
        </div>
      </li>
    )
  }
}

export default UserList

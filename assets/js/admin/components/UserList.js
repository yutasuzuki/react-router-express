import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    }

  }

  componentWillMount() {
    axios.get('/api/users').then((res) => {
      this.setState({ users: res.data.user});
    })
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user, i) => <UserItem key={i} user={user}/>)}
      </ul>
    )
  }
}


class UserItem extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    const user = this.props.user
    return (
      <li className='c-listUser'>
        <div className='c-listUser__cell'>
          {/*<div className='c-listUser__thumbnail'>
            <img src={user.thumbnail.src} />
          </div>*/}
          <div className='c-listUser__name'>
            {user.name}
          </div>
        </div>
        <div>
          mail: {user.mail}
        </div>
        <div>
          password: {user.password}
        </div>
        <div>
          最終ログイン: {user.updated_at}
        </div>
        {/*<div className='c-listUser__cell'>
          前回 {user.point.last}pt
        </div>
        <div className='c-listUser__cell'>
          合計 {user.point.total}pt
        </div>
        <div className='c-listUser__cell'>
          最終来店日 {user.updateAt}
        </div>*/}
      </li>
    )
  }
}

export default UserList

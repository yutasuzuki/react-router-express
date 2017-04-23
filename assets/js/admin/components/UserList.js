import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[
        {
          id: 1,
          name: '鈴木雄太',
          thumbnail: {
            src: 'https://pbs.twimg.com/profile_images/657430343755010048/lnINDXvY_normal.jpg'
          },
          point: {
            total: 24,
            last: 3,
          },
          card: {
            finished: 2,
          },
          updateAt: '2017/4/20',
        },
      ]
    }
    axios.get('/api/users').then((res) => {
      console.log(res)
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
          <div className='c-listUser__thumbnail'>
            <img src={user.thumbnail.src} />
          </div>
          <div className='c-listUser__name'>
            {user.name}
          </div>
        </div>
        <div className='c-listUser__cell'>
          前回 {user.point.last}pt
        </div>
        <div className='c-listUser__cell'>
          合計 {user.point.total}pt
        </div>
        <div className='c-listUser__cell'>
          最終来店日 {user.updateAt}
        </div>
      </li>
    )
  }
}

export default UserList

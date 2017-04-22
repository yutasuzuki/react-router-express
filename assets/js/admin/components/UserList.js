import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='c-listUser'>
        <div className='c-listUser__cell'>
          <div className='c-listUser__cell--thumbnail'>
            <img src='https://pbs.twimg.com/profile_images/657430343755010048/lnINDXvY_normal.jpg' />
          </div>
          <div className='c-listUser__cell--name'>
            ほげほげ
          </div>
        </div>
      </li>
    )
  }
}

export default UserList

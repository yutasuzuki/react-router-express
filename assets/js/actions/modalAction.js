// import axios from 'axios'

export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  }
}

export const getAllUsers = (users) => {
  return {
    type: 'GET_ALL_USERS',
    users
  }
}

// TODO: アクションで非同期通信をするなとエラーになる
// export const toggleModal = () => {
//   let items = [];
//   axios.get('/api/users').then((res) => {
//     console.log(res);
//     items = res.data
//   })
// }
//

import { createAction } from "redux-actions";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_ASYNC = "INCREMENT_ASYNC";
export const INCREMENT_IF_ODD = "INCREMENT_IF_ODD";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = createAction(INCREMENT_ASYNC);
export const incrementIfOdd = createAction(INCREMENT_IF_ODD);

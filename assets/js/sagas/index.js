import 'babel-polyfill'
import { takeEvery, delay } from "redux-saga";
import { put } from 'redux-saga/effects'
import { actionGetAllUsers } from '../actions/modalAction'

// TODO: 初回しか呼ばれていない
export default function* getAllUsers() {
  console.log(actionGetAllUsers)
  const users = yield getUsers()
  console.log(users)
  yield put(actionGetAllUsers(users))
}

const getUsers = () => {
  return fetch(`/api/users/12`).then((response) => {
    return response.json().then((json) => {
      return json
    })
  })
}

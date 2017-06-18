import 'babel-polyfill'
import { createAction } from 'redux-actions'
import { takeEvery } from "redux-saga"
import { put } from 'redux-saga/effects'
import { signIn } from '../actions/auth'
import axios from 'axios'

export const fetchAuth = () => {
  // return fetch(`/api/signIn`).then((response) => {
  //   return response.json().then((json) => {
  //     console.log(json)
  //     return json
  //   })
  // })
  return axios.get(`/api/signIn`).then(responce => responce);
}

export default function* rootSaga() {
  const authState = yield fetchAuth()
  yield put(signIn(authState))
}

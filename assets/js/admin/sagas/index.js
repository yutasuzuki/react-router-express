import 'babel-polyfill'
import { createAction } from 'redux-actions'
import { takeEvery } from "redux-saga"
import { put } from 'redux-saga/effects'
import { signIn, SIGN_IN } from '../actions/auth'
import axios from 'axios'

function* fetchAuth() {
  // return fetch(`/api/signIn`).then((response) => {
  //   return response.json().then((json) => {
  //     console.log(json)
  //     return json
  //   })
  // })
  return axios.get(`/api/signIn`).then(responce => responce);
}

function* signin() {
  const authState = yield fetchAuth()
  console.log('authState', authState)
  yield put(signIn(authState))
}

export default function * rootSaga() {
    yield * takeEvery(SIGN_IN, signin);
}
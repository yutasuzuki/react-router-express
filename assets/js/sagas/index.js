import 'babel-polyfill'
// import { takeLatest, takeEvery, delay } from "redux-saga";
// import { put, call } from 'redux-saga/effects'
// import { getAllUsers } from '../actions/modalAction'
//
// // TODO: 初回しか呼ばれていない
// export function* userAll() {
//   yield call(delay, 1000);
//   const users = yield getUsers()
//   yield put(getAllUsers())
// }
//
export function* getUsers() {
  return fetch(`/api/users/12`).then((response) => {
    return response.json().then((json) => {
      return json
    })
  })
}
//
// export default function* rootSaga() {
//   yield* takeEvery(getAllUsers, userAll);
// }

import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import {
  INCREMENT_ASYNC,
  increment
} from "../actions/modalAction";

export function* incrementAsync() {
  yield call(delay, 1000);
  const users = yield getUsers()
  console.log(users)
  yield put(increment(users));
}

export default function* rootSaga() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync);
}

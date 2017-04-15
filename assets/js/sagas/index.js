import 'babel-polyfill'
// import { takeLatest, takeEvery, delay } from "redux-saga";
// import { put, call } from 'redux-saga/effects'
// import { getAllUsers, GET_ALL_USERS } from '../actions/modalAction'

// TODO: 初回しか呼ばれていない
// export function* userAll() {
//   const users = yield call(getUsers);
//   yield put(getAllUsers(users))
// }
//
// export default function* rootSaga() {
//   yield* takeEvery(GET_ALL_USERS, userAll);
// }

import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import {
  INCREMENT_ASYNC,
  increment
} from "../actions/modalAction";

export function getUsers() {
  return fetch(`/api/users/12`).then((response) => {
    return response.json().then((json) => {
      return json
    })
  })
}

export function* incrementAsync() {
  const users = yield call(getUsers);
  yield put(increment(users));
}

export default function* rootSaga() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync);
}

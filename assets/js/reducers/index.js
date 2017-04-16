import { combineReducers } from 'redux'
import auth from './auth'
import modal from './modal'
import user from './user'

function counter(state = 0, action) {
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "INCREMENT_IF_ODD":
      return (state % 2 !== 0) ? state + 1 : state;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const reducer = combineReducers({
  auth,
  modal,
  user,
});

export default reducer

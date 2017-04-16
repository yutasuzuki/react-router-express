import { SIGN_IN, SIGN_OUT } from '../actions/auth'

const auth = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(state)
      return Object.assign({}, state, {
        isAuthenticated: true
      })
      break;
    case SIGN_OUT:
      return Object.assign({}, state, {
        isAuthenticated: false
      })
      break;
    default:
      return state
  }
};
export default auth

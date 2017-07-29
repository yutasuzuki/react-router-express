import { SIGN_IN, SIGN_OUT } from '../actions/auth'

const auth = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
        cid: action.data.cid,
      })
      break;
    case SIGN_OUT:
      return Object.assign({}, state, {})
      break;
    default:
      return state
  }
};
export default auth

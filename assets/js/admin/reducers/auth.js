import { SIGN_IN, SIGN_OUT } from '../actions/auth'

const auth = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log('action.payload.data', action.payload.data)
      console.log('state', state)
      return Object.assign({}, state, {
        uid: action.payload.data.uid,
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

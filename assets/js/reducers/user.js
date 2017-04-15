import { GET_ALL_USERS, GET_USER } from '../actions/user'

const user = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return [...state, action.payload.user]
      break;
    default:
      return state
  }
};
export default user

import { combineReducers } from 'redux'

const modal = (state = { status: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      console.log('TOGGLE_MODAL', state)
      return Object.assign({},state, {status: !state.status})
      break;
    default:
      return state
  }
};

const reducer = combineReducers({
  modal
});

export default reducer

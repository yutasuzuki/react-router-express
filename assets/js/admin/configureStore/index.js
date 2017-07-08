import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
    )
  )
  return store
}

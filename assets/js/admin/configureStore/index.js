import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { logger } from 'redux-logger'

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      logger
    )
  )
  return store
}

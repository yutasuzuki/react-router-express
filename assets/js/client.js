import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Router from './router'
import reducer from './reducers'

const preloadedState = window.__PRELOADED_STATE__
console.log(preloadedState)
const store = createStore(reducer, preloadedState)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

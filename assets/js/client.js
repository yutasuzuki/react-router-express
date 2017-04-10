import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './router'
import configureStore from './configureStore'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

import express from 'express'
import session from 'express-session'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Router from './assets/js/router'
import { StaticRouter } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './assets/js/reducers'
import controllers from './controllers'
const app = express()
// TODO: configureStoreからimportするように変更
const store = createStore(reducer, {})

// add static path
app.use(express.static('public'))

// session
app.use(session({
    secret: 'lunchTimer',
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: null
    }
}))

// add API path
app.use('/api/', controllers)

// add top page routing
app.get(/^(?!\/api\/).*$/, (req, res) => {
  const context = {}
  const elem = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Router />
      </StaticRouter>
    </Provider>
  )
  const preloadedState = store.getState()
  res.send(createLayout(elem, preloadedState))
})

const createLayout = function(elem, preloadedState) {
  return `<!DOCTYPE html>
<html lang='ja'>
  <head>
    <meta charset='utf-8'>
    <title>Palette<\/title>
  <\/head>
  <body>
    <div id='app'>${elem}<\/div>
    <script id='js-script'>
    // WARNING: See the following for security issues around embedding JSON in HTML:
    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
    (function(){
      var ele = document.getElementById('js-script');
      ele.parentNode.removeChild(ele);
    }());
    <\/script>
    <script type='text\/javascript' src='\/js\/client.js'><\/script>
  <\/body>
<\/html>`;
}

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

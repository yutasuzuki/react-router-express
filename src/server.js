import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import BasicExample from './router'
import { StaticRouter } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

// init express
const app = express()

// add static path
app.use(express.static('public'))

const store = createStore(reducer, {})

// add top page routing
app.get('*', (req, res) => {
  const context = {}
  const elem = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <BasicExample />
      </StaticRouter>
    </Provider>
  )
  const preloadedState = store.getState()
  console.log(preloadedState)
  res.send(temp(elem, preloadedState))
})

const temp = function(elem, preloadedState) {
  return `<!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="utf-8">
      <title>サーバーサイドレンダリング<\/title>
    <\/head>
    <body>
      <div id="app">${elem}<\/div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      <\/script>
      <script type="text\/javascript" src="\/client.js"><\/script>
    <\/body>
  <\/html>`;
}

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

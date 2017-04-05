import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import BasicExample from './router'
import Counter from './components/Counter'
import { StaticRouter } from 'react-router'

// init express
const app = express()

// add static path
app.use(express.static('public'))


// add top page routing
app.get('*', (req, res) => {
  const context = {}
  const elem = ReactDOMServer.renderToString(
  <StaticRouter
    location={req.url}
    context={context}
  >
    <BasicExample />
  </StaticRouter>
)
  res.send(temp(elem))
})

const temp = function(elem) {
  return `<!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="utf-8">
      <title>サーバーサイドレンダリング<\/title>
    <\/head>
    <body>
      <div id="app">${elem}<\/div>
      <script type="text\/javascript" src="\/client.js"><\/script>
    <\/body>
  <\/html>`;
}

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

import express from 'express'
import session from 'express-session'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Router from './assets/js/admin/router'
import reducer from './assets/js/admin/reducers'
import controllers from './controllers'
import bodyParser from 'body-parser'
import signInHandler from './middlewares/signInHandler'
import signUpHandler from './middlewares/signUpHandler'
import sessionHandler from './middlewares/sessionHandler'
import moment from 'moment'

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
    maxAge: 10000
  }
}))

// add API path
app.use('/api/', controllers)
app.use(bodyParser.urlencoded({ extended: true }))

function adminHandler (req, res) {
  const context = {}
  const elem = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} basename='/admin'>
        <Router />
      </StaticRouter>
    </Provider>
  )
  const preloadedState = store.getState()
  res.send(createLayout(elem, preloadedState))
}

const createLayout = function(elem, preloadedState) {
  return `<!DOCTYPE html>
<html lang='ja'>
  <head>
    <meta charset='utf-8'>
    <title>Palette - 管理画面 - <\/title>
    <link href='//fonts.googleapis.com/css?family=Lato:100,300,400,900' rel='stylesheet'>
    <link href='/css/admin/style.css' rel='stylesheet'>
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
    <script src='\/js\/app.js'><\/script>
  <\/body>
<\/html>`;
}


app.get('/',(req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`)
})

// add react routing
app.post(/^\/admin/, signInHandler, adminHandler)
app.get(/^\/admin/, sessionHandler, adminHandler)

app.get('/signin',(req, res) => {
  res.sendFile(`${__dirname}/public/html/signin.html`)
})

app.get('/signup',(req, res) => {
  res.sendFile(`${__dirname}/public/html/signup.html`)
})
app.post('/signup', signUpHandler, adminHandler)

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Router from './assets/js/router'
import { StaticRouter } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './assets/js/reducers'

// init express
const app = express()

// add static path
app.use(express.static('public'))

const store = createStore(reducer, {})

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
    <script id='js-load-state'>
    // WARNING: See the following for security issues around embedding JSON in HTML:
    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
    (function(){
      var ele = document.getElementById('js-load-state');
      ele.parentNode.removeChild(ele);
    }());
    <\/script>
    <script type='text\/javascript' src='\/js\/client.js'><\/script>
  <\/body>
<\/html>`;
}

const ApiRouter = express.Router();

ApiRouter.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

ApiRouter.get('/', function(req, res) {
    res.json({ message: 'Successfully Posted a test message.' });
});

app.use('/api/', ApiRouter);

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

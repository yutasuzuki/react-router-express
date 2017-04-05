import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Counter from './components/Counter'
import BasicExample from './router'

render(
  <BrowserRouter>
    <BasicExample />
  </BrowserRouter>,
  document.getElementById('app')
)

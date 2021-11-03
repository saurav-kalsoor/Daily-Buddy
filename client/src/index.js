// index.js
import React from 'react'
import { render } from 'react-dom'
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '10px',
  type: types.INFO,
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)

render(<Root />, document.getElementById('root'))
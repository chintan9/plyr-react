import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './custom-audio-player'
import App from './custom-hls-player'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

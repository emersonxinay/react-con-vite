import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GiftApp from './components/GiftApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftApp/>
    <App />
    
  </React.StrictMode>
)

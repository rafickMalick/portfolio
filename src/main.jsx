import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './i18n/config' // i18n initialization
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

// Static text fallback for non-JS-executing fetchers (index.html#static-fallback,
// CSS-hidden once JS runs). Remove it outright so no crawler that reads raw text
// content while still running scripts sees it duplicated alongside the real app.
document.getElementById('static-fallback')?.remove()

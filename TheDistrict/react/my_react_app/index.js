import React from 'react'
import ReactDOM from 'react-dom/client'
import MonPremierComposant from "./jsx/MonPremierComposant";

ReactDOM.createRoot(document.getElementById('cat-app')).render(
    <React.StrictMode>
        <MonPremierComposant />
    </React.StrictMode>,
)
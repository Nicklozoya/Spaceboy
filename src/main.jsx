import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Spacestate } from './Components/Spacestate.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
<Spacestate>
    <App />
</Spacestate>


)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Planetlist from './Components/Planetlist.jsx'
import Planetmodal from './Components/Planetmodal.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
 </BrowserRouter>

)

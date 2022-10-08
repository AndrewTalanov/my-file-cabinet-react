import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/App'
import Login from './pages/login/Login'
import {  BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path='app' element={<App />}/>
        </Routes>   
    </BrowserRouter>
  </React.StrictMode>
)

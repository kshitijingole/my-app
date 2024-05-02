import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Aboutus } from './App';
import { Contactus } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/about-us' element={<Aboutus />}/>
            <Route path='/contact-us' element={<Contactus />}/>
        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

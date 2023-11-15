import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

// week-3 navbar (install React Router lib first $ npm -i react-router-dom@6)
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />;
    </BrowserRouter>
);

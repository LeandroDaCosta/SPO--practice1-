import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './THeader';
import MidleHeader from './components/MidleHome.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header/>
     <MidleHeader/>
    
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import UserStore from './context/userContext'

ReactDOM.render(
  <React.StrictMode>
   <UserStore>
    <App />
    </UserStore>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { FavoritesContextProvider } from "./contexts/FavoritesContextProvider";

ReactDOM.render(
  <React.StrictMode>
    {/* <FavoritesContextProvider> */}
    <App />
    {/* </FavoritesContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
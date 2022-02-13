import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from './components/Search';
import { Favorites } from './components/Favorites';
import { Profiles } from './components/Profiles';
import { LogIn } from './components/LogIn';
// import { FavoritesContextProvider } from "./contexts/FavoritesContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Profiles/>} />
      <Route path="/home" element={<Profiles/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/login" element={<LogIn/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
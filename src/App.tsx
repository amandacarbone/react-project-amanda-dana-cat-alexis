import React, { useState } from 'react';
import './App.css';
import { NavLink, Outlet } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

function App() {

  const [nav, setNav] = useState({
    isPaneOpen: false,
  });

  return (
    <div className="App">

      <div className="header">

        <h1>Tinder for Dogs</h1>

        <button className="material-icons" onClick={() => setNav({isPaneOpen: true})}>menu</button>

        <SlidingPane
        className="nav"
        isOpen={nav.isPaneOpen}
        from="right"
        onRequestClose={() => setNav({isPaneOpen: false})}>

        <NavLink to="/home" onClick={() => setNav({isPaneOpen: false})}>Home</NavLink>
        <NavLink to="/search" onClick={() => setNav({isPaneOpen: false})}>Search</NavLink>
        <NavLink to="/favorites" onClick={() => setNav({isPaneOpen: false})}>Favorites</NavLink>
        <NavLink to="/login" onClick={() => setNav({isPaneOpen: false})}>Sign Out</NavLink>

        <Outlet/>

      </SlidingPane>

      </div>

    </div>
  );
}

export default App;

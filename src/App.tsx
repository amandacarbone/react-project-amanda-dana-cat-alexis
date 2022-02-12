import React from 'react';
import './App.css';
import { Details } from './components/Details';
import { Profiles } from './components/Profiles';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
        <Details></Details>
        <Search></Search>
        <Profiles></Profiles>
    </div>
  );
}

export default App;

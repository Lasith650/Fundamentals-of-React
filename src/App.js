import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
       <Greet name="Lasith"/>
       <Greet name="Manaram"/>
       <Greet name="Jayalath"/>
       <Welcome/>
    </div>
  );
}

export default App;

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
       <Greet name="Lasith" heroName="Thaththa">
        <p>This is the Children</p>
       </Greet>
       <Greet name="Manaram" heroName="Amma">
        <button>Submit</button>
       </Greet>
       <Greet name="Jayalath" heroName="White"/>
       <Welcome name="Kasun"/>
       <Welcome name="Perera"/>
    </div>
  );
}

export default App;

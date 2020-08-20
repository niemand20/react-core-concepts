import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var  person = {
    name : "Mahfuz",
    job : "Singer"
  }
  var person2 = {
    name: "eva rahman",
    job: "kokila"
  }
  var style = {
    color:'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1  className = "" style = {style}>my heading: {person.name+" "+person.job}</h1>
        
  <h1 style = {{backgroundColor :'cyan', color:'gray'}}>my heading: {person2.name+" "+person2.job}</h1>
        <p>My First React Paragraph</p>
      </header>
    </div>
  );
}

export default App;

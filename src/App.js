import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks  = ['manna','jafor','salman','razzak']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <Person name ={nayoks[1]} naika = 'Shabnoor' food = 'pizza'></Person>
        <Person name = 'Manna' naika = 'Purnima' food = 'burger'></Person>
        
      </header>
    </div>
  );
}
function Person(props){
  const personStyle = {
    border: '5px solid red',
    margin: '10px',
    padding: '10px'
  }
  console.log(props);
  return (
   <div style = {personStyle}>
    <h1>Name: {props.name}</h1>
  <h3>naikaName:{props.naika}</h3>
  </div>)
}


export default App;

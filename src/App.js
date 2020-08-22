import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks  = ['manna','sakib','salman','razzak','shuvo','khan'];
  const products = [
    {name: 'photoshop', price: '$99'},
    {name: 'illustrator', price: '$60.99'},
    {name: 'Pdf reader', price: '$6.99'},
    {name: 'Premier element', price: '$249.99'}
  ]
  // const productNames=products.map(product => product.name);
  // console.log(productNames);
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=> <li>{product.name}</li>)
          }
            
        </ul>
        {
          products.map(product=> <Products product = {product}></Products>)
        }
        {/* <Products product = {products[0]}></Products>
        <Products product = {products[1]}></Products>
        <Products product = {products[2]}></Products> */}

        {/* <Products name = {products[1].name} price = {products[1].price}></Products>
        <Products name = {products[2].name} price = {products[2].price}></Products> */}
        {/* <Person name ={nayoks[1]} naika = 'Shabnoor' food = 'pizza'></Person>
        <Person name = 'Manna' naika = 'Purnima' food = 'burger'></Person> */}
        
        
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(10);
  //const  handleIncrease = () =>setCount(count+1);
  //const handleDecrease = () => setCount(count-1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove = {() =>setCount(count+1)}>Increase</button>
      <button onClick = {() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data))
  },[])

  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user=> <li>{user.name}{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Products(props){
  const productStyle = {
    border:'5px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightsalmon',
    height:'300px',
    width: '300px',
    float: 'left',
    margin:'10px'
  }
  const {name,price} = props.product;
  console.log(name,price);
  return (
    <div style={productStyle}>
      <h1>{props.product.name} </h1>
      <h3>{props.product.price}</h3>
      <h1></h1>
      <button>Buy now</button>

    </div>
  )
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

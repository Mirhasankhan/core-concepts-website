// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const noyoks = ['manna', 'rubel', 'tarek', 'bappi', 'shuvo'];
  const jobs = ['nothing', 'ttcm', 'banker']
  const products = [{Name: 'Photoshop', Price: '$99.99'},
                    {Name: 'Illustrator', Price: '$66.99'},
                    {Name: 'PDF Reader', Price: '$6.99'}];
  
  const myFriends = [{Name: 'arman', Job: 'Foreigner'},
                      {Name: 'Tamjid', Job: 'Jobless'},
                      {Name: 'Rafi', Job: 'Student'}];

  // const productNames = products.map(product => product.Name);
  
  var style = {
    color: 'red',
    backgroundColor: 'green',

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>Exploring React{5+3}</h1>
        
        <Counter></Counter>

        <Users></Users>

        {
          myFriends.map(fd => <Friend fd={fd}></Friend>)
        }

        {
          noyoks.map(nayok => <li>{nayok}</li>)
        }

        {
          products.map(product => <li>{product.Name}</li>)
        }
        <Product name={products[0].Name} price={products[0].Price}></Product>
        <Product name={products[1].Name} price={products[1].Price}></Product>
        <Product name={products[2].Name} price={products[2].Price}></Product>


        <Person name="Md Rubel" Job="Acting"></Person>
        <Person name="Samsul Alom" Job="Marketing"></Person>
        <Person name={noyoks[2]}  Job={jobs[1]}></Person>
      </header>
    </div>
  );
};

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Name: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {setCount(count + 1)}
  // const handleDecrease = () => {setCount(count - 1)}
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => {setCount(count - 1)}}>Decrease</button>
    </div>
  )
}


function Friend(props){
  const friendStyle={border: '3px solid blue', margin:'10px', padding: '10px'}
  return (
    <div style={friendStyle}>
      <h2>Name:{props.fd.Name}</h2>
      <p>Job: {props.fd.Job}</p>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '600px',
    float: 'left',
    margin: '10px'
    
  }
  return (
    <div style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price:{props.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Person (props) {
  return <div style={{border: '3px solid red', margin: '5px', padding:'10px'}}> 
    <h1>what is your name?</h1>
    <h3>my name is {props.name}</h3>
    <h1>What is your job?</h1>
    <h3>My Work is {props.Job}</h3>
    
  </div>
}

export default App;


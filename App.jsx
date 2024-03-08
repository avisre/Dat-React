import { useState,useEffect } from 'react'

import './App.css'
import{User} from './user'
import axios from 'axios';

function App() {
const[list,setList]=useState([]);
const[da,Setda]=useState('');


  const add=()=>{
  
  axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${da}&apikey=TQMYPOEMECCN7R7F`)
  .then(res => {
    console.log(res.data["Global Quote"]["05. price"]); // Access res.data instead of res.json()
    const newList=[...list,da];
    setList(newList);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  }
  useEffect(() => {
  
  }, []);

  const data=(e)=>{
    Setda(e.target.value);
  }

   return(
    <>
      <div className='App'>
     <input onChange={data} name="myInput" />

       
<button onClick={add}>Click me!</button>
      </div>

      <div>
{list.map((items,key)=>{
  return <p key={items}>{items}</p>
})}
      </div>
      </>
 
  );
}

export default App

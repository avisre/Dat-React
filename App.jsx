import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  const [ticker, setTicker] = useState('');
  const [price, setPrice] = useState('');

  const add = () => {
    axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=6VWT72JNHHLBF3MH`)
      .then(res => {
        const newPrice = res.data["Global Quote"]["05. price"];
        setPrice(newPrice);
        const newItem = { ticker: ticker, price: newPrice };
        const newList = [...list, newItem];
        setList(newList);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const handleTickerChange = (e) => {
    setTicker(e.target.value);
  }

  return (
    <>
      <div className='App'>
        <input onChange={handleTickerChange} name="myInput" />
        <button onClick={add}>Click me!</button>
      </div>

      <div>
        {list.map((item, key) => {
          return (
            <p key={key}>{item.ticker}: {item.price}</p>
          );
        })}
      </div>
    </>
  );
}

export default App;

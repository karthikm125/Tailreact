import React, { useState } from 'react'


export const Count = () => {
    const [count, setCount] = useState(0);
    const [data, setdata] = useState([]);
    let increment = () => {
        setCount(count + 1);
      };
      let decrement = () => {
        setCount(count - 1);
      };
      let adddata=() =>{
        setdata({ name: 'ajay', age: 19 });
      }
      console.log(data);
      
    
  return (
    <div>
        <h1>{count}</h1>
        <button onMouseOver={increment}>increment</button><br></br>
        <button onClick={decrement}>decrement</button>
        <button onClick={adddata}>add</button>
    </div>
  )
}

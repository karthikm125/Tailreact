import React, { useEffect, useState } from 'react'

export const Effect = () => {
    const[count,setcount]=useState(0)
    let increment=()=>{
        setcount(count+1)
    }
    

    useEffect(()=>{
        {console.log("running")
        }
    },[])
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>click</button>
    </div>
  )
}
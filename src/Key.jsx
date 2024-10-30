import React, { useState } from 'react'

const Key = () => {
    const data=[
        {id:1,name:"jjj",qty:1},
        {id:2,name:"jjjju",qty:2}
    ]
const[datas,setdatas]=useState(data)

const change=(id)=>{
    const newitem=datas.map((item)=>
    item.id===id ? {...item ,qty:item.qty+1}:item
    )
    setdatas(newitem)
}
  return (
    <div>
        {datas.map((item)=>(
            <div key={item.id}>
                <h2>{item.name}</h2>
                <h2>{item.qty}</h2>
                <button onClick={()=>change(item.id)}>+</button>
            </div>

        ))}
    </div>
  )
}

export default Key
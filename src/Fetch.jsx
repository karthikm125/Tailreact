import React, { useState } from 'react'

export const Fetch = () => {
    const [fetch, setfetch] = useState([]);
    const users=[
        {name:'user 1'},
        {name:'user 2'},
    ]
    setTimeout(() => {
        setfetch(users);
    }, 4000);
  return (
    <div className='flex justify-center items-center bg-lime-900 h-screen flex-col'>
    <h2 className='font-bold text-3xl'>user list</h2>
      {fetch.map((user)=>(
        <h2 className='font-bold text-xl'>{user.name}</h2>
      ))}
    </div>
  )
}

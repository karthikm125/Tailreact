import React, { useState } from 'react'

export const Face = () => {

    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        
        

    }
  return (
    <div>
        
    </div>
  )
}

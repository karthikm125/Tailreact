import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault(); 
    setEmail(email)
    console.log(email);
    
  
  };
  const handlechange=(event)=>{
    setEmail({...email,[event.target.name]:event.target.value})
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-sky-600">Facebook</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sky-600" htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              onChange={handlechange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sky-600" htmlFor="password">Password</label>
            <input
              type="password"
              name='password'
           
              onChange={handlechange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

      
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


import React, { useState } from 'react';

const Admin = () => <h2>Welcome, Admin!</h2>;
const User = () => <h2>Welcome, User!</h2>;
const Guest = () => <h2>Welcome, Guest!</h2>;

function Main() {
  const [selectedPage, setSelectedPage] = useState(null);

  const renderContent = () => {
    switch (selectedPage) {
      case 'admin':
        return <Admin />;
      case 'user':
        return <User />;
      case 'guest':
        return <Guest />;
      default:
        return <h2>Please select </h2>;
    }
  };

  return (
    <div className='m-20 bg-black text-white text-center mt-20'>
      <h1>Select a Role</h1>
      <div className='text-white bg-black m-3 p-4 space-x-7'>
        <button onClick={() => setSelectedPage('admin')}>Admin</button>
        <button onClick={() => setSelectedPage('user')}>User</button>
        <button onClick={() => setSelectedPage('guest')}>Guest</button>
      </div>
      <div >
        {renderContent()}
      </div>
    </div>
  );
}

export default Main;


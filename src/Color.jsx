import React, { useState } from 'react';

export const Color = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label>Toggle Switch</label>
      <div
        style={{
        
          backgroundColor: isChecked ? 'blue' : 'Red',

        }}
      >
        Box
      </div>
    </div>
  );
};
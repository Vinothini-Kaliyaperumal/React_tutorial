import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable "count" and initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({ name: '', age: '' });

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleAgeChange = (e) => {
    setUser({ ...user, age: e.target.value });
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Name" 
        value={user.name} 
        onChange={handleNameChange} 
      />
      <input 
        type="number" 
        placeholder="Age" 
        value={user.age} 
        onChange={handleAgeChange} 
      />
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Form;

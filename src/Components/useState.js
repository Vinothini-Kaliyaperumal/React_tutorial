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


function findDisappearedNumbers(nums) {
  const n = nums.length;
  const result = [];

  // Check for numbers from 1 to n
  for (let i = 1; i <= n; i++) {
      if (!nums.includes(i)) {
          result.push(i);
      }
  }

  return result;
}

// Example usage:
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
console.log(findDisappearedNumbers([1, 1])); // Output: [2]


import { useState } from 'react';

function Counter() {
  // Declare a state variable `count` with initial value 0
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

expimport React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, []); // Empty array: Effect runs once when component mounts

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
ort default Counter;

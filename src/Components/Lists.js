function List() {
    const fruits = ['Apple', 'Banana', 'Cherry'];
  
    return (
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    );
  }
  
  export default List;
  

  import React, { useState, useEffect } from 'react';

const App = () => {
  // State variable
  const [count, setCount] = useState(0);

  // Effect hook
  useEffect(() => {
    // This runs when the component mounts
    document.title = `Count: ${count}`;

    // Cleanup function (runs when the component unmounts)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Dependency array

  return (
    <div>
      <h1>React Hooks Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default App;

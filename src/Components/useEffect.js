import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will run after every render
    document.title = `You clicked ${count} times`;

    // Optional cleanup function
    return () => {
      console.log('Cleaning up');
    };
  }, [count]); // The effect depends on count

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

import React, { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Clean up
  }, []); // Empty array to run effect once (on mount)

  return <div>Time: {time}s</div>;
}

export default Timer;



import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render
  useEffect(() => {
    // Update the document title with the current count
    document.title = `You clicked ${count} times`;

    // Optional cleanup function (if needed) can be returned here
  }, [count]); // Dependency array: Effect runs only when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default DocumentTitleUpdater;

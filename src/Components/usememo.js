import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ count }) {
  const computedValue = useMemo(() => {
    // Expensive calculation
    return count * 2;
  }, [count]);

  return <p>Computed Value: {computedValue}</p>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent count={count} />
    </div>
  );
}

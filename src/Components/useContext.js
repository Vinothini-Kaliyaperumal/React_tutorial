import React, { useContext } from 'react';

const MyContext = React.createContext();

function Parent() {
  return (
    <MyContext.Provider value="Hello from context">
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const message = useContext(MyContext);
  return <div>{message}</div>;
}

export default Parent;



import React, { useContext } from 'react';

// Create a Context
const MyContext = React.createContext();

function Parent() {
  const value = "Hello from context!";

  return (
    // Provide the context value to child components
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  // Access the context value using useContext
  const message = useContext(MyContext);

  return <p>{message}</p>;  // Display the context value
}

export default Parent;

import React, { createContext, useContext } from 'react';

const MyContext = createContext();

function Child() {
  const value = useContext(MyContext);
  return <p>Value from context: {value}</p>;
}

function Parent() {
  return (
    <MyContext.Provider value="Hello, World!">
      <Child />
    </MyContext.Provider>
  );
}

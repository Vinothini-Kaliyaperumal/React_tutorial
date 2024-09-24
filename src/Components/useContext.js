import React, { createContext, useState } from 'react';

// Create a context with a default value
const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello, World!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("New Value!")}>Change Value</button>
    </div>
  );
};
import React from 'react';
import ReactDOM from 'react-dom';
import { MyProvider } from './MyProvider';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

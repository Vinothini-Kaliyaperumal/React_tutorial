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


// ThemeContext.js
import React, { createContext, useState } from 'react';

// Create a Context
export const ThemeContext = createContext();

// Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Initial theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemedComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use the context

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

import React, { useContext } from 'react';

// Step 1: Create a context
const UserContext = React.createContext();

function App() {
  const user = { name: "John", age: 25 };

  return (
    // Step 2: Use a provider to pass down the context value
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}


export default ThemedComponent;

import React from 'react';
import { MyContext } from './MyContext';

function App() {
    const user = { name: 'John', age: 25 };

    return (
        // Step 2: Providing the context value
        <MyContext.Provider value={user}>
            <ChildComponent />
        </MyContext.Provider>
    );
}



// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';




import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function ChildComponent() {
    // Step 3: Consuming the context value using useContext
    const user = useContext(MyContext);

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <p>Age: {user.age}</p>
        </div>
    );
}
import ThemedComponent from './ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;

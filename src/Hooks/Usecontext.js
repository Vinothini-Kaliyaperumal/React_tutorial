import React, { createContext, useState } from 'react'
import Context1 from './Context1'

export const ThemeContext = createContext();

function Usecontext() {

    const [theme, setTheme] = useState("skyblue")
    
    const toggleTheme = () => {
        setTheme((curr) => (curr === "skyblue" ? "green" : "skyblue"));
    }
  return (
    <ThemeContext.Provider 
    value={{
        theme : theme, //theme
        }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Main</h1>
      <Context1 />
    </ThemeContext.Provider>
  )
}

export default Usecontext

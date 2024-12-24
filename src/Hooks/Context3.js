import React, { useContext } from 'react'
import { ThemeContext } from './Usecontext'

function Context3() {

    const {theme} = useContext(ThemeContext)
    // console.log("ContextValue", ContextValue);
    
    const textStyle = {
        backgroundColor : theme === "skyblue" ? "green" : "lightgreen",
        color : theme === "skyblue" ? "lightgreen" : "green"
    }
  return (
    <div>
      <h1 style={textStyle}>Context 3</h1>
    </div>
  )
}

export default Context3

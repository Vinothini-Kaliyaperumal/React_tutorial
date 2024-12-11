import React, {useRef, useState, } from 'react'

function Useref() {

    const [input, setInput] = useState('');
    const inputRef = useRef();

    console.log("Getting rendering")

    const display = () =>{
        console.log(inputRef.current.value)
    }
  return (
    <div>
    
      <h1>Input</h1>
      <input type='text'
      ref = {inputRef}
    //   value={input}
    //   onChange={(event) => setInput(event.target.value)} 
    />
    <button onClick = {display}>Show Input</button>
   
      <h3>My Name is {inputRef.current?.value} </h3>
    </div>
  )
}

export default Useref

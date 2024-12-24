import React, {useEffect, useRef, useState, } from 'react'

const RefHook = () => {

    const [input, setInput] = useState("");
    const inputRef = useRef();

    console.log("Getting rendering")

    useEffect(() => {
        inputRef.current = input;
    }, [input]);

    const display = () =>{
        console.log(inputRef.current);
        // inputRef.current.focus();
    }
  return (
    <div>
    <h1>Input</h1>
      <input
      //  ref = {inputRef} 
       type='text'
       value={input}
       onChange={(event) => setInput(event.target.value)} 
    />
     <h3>My Name is {input} </h3>
     <h3>My Name is {inputRef.current} </h3>
    <button type='submit' onClick = {display}>Show Input</button>
   </div>
  );
};

export default RefHook;

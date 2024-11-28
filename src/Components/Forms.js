import React, { useState } from 'react'

function Forms() {

  const [name, setName] = useState("")
  const [headingText, submitheading] = useState()

    function handleChange(event){
        // console.log("Data Changed");
        // console.log(event.target.value);
        // console.log(event.target.type);
        // console.log(event.target.placeholder);
        setName(event.target.value);
    }
    function handleClick(event){
        // console.log("Submit");
        submitheading(name);
        event.preventDefault();
    }

  return (
    <div>
      <h1>Hello {name}</h1>
      <h1>After Submit {headingText}</h1>

      <form onSubmit={handleClick}>
        <label>Enter Name : </label>
      <input onChange={handleChange} type = "text" placeholder="Enter Your Name" />
      <button type='submit'>Submit</button>
      <textarea onChange={handleChange}></textarea>
      <select  onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      </form>
    
    </div>
  )
}

export default Forms;


import React from 'react'

function Forms() {
    function handleChange(){
        console.log("Data Changed");
        
    }
  return (
    <div>
      <input onChange={handleChange} type = "text" placeholder="Enter Your Name" />
      <button >Submit</button>
    </div>
  )
}

export default Forms

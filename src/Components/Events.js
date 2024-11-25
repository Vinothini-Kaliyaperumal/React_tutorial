import React from 'react'

function Events() {
    console.log("Clicked");
    
  return (
    <div>
      <button onClick={Events}>Click Me!</button>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
        
      }} />
    </div>
  )
}

export default Events

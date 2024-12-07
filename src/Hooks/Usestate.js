import React, {usestate} from 'react'

function Usestate() {
    let x = 1;

    function handleAdd(){
        x = x + 1 //x++ x+=
        console.log("x", x);
        
    }

  return (
    <div>
      <h1>{x}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Usestate

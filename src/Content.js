import React from 'react'
import { useState } from 'react';

function Content() {

    const [name, setName] = useState("Books");
    
    function handleNameChange(){
        const names = ['Books', 'Notes', 'Pencil'];
        const int = Math.floor(Math.random()*3);
        setName(names[int]);
      }

    //   const handleClick = (e) => {
    //     console.log(e.target.innerText)
    //   }

    //   const handleClick2 = (name) => {
    //     console.log(`Thanks for learning ${name}` )
    //   }

function namee(){
    return console.log("Visit My Web Page")
}

    const [count, setCount] = useState(99);
    // const [name, setName] = useState(() => namee());

    function incrementfunction(){
        setCount((prevcount) => {return prevcount + 1})
    }
    function decrementfunction(){
        setCount((prevcount) => {return prevcount - 1})
    }


  return (
    // <main>
    //   <p onDoubleClick={() => handleClick2("Vino")}> Himalayan Mountain {handleNameChange()}</p>
    //   <button onClick={(e) => handleClick(e)}>Learning</button>
    // </main>

<main>
<p> Himalayan Mountain {name}</p>
<button onClick={handleNameChange}>Learning</button><br></br><br></br>
<button onClick={decrementfunction}>-</button><br></br>
<span>{count}</span><br></br>
<button onClick={incrementfunction}>+</button>
</main>
  )
}

export default Content

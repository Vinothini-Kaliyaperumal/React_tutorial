import React from 'react'

function Arrowfunction() {
    hello = function() {
        return "Hello World!";
      }
      document.getElementById("demo").innerHTML = hello();
  return (
    <div>
      <p id='demo'></p>
    </div>
  )
}

export default Arrowfunction

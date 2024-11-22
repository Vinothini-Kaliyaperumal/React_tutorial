import React from 'react'
import ReactDOM from 'react-dom'

function Functional() {
  return (
    <div>
       <h1>Functional Component</h1>
           <p>Example</p>
    </div>
  )
}
function Navbar(){
    return(
        <div>
            <h2>Navbar</h2>
        </div>
    )
}
function Slidebar(){
    return(
        <div>
            <h2>Slidebar</h2>
        </div>
    )
}
function Mainbar(){
    return(
        <div>
          <Functional />
          <Navbar />
          <Slidebar />
        </div>
    )
}

ReactDOM.render(<Mainbar />, document.getElementById('root'));

export default Functional;



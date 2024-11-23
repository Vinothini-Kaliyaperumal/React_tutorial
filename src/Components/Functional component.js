import React from 'react'
// import ReactDOM from 'react-dom'

function Functional() {
  return (
    <div>
       <h2>Functional Component</h2>
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
 function  Slidebar(){
    return(
        <div>
            <h2>Slidebar</h2>
        </div>
    )
}
function Main(){
    return(
        <div>
          <Functional />
          <Navbar />
          <Slidebar />
          <h2>Vinooooo</h2>
        </div>
    )
}

// ReactDOM.render(<vino />, document.getElementById('root'));

export default Main;



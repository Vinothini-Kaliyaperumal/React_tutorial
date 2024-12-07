// import React from 'react'

// const Jsx = () => {
//   return (
//     <div>
//       Kaliyaperumal<br></br>
//       Vasantha<br></br>
//       Priyadharshini<br></br>
//       Vinothini<br></br>
//       Santhiya<br></br>
//     </div>
//   )
// }
// export default Jsx




// REACT JSX TOPIC:

import React from 'react'
let customCSS = "code";
const logginIn =true;
const greetings = logginIn ? <p>Welcome back!!</p> : <p>Please login.</p>;
const items = ["item1", "item2", "item3", "item4"]

const Jsx = () => {
  return (
    // JSX Fragements:
    <div>
      <h2 className='head'>Learning React</h2>
      <p className='para'>Vino</p>
      
{/* {Javascript expression in JSX} */}
    <p className={customCSS} style={{fontSize:'25px', fontStyle:'italic'}}>10 + 20 ={10+20}</p>

    {/* {JSX with conditional rendering:} */}
    {greetings}

    {/* JSX with Lists: */}
    <ol>{items.map((item, intex) => (<li key={intex}>{item}</li>))}</ol>
    </div>
  )
}

export default Jsx;











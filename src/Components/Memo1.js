import React, {memo} from 'react'

function Memo1({val}) {
    console.log("Memo1 re-rendering");
    
  return (
    <div>
      <h1>Memo1 {val}</h1>
    </div>
  )
}

export default memo(Memo1);



// // Pure Function :
// function Pure(n){
//     return n * n;
// }
// console.log(2);
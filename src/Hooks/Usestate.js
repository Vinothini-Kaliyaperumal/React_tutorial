import React, {useState} from 'react'

function Usestate() {

  const [num,setNum] = useState(1);   //usestate syntax
    let x = 1;

    function handleAdd(){
        // x = x + 1 //x++ x+=
        // console.log("x", x);

        // num = num + 1

        // setNum(200) //Direct ah value ah pass panrathu

        // currentvalue la erunthu increement or update panrathu
        setNum((currenValue) =>{
          return currenValue + 1;
        })
        
    }; 
    console.log(num)

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Usestate

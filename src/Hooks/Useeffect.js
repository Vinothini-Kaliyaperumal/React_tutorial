import React, {useEffect, useState} from 'react';
// import Usestate from './Usestate';

function Useeffect() {
 const [first, setFirst] = useState(100);
 const [second, setSecond] = useState(1000);


 useEffect(() => {
    setFirst(200)
    console.log("from useeffect");

    return()=>{
        setFirst(100);
        console.log("memory cleaned");
        
    }

 }, [first, second])

 console.log("first", first)
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={() => setFirst(curval => curval + 1)}>AddButton</button>
      <h1>{second}</h1>
      <button onClick={() => setSecond(curval => curval + 1)}>AddButton</button>
    </div>
  )
}

export default Useeffect

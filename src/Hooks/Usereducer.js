import React, { useReducer, useState } from 'react'

const ACTION = {
 INCREMENT : "increment",
 DECREMENT : "decrement",
};

function reducerFn(state, action){
    switch(action.type) {
        case ACTION.INCREMENT :
        // case "increment"    //iptium pottukalam
            return{count : state.count + 1}

        case ACTION.DECREMENT :
        // case "decrement"    //iptium pottukalam  
            return{count : state.count - 1}

        default :
        return state;    
    
    }
}
function Usereducer() {
    const [state, dispatch] = useReducer(reducerFn, {count : 1})   //usereducer
    const [count, setCount] = useState(1);   //usestate

    function increment() {
        // setCount((curr) => curr + 1)   //usestate method
        dispatch({type : ACTION.INCREMENT})  //usereducer method
    }

    function decrement() {
        // setCount((curr) => curr - 1)
        dispatch({type : ACTION.DECREMENT})

    }
    // console.log(state);
    
  return (
    <div style={{
        display : 'flex',
        alignItems : 'center'
    }}>
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>

    </div>
  )
}

export default Usereducer

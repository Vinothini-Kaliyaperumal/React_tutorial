import React, { useCallback, useMemo, useState } from 'react'
import Usecallbackchild from './Usecallbackchild';

function Usecallback() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false)

    const getItems = useCallback( (incrementor) => {
        return [number + incrementor + 1, number + incrementor + 2, number + incrementor + 3];
    }, [number]); //number la erukua value change aana mattumntha getitem function recreate aagum

// usememo use panni eptium pannalam
    // const getItems = useMemo( () => {
    //          return [number + 1, number + 2, number + 3];
    //      }, [number]);

    const theme = {
        backgroundColor : dark ? "brown" : "white",
        color : dark ? "white" : "brown",
    }
  return (
    <div style={theme}>
      <input type="number"
       value={number}
         onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <Usecallbackchild getItems = {getItems}/>
    </div>
  ) 
}

export default Usecallback

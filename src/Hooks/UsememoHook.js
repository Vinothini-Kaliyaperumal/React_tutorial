import React, {useEffect, useMemo, useState} from 'react'

function UsememoHook() {

        const [number, setNumber] = useState(0);
        const [dark, setDark] = useState(false)

        const doubleNumber = useMemo(() => {
            return slowfunction(number)
        }, [number]) //[number] la erukura variable name maruna mattumntha slowfuncton call agum 
    
        
        const themeStyles = useMemo(() => {
            return {
                backgroundColor : dark ? "black" : "white",
                color : dark ? "white" : "black",
            };
        }, [dark]); //[dark] ota variable name maruna mattumthan themstyles recreate aganum illana aaga kudathu
    
       
        useEffect(() => {
            console.log("Theme Changed");
            
        }, [themeStyles])

    //    State, effect ah vachi eptium pannalam usememo illama, but state ah eh ella edathulaum use panna kudathu, athuku pathila vera entha hook use panna intha problem ah solve pannalam aptinu therinchikitu antha hook ah simple ah use pannanum, athuthan react developer

    //    const [doubleNumber, setDoubleNumber] = useState(0)

    //    useEffect(() => {
    //     setDoubleNumber(slowfunction(number))
    //    } , [number])

  return (
    <div>
       <input type='number'
    value={number} 
    onChange={(e) => setNumber(e.target.value)}
    />
    <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
    <div style={themeStyles}> {doubleNumber} </div>

    </div>
  )
}

export default UsememoHook

function slowfunction(num){
    console.log("running slow");
    
    for (let i = 0; i < 1000000000; i++){ }
    return num * 2
    }
import React, { useEffect, useState } from 'react'

function Usecallbackchild({getItems}) {

    const [items, setItems] = useState([]);

    useEffect(() => {
     setItems(getItems(10))
    //  Usememo() Method
    //  setItems(getItems) //usememo use panni pannumpothu function ah call panna vendiya avasiyam illa normal ah ve kudukalam

     console.log("setting item");
     
    }, [getItems]) //getItme function yeppolam recreate agutho, appolam useeefect run aganum

  return (
    <div>{
        items.map((item,index) => {
             return <p key={index}>{item}</p>
        })}
       
    </div>
  )
}

export default Usecallbackchild

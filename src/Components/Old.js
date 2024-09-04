import React from "react";
import New from "./New";

 function Old(){
    const day = "Wednesday"
    return (
    <div className='Old'>
        <h1>Old Page</h1>
        <New name={day}/>
    </div>
    );
}

export default Old;
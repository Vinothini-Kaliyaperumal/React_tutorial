// import React from "react";
// import { useParams } from "react-router-dom";

// export default function Customer() {
//     const {id} = useParams()
//     return <>
//     <h1>Customer Page</h1>
//     <p>Customer Id is <b>{id}</b></p>
//     </>
// }

import React from 'react'
import {Link} from 'react-router-dom'

function Customer() {
  console.log("Agalya")
  return (
    <div>
      <h1>Priyaa</h1>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  )
}

export default Customer

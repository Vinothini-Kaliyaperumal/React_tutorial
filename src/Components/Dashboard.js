import React from 'react'
import { useParams } from 'react-router-dom'

// Dynamic Routes:
function Dashboard() {
    const {userName} = useParams()
  return (
    <div>
      <h1>Sandyy {userName} </h1>
    </div>
  )
}

export default Dashboard          

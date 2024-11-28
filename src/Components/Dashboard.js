import React from 'react'
import { useParams } from 'react-router-dom'

function Dashboard() {
    const {userName} = useParams()
  return (
    <div>
      <h1>Sandyy {userName} </h1>
    </div>
  )
}

export default Dashboard

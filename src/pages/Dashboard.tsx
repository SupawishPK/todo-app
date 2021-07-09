import React from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"

const Dashboard = () => {
  React.useEffect(() => {
    axios.get('/api')
  }, [])

  return (
    <>
      <Navbar />
      <div>Dashboard</div>
    </>
  )
}

export default Dashboard

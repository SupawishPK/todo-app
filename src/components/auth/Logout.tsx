import React from 'react'

const Logout = () => {
  return (
    <p
      className="cursor-pointer"
      onClick={() => {
        localStorage.removeItem('token')
        window.location.href = '/'
      }}
    >
      Logout
    </p>
  )
}

export default Logout

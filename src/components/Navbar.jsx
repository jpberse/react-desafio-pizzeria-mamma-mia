import React from 'react'

function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <nav className='bg-gray-800 flex'>
        <h2 className='text-white color'>Mamma Mia!</h2>
        <span>Home</span>
        <span>Profile</span>
        <span>Logout</span>
    </nav>
  )
}

export default Navbar
import React from 'react'
import ButtonsNav from './ButtonsNav';

function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <nav className='bg-black flex justify-between items-center h-14 px-4'>
      <div className='flex items-center gap-2'>
        <h2 className='text-white text-2xl'>Mamma Mia!</h2>
        <ButtonsNav name="Home" icon="🍕"/>
        { token ? <ButtonsNav name="Profile" icon="🔓" /> : <ButtonsNav name="Login" icon="🔐" /> }
        { token ? <ButtonsNav name="Logout" icon="🔓" /> : <ButtonsNav name="Register" icon="🔐" /> }
      </div> 
      <div>
        <button className='text-blue-400 text-lg font-light border-solid border border-blue-400/50 rounded-md px-2 py-1'>🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import ButtonsNav from './ButtonsNav';
import { Link } from 'react-router-dom';

function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <nav className='bg-black flex justify-between items-center h-14 px-4'>
      <div className='flex items-center gap-2'>
        <h2 className='text-white text-2xl'>Mamma Mia!</h2>
        <Link to='/' >        
          <ButtonsNav name="Home" icon="🍕"/>
        </Link>
        { token
          ? <Link to='/profile'>
              <ButtonsNav name="Profile" icon="🔓" /> 
            </Link> 
          :          
            <Link to='/login'>
              <ButtonsNav name="Login" icon="🔐" /> 
            </Link>
        }
        { token
          ? null
          :          
            <Link to='/register'>
              <ButtonsNav name="Register" icon="🔐" />
            </Link>  
        }  
      </div> 
      <div>
        <Link to='/cart' >        
          <button className='text-blue-400 text-lg font-light border-solid border border-blue-400/50 rounded-md px-2 py-1'>🛒 Total: ${total.toLocaleString()}</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
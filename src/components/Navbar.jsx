import React from 'react'
import ButtonsNav from './ButtonsNav';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart.js';
import { useUser } from '../hooks/useUser.js'

function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive? 'text-black bg-white/85 text-lg font-light border-solid border border-white/50 rounded-md px-2' : 'text-white text-lg font-light border-solid border border-white/50 rounded-md px-2')
  
  const { total } = useCart();
  const { token, logout } = useUser();
  
  return (
    <nav className='bg-black flex justify-between items-center h-14 px-4'>
      <div className='flex items-center gap-2'>
        <h2 className='text-white text-2xl'>Mamma Mia!</h2>
        <NavLink className={setActiveClass} to='/' >        
          <ButtonsNav name="Home" icon="🍕"/>
        </NavLink>
        { token
          ? <NavLink className={setActiveClass} to='/profile'>
              <ButtonsNav name="Profile" icon="🔓" /> 
            </NavLink> 
          :          
            <NavLink className={setActiveClass} to='/login'>
              <ButtonsNav name="Login" icon="🔐" /> 
            </NavLink>
        }
        { token
          ? <button onClick={logout} className='text-white text-lg font-light border-solid border border-white/50 rounded-md px-2'>🔓 logout</button>
          :          
            <NavLink className={setActiveClass} to='/register'>
              <ButtonsNav name="Register" icon="🔐" />
            </NavLink>  
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
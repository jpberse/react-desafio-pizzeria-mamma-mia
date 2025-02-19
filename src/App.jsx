import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer'
import Pizza from './pages/Pizza.jsx'
import Cart from './pages/Cart.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { Profile } from './pages/Profile.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/cartContext.jsx'
import { useUser } from './hooks/useUser.js'

function App() {
  const { token } = useUser();

  return (
    <>
      <CartProvider className='box-border m-0 p-0'>
        <Navbar/>
        <Routes>
          <Route
            path='/'
            element={<Home/>}   
          />
          <Route
            path='/pizza/:id'
            element={<Pizza />}   
          />
          <Route
            path='/register'
            element={token === false ? <Register/> : <Navigate to='/'/>}   
          />
          <Route
            path='/login'
            element={token === false ? <Login/> : <Navigate to='/'/>}   
          />
          <Route
            path='/profile'
            element={token === false ? <Navigate to='/login'/> : <Profile />}   
          />
          <Route
            path='/cart'
            element={<Cart />}   
          />
          <Route
            path='/404'
            element={<NotFound />}   
          />
          <Route
            path='/404'
            element={<NotFound />}   
          />
        </Routes>
        <Footer/>
      </CartProvider>
    </>
  )
}

export default App

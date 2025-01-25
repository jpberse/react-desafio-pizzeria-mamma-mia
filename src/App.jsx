import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer'
import Pizza from './pages/Pizza.jsx'
import Cart from './pages/Cart.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { Profile } from './pages/Profile.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='box-border m-0 p-0'>
        <Navbar/>
        <Routes>
          <Route
            path='/'
            element={<Home/>}   
          />
          <Route
            path='/pizza/p001'
            element={<Pizza />}   
          />
          <Route
            path='/pizza/p001'
            element={<Pizza />}   
          />
          <Route
            path='/register'
            element={<Register/>}   
          />
          <Route
            path='/login'
            element={<Login />}   
          />
          <Route
            path='/profile'
            element={<Profile 
              name='Juan Pablo Bersezio' 
              email='jp.bersezio@gmail.com' 
              password='******'
              />}   
          />
          <Route
            path='/cart'
            element={<Cart />}   
          />
          <Route
            path='/404'
            element={<NotFound />}   
          />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App

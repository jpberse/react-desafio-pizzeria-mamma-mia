import Navbar from './components/Navbar'
/* import Home from './components/Home' */
import Footer from './components/Footer'
import Cart from './components/Cart'
/* import Register from './components/Register'
import Login from './components/Login' */

function App() {
  return (
    <>
      <div className='box-border m-0 p-0'>
        <Navbar/>
        {/* <Home/> */}
        {/* <Register/> */}
        {/* <Login /> */}
        <Cart />
        <Footer/>
      </div>
    </>
  )
}

export default App

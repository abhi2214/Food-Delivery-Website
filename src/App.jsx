import  { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import AppDownload from './components/AppDownload/AppDownload.jsx'
import LoginPop from './components/LoginPOP/LoginPop.jsx'

const App = () => {
   
  const [Showlogin,setShowlogin] = useState(false)
  return (
    <>
    {Showlogin?<LoginPop setShowlogin = {setShowlogin}/>:<></>}
    <div className='app'>
      <Navbar setShowlogin = {setShowlogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/cart' element={<Cart/>}></Route>
         <Route path= '/order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
    <AppDownload/>
    <Footer/>
    </>
  )
}

export default App




import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from './comps/navbar'
import LandingPage from './page/landingPage'
import UserCart from './page/usercart'
import Homepage from './page/Homepage/homepage'
import GoogleLoginPage from './comps/googleLogin'
import StripeContainer from './comps/stripe/stripe-container'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/*" element={<Homepage />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/checkout" element={<StripeContainer />} />
        <Route path="/test" element={<GoogleLoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

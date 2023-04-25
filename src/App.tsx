
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//components
import Navbar from "./comps/navbar"


import LandingPage from "./page/landingPage"
import Homepage from "./page/Homepage/Homepage"


function App() {
   return (
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<Homepage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App

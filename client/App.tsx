import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from './comps/navbar'
import LandingPage from './pages/landingPage'
import UserCart from './pages/usercart'
import Homepage from './pages/Homepage/homepage'
import GoogleLoginPage from './comps/googleLogin'
import StripeContainer from './comps/stripe/stripe-container'

//hooks
import { useFetch } from './hooks/useFetch'

function App() {
  const { fetchData, data, filteredData, query, setQuery, setFilterType } = useFetch('http://localhost:3000/posts')
  return (
    <BrowserRouter>
      <Navbar setQuery={setQuery} setFilterType={setFilterType} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home/*"
          element={
            <Homepage
              fetchData={fetchData}
              data={data}
              filteredData={filteredData}
              query={query}
              setQuery={setQuery}
              setFilterType={setFilterType}
            />
          }
        />
        <Route path="/cart" element={<UserCart />} />
        {/* <Route path="/checkout" element={<StripeContainer />} /> */}
        <Route path="/test" element={<GoogleLoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
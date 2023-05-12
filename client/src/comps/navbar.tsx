//icons
import ShoppingCart from '/icons/shopping-cart.svg'
import User from '/icons/user.svg'
import Heart from '/icons/heart.svg'

//react
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { useState, Dispatch, SetStateAction } from 'react'
//comps
import FilterButtons from '../pages/Homepage/homepage-comps/filterbuttons'
//types
type navbarProps = {
  setQuery: Dispatch<SetStateAction<string>>
  setFilterType: Dispatch<SetStateAction<string>>
}

export default function Navbar({ setQuery, setFilterType }: navbarProps) {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

  const showNav = () => {
    setBurgerMenu(!burgerMenu)
  }

  return (
    <nav className="bg-gray-100">
      <div className="flex justify-center space-x-80">
        <MediaQuery minWidth={1280}>
          <div className="flex justify-center pt-6 space-x-5">
            {/* <img src={Sofa} className="h-14" alt="sofa.svg" /> */}
            <Link to="/">
              <h1 className="text-4xl font-milli hover:underline hover:decoration-1">e-meuble</h1>
            </Link>
          </div>
          <FilterButtons setQuery={setQuery} setFilterType={setFilterType} />

          <div className="user-buttons flex justify-around w-52 pt-7">
            <Link to="/">
              <img src={ShoppingCart} className="w-8 cursor-pointer" alt="shopping-cart-icon.svg" />
            </Link>
            <Link to="/Liked">
              <img src={Heart} className="w-8 cursor-pointer" alt="heart-icon.svg" />
            </Link>
            <Link to="/Dashboard">
              <img src={User} className="w-8 cursor-pointer" alt="user-icon.svg" />
            </Link>
          </div>
        </MediaQuery>
      </div>

      <div className="xl:hidden flex justify-between px-4 py-2">
        <a href="#" className="text-2xl font-milli hover:underline hover:decoration-1">
          e-meuble
        </a>

        {burgerMenu ? (
          <i
            className="fixed cursor-pointer right-[30px] fa fa-times text-2xl z-50 xl:hidden"
            aria-hidden="true"
            onClick={showNav}
          ></i>
        ) : (
          <i className="cursor-pointer fa fa-bars text-3xl  xl:hidden" aria-hidden="true" onClick={showNav}></i>
        )}
        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col items-center w-full pt-16 xl:hidden bg-white z-40 duration-700 ${
            burgerMenu ? 'right-[0px]' : 'right-[-100vw]'
          } `}
        >
          <Link
            to="/"
            onClick={() => setBurgerMenu(false)}
            className="text-2xl p-6 text-black px-24 py-5 pb-7 hover:bg-gray-300 rounded-xl hover:underline "
          >
            Home
          </Link>
          <Link
            to="/home"
            onClick={() => setBurgerMenu(false)}
            className="text-2xl p-6 text-black px-24 py-5 pb-7 hover:bg-gray-300 rounded-xl"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            onClick={() => setBurgerMenu(false)}
            className="text-2xl p-6 text-black px-24 py-5 pb-7 hover:bg-gray-300 rounded-xl"
          >
            Cart
          </Link>
          <a href="#" className="text-2xl p-6 text-black px-24 py-5 pb-7 hover:bg-gray-300 rounded-xl">
            User
          </a>
        </nav>
      </div>
    </nav>
  )
}

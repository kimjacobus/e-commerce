//icons
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from "react";

export default function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

  const showNav = () => {
    setBurgerMenu(!burgerMenu)
  }

  return (
    <nav className="flex justify-between bg-yellow-200 text-black py-5 px-5">
      <div>
        <a href="#" className="text-black text-2xl font-bold pl-5">
          E-meuble
        </a>
      </div>
      <MediaQuery minWidth={1024}>
        <div className="flex justify-center flex-1 space-x-10">
          <a href="#" className="text-black px-4 py-2 hover:bg-gray-300">
            Home
          </a>
          <a href="#" className="text-black px-4 py-2 hover:bg-gray-300">
            Shop
          </a>
          <a href="#" className=" px-4 py-2 text-black hover:bg-gray-300">
            Cart
          </a>
        </div>

        <div className="text-black pr-20 pt-2">
          <a href="" className="px-4">
            Panier
          </a>
          <a href="" className="px-4">
            coeur
          </a>
          <a href="" className="px-4">
            User
          </a>
        </div>
      </MediaQuery>

      {/* hamburger */}
      {burgerMenu ? (
        // close button
        <i className="fixed right-[30px] fa fa-times text-2xl z-50 xl:hidden" aria-hidden="true" onClick={showNav}></i>
      ) : (
        <i className="fa fa-bars text-3xl  xl:hidden" aria-hidden="true" onClick={showNav}></i>
      )}

      {/* mobile nav */}
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
    </nav>
  )
}

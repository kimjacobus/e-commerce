import Motionh1 from './comps/motionh1'
//comps
import LandingGrid from './comps/landingGrid'
import Delivery from '../../comps/deliveryInfo'
import Footer from '../../comps/footer'
import NewsLetters from '../../comps/newsLetters'

// import { useEffect, useState } from 'react'

export default function LandingPage() {
  // const [cart, setCart] = useState<any>([])

  // useEffect(() => {
  //   cartFetch()
  // }, [])

  // const cartFetch = async () => {
  //   console.log('launched cartfetch')

  //   fetch('http://localhost:8080/cart/?token=e70a3b32-9703-4996-8c3b-1a5f3341253a', {
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.error) {
  //         console.log(data);
  //         console.log(data.error)
  //       } else {
  //         console.log('cartfetch ran')

  //         setCart(data)
  //         console.log(data)
  //         console.log('cart' + cart)
  //       }
  //     })
  // }

  return (
    <>
      <section>
        <div className="bg-orange-100 p-3 flex flex-col xl:flex-row justify-around">
          <div className="text-wrapper p-7">
            <Motionh1 />
            <p className="text-start max-w-xl font-montserratItalic pb-2">
              Nothing ever happened without the right furniture. From writing the biggest best-seller ever, about a guy
              who's dad is a carpenter to making most, if not all the babies throughout history. You're gonna wanna rest
              your buns at the end of the day and we've got you covered!
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <button className="bg-slate-100 rounded-lg  hover:bg-black hover:text-white">
                <p className="p-2 text-center font-chillax font-bold">SHOP NOW</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/assets/test.jpg" alt="My image" className="xl:h-72 h-auto w-auto rounded-md" />
          </div>
        </div>
      </section>
      {/** comps info delivery */}
      <Delivery />

      {/** TEST comps items shops expo TEST */}
      <LandingGrid />

      {/** comps newsletters  */}
      <NewsLetters />

      {/** comps footer  */}
      <Footer />
    </>
  )
}

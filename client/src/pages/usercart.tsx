import { endpoint } from '../api/endpoint'

//hooks
import { useFetch } from '../hooks/useFetch'
import { useEffect, useState } from 'react'

//types
import { dataProps } from '../types/fetch-props'
import { useNavigate } from 'react-router-dom'

const UserCart = () => {
  const { fetchData, filteredData: data, setFilterType } = useFetch(endpoint)
  const navigate = useNavigate()
  const [cart, setCart] = useState<any>()

  useEffect(() => {
    setFilterType('usercart')
    fetchData()
    // addItem()
    cartFetch()
  }, [])

  // const addItem = async () => {
  //   const reqBody = {
  //     description: 'mario-test',
  //     id: 0,
  //     imageURL:
  //       'https://vignette3.wikia.nocookie.net/nintendo/images/e/e0/Artwork_-_MARIO-RUN.svg/revision/latest/scale-to-width-down/2000?cb=20160218014222&path-prefix=en',
  //     name: 'mario',
  //     price: 9.99,
  //   }

  //   fetch('/wishlist/add', {
  //     method: 'POST',
  //     credentials: 'include',
  //     body: JSON.stringify(reqBody),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.error) {
  //       } else {
  //         setCart(data)
  //         console.log(data)
  //         console.log('cart' + cart)
  //       }
  //     })
  // }

  const cartFetch = async () => {
    console.log('launched cartfetch');
    
    fetch('/wishlist', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          
        } else {
          console.log('cartfetch ran');
          
          setCart(data)
          console.log(data)
          console.log('cart' + cart)
        }
      })
  }

  return (
    <div className="lg:h-1/2 lg:w-1/4 h-screen w-screen">
      <h2>this is what's in your basket : </h2>
      {data &&
        data.map((d: dataProps) => (
          <div className="singleItem" key={d.id}>
            <h2>€{d.price}</h2>
            <img src={d.imageURL}></img>
            <h2>total amount is : </h2>
          </div>
        ))}

      <button onClick={() => navigate('/checkout')}>CheckOut</button>
    </div>
  )
}

export default UserCart

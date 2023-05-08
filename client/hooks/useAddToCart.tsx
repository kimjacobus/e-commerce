import { useState, useEffect } from 'react'

type cartProps = {
  id: number
  amount: number
  image: string
}

export default function useAddToCart() {
  const [cartItems, setCartItems] = useState<cartProps[]>([])
  // const [totalAmount, setTotalAmount] = useState<number>(0)
  // const [AllIDs, setAllIDs] = useState<number[]>([])

  const AddToUserCart = (id: number, amount: number, image: string) => {
    const localCart = localStorage.getItem('cart')
    if (localCart) {
      const cartItems = JSON.parse(localCart)
      setCartItems(cartItems)
    }
    //if ID exists, add multiplier
    setCartItems((prevItem) => [...prevItem, { id, amount, image }])
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      // should do the server-side cart here too
      // make UserCart accessible client-side
      localStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }, [cartItems])

  const BuyUserCart = (body: { id: string; amount: number }) => {
    // grab&prepare body for fetch request
    // const body = {
    // id : cartItems.reduce((acc, item) => acc + item.amount, 0)),
    // amount: (cartItems.map((item) => item.id))}
  }

  return { AddToUserCart, BuyUserCart }
}

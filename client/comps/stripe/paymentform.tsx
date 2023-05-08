import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { useState, useEffect } from 'react'
import axios from 'axios'

// const CARD_OPTIONS = {
//   iconStyle: 'solid',
//   style: {
//     base: {
//       iconColor: '#c4f0ff',
//       color: '#fff',
//       fontWeight: 500,
//       fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
//       fontSize: '16px',
//       fontSmoothing: 'antialiased',
//       ':-webkit-autofill': { color: '#fce883' },
//       '::placeholder': { color: '#87bbfd' },
//     },
//     invalid: {
//       iconColor: '#ffc7ee',
//       color: '#ffc7ee',
//     },
//   },
// }

export default function PaymentForm() {
  const [succes, setSucces] = useState(false)
  const [cardElement, setCardElement] = useState<any>()

  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    setCardElement(elements?.getElement(CardElement))
  }, [elements])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!elements || !stripe) {
      return (
        <div>
          <h2>loading...</h2>
        </div>
      )
    } else {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })
      if (!error) {
        try {
          const { id } = paymentMethod
          const response = await axios.post('http://localhost:4000/payment', {
            amount: 1000,
            id,
          })
          if (response.data.succes) {
            console.log('successful payment')
            setSucces(true)
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      } else {
        console.log(error.message)
      }
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-500">
      {!succes ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement />
              <h2>hello</h2>
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>You just bought a sweet spatula!</h2>
        </div>
      )}
    </div>
  )
}

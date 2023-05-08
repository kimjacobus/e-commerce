import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './paymentform'


// test card info : 4242 4242 4242 4242 


const PUBLIC_KEY =
  'pk_test_51N1W61GJRVE0rBgvMb1DCXsDD8OjzFqV5rn3U8f0zL6Ru0GPKOylGzEIW8xfNQKhiU0Ea2o1Ga3sEUeXEGPIBDcG002Kmt1SRs'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
    </Elements>
  )
}

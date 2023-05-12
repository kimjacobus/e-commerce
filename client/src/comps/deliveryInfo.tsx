import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CachedIcon from '@mui/icons-material/Cached'
import SecurityIcon from '@mui/icons-material/Security'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

export default function Delivery() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 p-1 pt-7 bg-orange-100 md:p-4 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
          <div className="outline outline-1 px-4 py-2 rounded-lg flex items-center">
            <LocalShippingIcon />
            <div className=" pl-2 md:pl-4 md:p-4 text-sm font-quicksand">
              <h1>Free shipping</h1>
              <p>Everything in our shop comes with free shipping</p>
            </div>
          </div>

          <div className="outline outline-1 px-4 py-2 rounded-lg flex items-center text-sm font-quicksand">
            <CachedIcon />
            <div className="pl-2 md:pl-4 md:p-4">
              <p>Easy Returns</p>
              <p>Totally and completely covered and insured</p>
            </div>
          </div>

          <div className="outline outline-1  px-4 py-2 rounded-lg flex items-center text-sm font-quicksand">
            <SecurityIcon />
            <div className="pl-2 md:pl-4 md:p-4">
              <p>Secure Payment</p>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>
          </div>

          <div className="outline outline-1  px-4 py-2 rounded-lg flex items-center text-sm font-quicksand">
            <AttachMoneyIcon />
            <div className="pl-2 md:pl-4 md:p-4">
              <p>Back Guarantee</p>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

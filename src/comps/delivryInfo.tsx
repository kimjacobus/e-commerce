import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CachedIcon from '@mui/icons-material/Cached';
import SecurityIcon from '@mui/icons-material/Security';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Delivery (){
  return (
    <>
      <section>
        <div className="flex justify-center py-20">
          <div className="px-4 py-2 bg-gray-100 mr-4 rounded-lg flex items-center">
            <LocalShippingIcon />
            <div className="pl-4 p-4">
              <h1>Free shipping</h1>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>
          </div>

          <div className="px-4 py-2 bg-gray-100 mr-4 rounded-lg flex items-center">
            <CachedIcon />
            <div className="pl-4 p-4">
              <p>Easy Returns</p>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>
          </div>

          <div className="px-4 py-2 bg-gray-100 mr-4 rounded-lg flex items-center">
            <SecurityIcon />
            <div className="pl-4 p-4">
              <p>Secure Payment</p>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-gray-100 rounded-lg flex items-center">
            <AttachMoneyIcon />
            <div className="pl-4 p-4">
              <p>Back Guarantee</p>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
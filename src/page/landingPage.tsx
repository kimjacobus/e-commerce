
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import CachedIcon from "@mui/icons-material/Cached"
import SecurityIcon from "@mui/icons-material/Security"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import Grid from "../comps/cardTest";
import Delivery from "../comps/delivryInfo";
import Footer from "../comps/footer";
import Navbar from "../comps/navbar";
import NewsLetters from "../comps/newsLetters";


export default function LandingPage() {
   return (
      <>
         <section className=''>
            <div className='bg-yellow-100 p-5 flex items-center'>
               <div className='mr-4'>
                  <p>Trending products 2023</p>
                  <h2>
                     Make Your Interior More <br /> Minimalistic & Modern
                  </h2>
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Laudantium culpa nihil ullam illum cumque suscipit aperiam
                     voluptatibus, sed, inventore ducimus at reprehenderit
                     maxime! Iure praesentium eos eaque hic in numquam!
                  </p>
                  <br />
                  <button className='border border-neutral-950 bg-red-500 p-2 m-2 rounded-2xl'>
                     {" "}
                     SHOP NOW{" "}
                  </button>
               </div>
               <div className='flex'>
                  <img
                     src='./src/assets/test.jpg'
                     alt='My image'
                     className='w-auto h-auto rounded-lg shadow-lg opacity-95'
                  />
               </div>
            </div>
         </section>

         <div className='flex justify-center py-20'>
            <div className='px-4 py-2 bg-gray-100 mr-4 rounded-lg flex items-center'>
               <LocalShippingIcon />
               <div className='pl-2'>
                  <h1>Free shipping</h1>
                  <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
               </div>
            </div>

            <div className='px-4 py-2 bg-gray-100 mr-4 rounded-lg flex items-center'>
               <CachedIcon />
               <div className='pl-2'>
                  <p>Easy Returns</p>
                  <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
               </div>
            </div>

            <div className='px-4 py-2 bg-gray-100 mr-4 rounded-lg flex items-center'>
               <SecurityIcon />
               <div className='pl-2'>
                  <p>Secure Payment</p>
                  <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
               </div>
            </div>
            <div className='px-4 py-2 bg-gray-100 rounded-lg flex items-center'>
               <AttachMoneyIcon />
               <div className='pl-2'>
                  <p>Back Guarantee</p>
                  <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
               </div>
            </div>
         </div>
        <Navbar />
{/* 
        <section>
          <div className="bg-yellow-100 p-5 flex items-center">
            <div className="mr-4 p-10">
              <p className="text-base">Trending products 2023</p>
              <h1 className="text-3xl font-bold">
                Make Your Interior More <br /> Minimalistic & Modern
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium culpa nihil ullam illum cumque suscipit aperiam
                voluptatibus, sed, inventore ducimus at reprehenderit maxime!
                Iure praesentium eos eaque hic in numquam!
              </p>
              <br />
              <button className="border border-neutral-950 bg-red-500 p-2 m-2 rounded-lg border-red-800">
               <p className="px-2 py-1 font-bold"> SHOP NOW</p> 
              </button>
            </div>
            <div className="flex">
              <img
                src="./src/assets/test.jpg"
                alt="My image"
                className="w-auto h-auto rounded-lg shadow-lg opacity-95"
              />
            </div>
          </div>
        </section> */}
<section>
  <div className="bg-yellow-100 p-5 flex flex-col md:flex-row items-center">
    <div className="mr-4 p-10">
      <p className="text-base">Trending products 2023</p>
      <h1 className="text-3xl font-bold">
        Make Your Interior More <br /> Minimalistic & Modern
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Laudantium culpa nihil ullam illum cumque suscipit aperiam
        voluptatibus, sed, inventore ducimus at reprehenderit maxime!
        Iure praesentium eos eaque hic in numquam!
      </p>
      <button className="border border-neutral-950 bg-red-500 p-2 m-2 rounded-lg border-red-800">
        <p className="px-2 py-1 font-bold"> SHOP NOW</p> 
      </button>
    </div>
    <div className="flex justify-center md:ml-auto">
      <img
        src="./src/assets/test.jpg"
        alt="My image"
        className="w-auto h-auto rounded-lg shadow-lg opacity-95"
      />
    </div>
  </div>
</section>

        
        {/** comps info delivery */}
        <Delivery />

        {/** TEST comps items shops expo TEST */}
        <Grid />

        {/** comps newsletters  */}
        <NewsLetters />

        {/** comps footer  */}
        <Footer />
      </>
   )
}

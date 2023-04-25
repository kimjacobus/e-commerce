import Grid from "../comps/cardTest";
import Delivery from "../comps/delivryInfo";
import Footer from "../comps/footer";
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

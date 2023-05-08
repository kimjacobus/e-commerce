import React from "react";
import Grid from "../comps/cardTest";
import Delivery from "../comps/delivryInfo";
import Footer from "../comps/footer";

import NewsLetters from "../comps/newsLetters";

export default function LandingPage() {
  return (
    <>
      <section>
        <div className="bg-yellow-100 p-5 flex flex-col md:flex-row items-center">
          <div className="mr-2 p-2 md:mr-4 md:p-10">
            <p className="text-base">
              <i>Trending products 2023</i>
            </p>
            <h1 className="text-3xl font-bold">
              Make Your Interior More <br /> Minimalistic & Modern
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium culpa nihil ullam illum cumque suscipit aperiam
              voluptatibus, sed, inventore ducimus at reprehenderit maxime! Iure
              praesentium eos eaque hic in numquam!
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <button className="border border-neutral-950 bg-red-500 p-2 m-2 rounded-lg border-red-800 hover:bg-red-400">
                <p className="px-2 py-1 font-bold"> SHOP NOW</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center md:ml-auto">
            <img
              src="./assets/test.jpg"
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
  );
}

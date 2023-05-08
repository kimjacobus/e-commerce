import React from "react";

export default function Grid() {
  return (
    <>
      <div className="flex flex-wrap justify-center pb-3">
        <h1 className="w-full text-center pb-5 bg-gray-400">SHOP</h1>
        <h3 className="w-full text-center pb-5">items</h3>
        <div className="w-full border border-dark bg-gray-300 md:w-1/2 lg:w-1/4 p-2">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="./assets/test.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Meuble 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>10$</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border border-dark bg-gray-300 md:w-1/2 lg:w-1/4 p-2">
          <p>meuble2</p>
        </div>
        <div className="w-full border border-dark bg-gray-300 md:w-1/2 lg:w-1/4 p-2">
          <p>meuble3</p>
        </div>
        <div className="w-full border border-dark bg-gray-300 md:w-1/2 lg:w-1/4 p-2">
          <p>meuble4</p>
        </div>
        <div className="w-full border border-dark bg-gray-300 md:w-1/2 lg:w-1/4 p-2">
          <p>meuble5</p>
        </div>
        <div className="w-full border border-dark bg-gray-300 md:w-1/2 lg:w-1/4 p-2">
          <p>meuble6</p>
        </div>
        <div className="w-full border border-dark bg-gray-300 md:w-1/2 lg:w-1/4 p-2">
          <p>meuble7</p>
        </div>
        <div className="w-full border border-dark bg-gray-300 md:w-1/2 lg:w-1/4 p-2">
          <p>meuble8</p>
        </div>
      </div>

      {/** comps cards test 
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="./src/assets/test.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>*/}
    </>
  );
}

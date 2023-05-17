export const DashboardPages = () => {
  const Profile = () => {
    return (
      <div className="w-auto h-96 lg:w-[50rem] m-4 md:px-28 md:py-8 p-4 outline outline-1 outline-gray-200">
        <div className="intro pb-8">
          <h2 className="font-milliLight text-xl">your account</h2>
          <p className="font-nimbus text-sm">
            this is where all your info is
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-milliLight text-xl">map out account info here</h2>
          <h2 className="font-nimbus text-sm pb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, dolore dicta? Iure debitis blanditiis
            rerum? Labore sequi officia dicta quae!
          </h2>
        </div>
      </div>
    )
  }

  const Basket = () => {
    return (
      <div className="w-auto h-96 lg:w-[50rem] m-4 md:px-28 md:py-8 p-4 outline outline-1 outline-gray-200">
        <div className="intro pb-8">
          <h2 className="font-milliLight text-xl">your basket</h2>
          <p className="font-nimbus text-sm">there's nothing in your basket yet</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-milliLight text-xl">map out basket items here</h2>
          <h2 className="font-lacklineReg cursor-pointer outline outline-1 text-center text-white text-xl p-2 bg-black hover:underline hover:bg-slate-100 hover:text-black">
            Continue shopping
          </h2>
        </div>
      </div>
    )
  }

  const Wishlist = () => {
    return (
      <div className="w-auto h-96 lg:w-[50rem] m-4 md:px-28 md:py-8 p-4 outline outline-1 outline-gray-200">
        <div className="intro pb-8">
          <h2 className="font-milliLight text-xl">your wishlist</h2>
          <p className="font-nimbus text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quaerat?
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-milliLight text-xl">map out wishlist items here</h2>
          <h2 className="font-nimbus text-sm pb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, dolore dicta? Iure debitis blanditiis
            rerum? Labore sequi officia dicta quae!
          </h2>
          <h2 className="font-lacklineReg cursor-pointer outline outline-1 text-center text-white text-xl p-2 bg-black hover:underline hover:bg-slate-100 hover:text-black">
            Continue shopping
          </h2>
        </div>
      </div>
    )
  }

  return { Profile, Basket, Wishlist }
}

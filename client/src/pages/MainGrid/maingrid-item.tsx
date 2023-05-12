type MainGridItemProps = {
  image?: string
  caption?: string
  amount?: string | number
  onClick: () => void
}

const MainGridItem = ({ image, caption, amount, onClick }: MainGridItemProps) => {
  return (
    <div className="item-wrapper p-[2px]">
      <div className="GridItem relative outline-gray-300 outline outline-1" onClick={onClick}>
        <div className="picture-wrapper w-full aspect-square overflow-hidden">
          <img src={image} className="p-3"/>
        <div
          className="hover-state absolute w-full top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-10 
        hover:transition-all duration-300 ease-in"
        ></div>
        </div>
      </div>

      <div className="item-description text-md">
        <p className="font-nunito">{caption}</p>
        <p className="font-nunitoItalic">€ {amount}</p>
      </div>
    </div>
  )
}

export default MainGridItem

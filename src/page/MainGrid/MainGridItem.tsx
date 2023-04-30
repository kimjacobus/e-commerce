type MainGridItemProps = {
  image: string
  id: number
  onClick: () => void
  AddToUserCart: (id:number) => void

}

const MainGridItem = ({ image, id, onClick, AddToUserCart }: MainGridItemProps) => {

  return (
    <div className="item-wrapper">
      <div className="GridItem relative" onClick={onClick}>
        <div className="picture-wrapper h-[14rem] overflow-hidden">
          <img src={image} className="" />
        </div>
        <div className="item-description text-xs">
          <p>item descriptions</p>
          <p>item descriptions</p>
          <p>prix : 100 eurodollars</p>
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 h-[14rem] bg-black opacity-0 hover:opacity-10 
        hover:transition-all duration-300 ease-in"
        ></div>
      </div>
      <button onClick={() => AddToUserCart(id)}>buy this item</button>
    </div>
  )
}

export default MainGridItem

import { useParams } from "react-router-dom"

type SingleItemProps = {
    data: [ {
        id: number
        image: string
    }]
    setQuery: React.Dispatch<React.SetStateAction<string>>
    setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const SingleItem = ({data, setSelectModal}:SingleItemProps) => {
    
const {id = 0}:any = useParams()
 return (
    <div className="SingleItem bg-slate-300">
<div className="item-wrapper h-[20rem] mt-9"
onClick={() => setSelectModal(true)}>
        <img src={data[id-1].image}></img>
</div>
<div className='item-description text-xs'>
            <p>item descriptions</p>
            <p>item descriptions</p>
            <p>prix : 100 eurodollars</p>
          </div>

          <button>Buy</button>
</div>
 )}

{/* <div className='GridItem relative' onClick={onClick}>
          <div className='picture-wrapper h-[14rem] overflow-hidden'>
            <img src={image} className=""/>
          </div>
          <div className='item-description text-xs'>
            <p>item descriptions</p>
            <p>item descriptions</p>
            <p>prix : 100 eurodollars</p>
          </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 h-[14rem] bg-black opacity-0 hover:opacity-10 
        hover:transition-all duration-300 ease-in'></div>
        </div> */}



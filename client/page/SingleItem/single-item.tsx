import React from 'react'
import { useParams } from 'react-router-dom'

type SingleItemProps = {
  data: [
    {
      id: number
      amount: number
      image: string
    }
  ]
  setQuery: React.Dispatch<React.SetStateAction<string>>
  setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
  AddToUserCart: (id: number, amount: number, image: string) => void
}
export const SingleItem = ({ data, setSelectModal, AddToUserCart }: SingleItemProps) => {
  const { id = 0 }: any = useParams()
  return (
    <div className="SingleItem bg-slate-300">
      <div className="item-wrapper h-[20rem] mt-9" onClick={() => setSelectModal(true)}>
        <img src={data[id - 1].image}></img>
      </div>
      <div className="item-description text-xs">
        <p>item descriptions</p>
        <p>item descriptions</p>
        <p>prix : 100 eurodollars</p>
      </div>

      <button onClick={() => AddToUserCart(id, data[id].amount, data[id].image)}>Buy</button>
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'

import { dataProps } from '../../types/fetch-props'

type SingleItemProps = {
  data: dataProps[]
  setQuery: React.Dispatch<React.SetStateAction<string>>
  setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
  AddToUserCart: (id: number, amount: number, image: string) => void
}
export const SingleItem = ({ data, setSelectModal, AddToUserCart }: SingleItemProps) => {
  const { id = 0 }: any = useParams()
  return (
    <div className="SingleItem flex flex-col min-[860px]:flex-row justify-center pt-5 ">
      <img
        className="w-auto pb-10 min-[860px]:h-[40rem] outline outline-1 mx-1"
        onClick={() => setSelectModal(true)}
        src={data[id - 1].imageURL}
      />
      <div className="item-description flex flex-col space-y-3 m-3">
        <p className="font-compagnonMed text-xl">{data[id - 1].description}</p>
        <div className="price-wrapper pb-3 flex space-x-5">
          <p className="font-nimbus text-2xl">€{data[id - 1].price}</p>
          <p className="font-nimbus text-sm pt-2">including VAT</p>
        </div>

        <div
          onClick={() => (AddToUserCart(id, data[id - 1].price, data[id - 1].imageURL), console.log('you clicked buy'))}
        >
          <h2 className="font-lacklineReg cursor-pointer outline outline-1 text-center text-white text-xl p-2 bg-black hover:underline hover:bg-slate-100 hover:text-black">
            Buy now!
          </h2>
        </div>
      </div>
    </div>
  )
}

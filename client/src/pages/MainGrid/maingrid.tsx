//comps
import React from 'react'
import MainGridItem from './maingrid-item'
//hooks
import { useNavigate } from 'react-router-dom'
import { dataProps } from '../../types/fetch-props'

type MainGridProps = {
  data: dataProps[] | null
  setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
}
const MainGrid = ({ data, setSelectModal }: MainGridProps) => {
  const navigate = useNavigate()

  const ClickItem = (id: number) => {
    setSelectModal(false)
    navigate(`/home/${id}`)
  }
  return (
    <div className="grid relative gap-y-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-x-1 m-2">
      {data &&
        data.map((item: dataProps) => (
          <MainGridItem
            key={item.id}
            image={item.imageURL}
            caption={item.description}
            amount={item.price}
            onClick={() => ClickItem(item.id)}
          />
        ))}
    </div>
  )
}

export default MainGrid

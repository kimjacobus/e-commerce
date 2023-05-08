//comps
import React from 'react'
import MainGridItem from './maingrid-item'

//hooks
import { useNavigate } from 'react-router-dom'

type MainGridProps = {
  data: [{}] | [] | null
  setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MainGrid = ({ data, setSelectModal }: MainGridProps) => {
  const navigate = useNavigate()

  const ClickItem = (id: number) => {
    setSelectModal(false)
    navigate(`/home/${id}`)
  }
  return (
    <div className="grid relative gap-x-3 m-2 gap-y-10 grid-cols-2">
      {data && data.map((item: any) => <MainGridItem key={item.id} image={item.image} onClick={() => ClickItem(item.id)} />)}
    </div>
  )
}

export default MainGrid

//comps
import UseToolTip from './UseToolTip'

import { endpoint } from '../../api/endpoint'
import { Link } from 'react-router-dom'

//hooks
import { useFetch } from '../../hooks/useFetch'
import { useEffect, useState } from 'react'

//types
import { dataProps } from '../../types/fetch-props'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  // const { fetchData, filteredData: data, setFilterType } = useFetch(endpoint)
  const { ToolTip, handleMouseOver, handleMouseOut } = UseToolTip()
  const navigate = useNavigate()

  // tip next to cursor

  return (
    <>
      <div className="flex justify-around text-lg pt-2 lg:flex-col">
        <Link to="/dashboard/profile">
          <h2
            className="hover:underline hover:decoration-1 font-quicksand"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
          >
            Profile
          </h2>
        </Link>
        <Link to="/dashboard/basket">
          <h2 className="hover:underline hover:decoration-1 font-quicksand">Basket</h2>
        </Link>
        <Link to="/dashboard/wishlist">
          <h2 className="hover:underline hover:decoration-1 font-quicksand">Wishlist</h2>
        </Link>
      </div>
          <ToolTip text={'tooltip!'}/>
    </>
  )
}

export default Dashboard

import { useState } from 'react'
//comps
// import UseToolTip from './UseToolTip'
import { DashboardPages } from './dashboard-pages'
import { DashSidebar } from './dash-sidebar'

// import { endpoint } from '../../api/endpoint'
// import { Link } from 'react-router-dom'
//hooks
// import { useFetch } from '../../hooks/useFetch'
//types
// import { dataProps } from '../../types/fetch-props'

const Dashboard = () => {
  // const { fetchData, filteredData: data, setFilterType } = useFetch(endpoint)
  // const { ToolTip, handleMouseOver, handleMouseOut } = UseToolTip()
  const [pageSelector, setPageSelector] = useState<number>(0)
  const { Profile, Basket, Wishlist } = DashboardPages()

  return (
    <div className="lg:flex lg:justify-center lg:gap-10 lg:pe-20 py-5">
      <DashSidebar setPageSelector={setPageSelector} />
      {pageSelector === 0 ? <Profile /> : null}
      {pageSelector === 1 ? <Basket /> : null}
      {pageSelector === 2 ? <Wishlist /> : null}
    </div>
  )
}

export default Dashboard

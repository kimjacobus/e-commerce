import { endpoint } from '../api/endpoint'

//hooks
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'

//types
import { dataProps } from '../types/fetch-props'
import { useNavigate } from 'react-router-dom'

const UserCart = () => {
  const { fetchData, filteredData: data, setFilterType } = useFetch(endpoint)
  const navigate = useNavigate()

  useEffect(() => {
    setFilterType('usercart')
    fetchData()
  }, [])

  return (
    <div className="lg:h-1/2 lg:w-1/4 h-screen w-screen">
      <h2>this is what's in your basket : </h2>
      {data &&
        data.map((d: dataProps) => (
          <div className="singleItem" key={d.id}>
            <h2>€{d.price}</h2>
            <img src={d.imageURL}></img>
            <h2>total amount is : </h2>
          </div>
        ))}

      <button onClick={() => navigate('/checkout')}>CheckOut</button>
    </div>
  )
}

export default UserCart

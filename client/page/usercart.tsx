//hooks
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'

//types
import { dataProps } from '../types/dataprops'
import { useNavigate } from 'react-router-dom'

const UserCart = () => {
  const { fetchData, filteredData: data, setFilterType } = useFetch('http://localhost:3000/posts')
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
            <h2>€{d.amount}</h2>
            <img src={d.image}></img>
            <h2>total amount is : </h2>
          </div>
        ))}

      <button onClick={() => navigate('/checkout')}>CheckOut</button>
    </div>
  )
}

export default UserCart

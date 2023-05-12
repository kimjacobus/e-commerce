import { endpoint } from '../../../api/endpoint'
//hooks
import { useFetch } from '../../../hooks/useFetch'
//types
import { fetchProps, dataProps } from '../../../types/fetch-props'
import { useEffect } from 'react'

export default function LandingGrid() {
  const { fetchData, data }: fetchProps = useFetch(endpoint)

  const slicedData = data.slice(0, 5)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-3 grid-rows-3 bg-orange-100 p-4 gap-2">
      <div className="card col-span-2 lg:h-96 h-28 outline outline-1">
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url('/assets/test.jpg')` }}></div>
      </div>

      {slicedData &&
        slicedData.map((item: dataProps) => (
          <div className="w-auto lg:h-96 h-28 outline outline-1 overflow-hidden">
            <div className="absolute  w-full h-96 bg-gray-500 opacity-0 transition-opacity hover:opacity-100"></div>
            <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${item.imageURL})` }}>
            </div>
           
          </div>
          
        ))}

      <div className="card col-span-2 lg:h-96 h-28 outline outline-1">
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url('/assets/test.jpg')` }}></div>
      </div>
    </div>
  )
}

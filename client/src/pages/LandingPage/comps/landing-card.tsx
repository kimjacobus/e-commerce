import { Diversity1 } from '@mui/icons-material'

import { endpoint } from '../../../api/endpoint'

//hooks
import { useFetch } from '../../../hooks/useFetch'
//types
import { fetchProps, dataProps } from '../../../types/fetch-props'
import { useEffect } from 'react'

export default function LandingCard() {
  const { fetchData, data }: fetchProps = useFetch(endpoint)

  const slicedData = data.slice(0, 5)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-3 grid-rows-3 bg-orange-100 p-3">
      <div className="card col-span-2 h-96 outline outline-1">
        <img className="max-h-full w-auto" src="/assets/test.jpg" alt="Shoes" />
      </div>

      {slicedData &&
        slicedData.map((item: dataProps) => (
          <div className="h-96 w-auto outline outline-1">
            <img className="max-h-full max-w-full object-cover" src={item.imageURL} />
          </div>
        ))}
      <div className="card col-span-2 h-96 outline outline-1">
        <img className="max-h-full w-auto" src="/assets/test.jpg" alt="Shoes" />
      </div>
    </div>
  )
}

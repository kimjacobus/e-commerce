import { endpoint } from '../../../api/endpoint'
//hooks
import { useFetch } from '../../../hooks/useFetch'
//types
import { fetchProps, dataProps } from '../../../types/fetch-props'
import { useEffect} from 'react'

export default function LandingGrid() {
  const { fetchData, data }: fetchProps = useFetch(endpoint)
  
  // const [slicedData, setSlicedData] = useState<any>()

    // setInterval(() => {
    //   console.log('hello 5 seconds');
    //   setSlicedData(data.slice(0, Math.floor(Math.random() * )))

    // },5000)
  
  const slicedData = data.slice(0, 5)





  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-3 grid-rows-3 bg-orange-100 lg:px-44 lg:pb-4 pb-4 px-4 gap-2">
      <div className="card col-span-2 lg:h-96 h-28 outline outline-1">
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url('/assets/test.jpg')` }}></div>
      </div>

      {slicedData &&
        slicedData.map((item: dataProps) => (
          <div className="w-auto lg:h-96 h-28 outline outline-1">
          <div className="bg-cover bg-center w-full h-full relative">
            <img className="w-full h-full object-cover" src={item.imageURL} alt='img' />
          </div>
        </div>
        
          
        ))}

      <div className="card col-span-2 lg:h-96 h-28 outline outline-1">
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url('/assets/test.jpg')` }}></div>
      </div>
    </div>
  )
}

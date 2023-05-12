import { Dispatch, SetStateAction } from 'react'

export type dataProps = {
  id: number
  price: number
  description: string
  name: string
  imageURL: string
}

export type fetchProps = {
  fetchData: () => Promise<void>
  data: dataProps[]
  filteredData: dataProps[] | null
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  setFilterType: Dispatch<SetStateAction<string>>
}

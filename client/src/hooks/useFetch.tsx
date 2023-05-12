// hooks
import { useState, useEffect } from 'react'

// types
import { dataProps } from '../types/fetch-props'

export const useFetch = (url: string) => {
  const [data, setData] = useState<dataProps[]>([])
  const [filteredData, setFilteredData] = useState<dataProps[] | null>([])
  const [query, setQuery] = useState<string>('')
  const [IDquery, setIDquery] = useState<string[]>([])
  const [filterType, setFilterType] = useState<string>('')

  const fetchData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
        } else {
          setData(data)
          setFilteredData(data)
        }
      })
  }
  useEffect(() => {
    if (data) {
      if (filterType === 'searchbar') {
        const filteredDataOnCaption = data.filter((item: dataProps) =>
          item.description.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredData(filteredDataOnCaption)
      }
      if (filterType === 'filterbuttons') {
        const filteredDataOnCategory = data.filter((item: dataProps) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredData(filteredDataOnCategory)
      }
      if (filterType === 'usercart') {
        const getCart = localStorage.getItem('cart')
        if (getCart) {
          const cartItems = JSON.parse(getCart)
          const cartIDs = cartItems.map((item: { id: string }) => item.id)
          setIDquery(cartIDs)
          const filteredDataOnCart = data.filter((item: dataProps) => IDquery.includes(item.id.toString()))
          setFilteredData(filteredDataOnCart)
        } else {
          setFilteredData(null)
        }
      }
    }
  }, [query, data, filterType])

  return { fetchData, data, filteredData, query, setQuery, setFilterType }
}

//components
import SearchBar from './homepage-comps/searchbar'
import MainGrid from '../MainGrid/maingrid'
import { SingleItem } from '../SingleItem/single-item'

//hooks
import { useEffect, useState } from 'react'
import useAddToCart from '../../hooks/useAddToCart'

import { Routes, Route } from 'react-router-dom'

//types
import { fetchProps } from '../../types/fetch-props'

function Homepage({ fetchData, data, filteredData, query, setQuery, setFilterType }: fetchProps) {
  const [selectModal, setSelectModal] = useState<boolean>(true)
  const { AddToUserCart } = useAddToCart()

  useEffect(() => {
    fetchData()
  }, [query])

  return (
    <div className="Homepage">
      {selectModal ? (
        <div className="Home">
          <SearchBar setQuery={setQuery} setFilterType={setFilterType} />
          <MainGrid data={filteredData} setSelectModal={setSelectModal} />
        </div>
      ) : (
        <div className="Modal">
          <Routes>
            <Route
              path="/:id"
              element={
                <SingleItem
                  setQuery={setQuery}
                  data={data}
                  setSelectModal={setSelectModal}
                  AddToUserCart={AddToUserCart}
                />
              }
            />
          </Routes>
        </div>
      )}
    </div>
  )
}

export default Homepage

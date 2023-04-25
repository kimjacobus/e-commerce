//components
import SearchBar from "./homepage-comps/searchbar"
import FilterButtons from "./homepage-comps/filterbuttons"
import MainGrid from "../MainGrid/MainGrid"
import {SingleItem} from "../SingleItem/SingleItem"

//hooks
import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { Routes, Route} from "react-router-dom"


function Homepage() {
   const [query, setQuery] = useState<string>('')
   const [selectModal, setSelectModal] = useState<boolean>(true)
   const {fetchData, data} = useFetch("http://localhost:3000/posts?" + query)

   useEffect(() => {
      fetchData()
   },[query])

   return (
      <div className="Homepage">
         {selectModal ? (<div className="Home">
         <SearchBar setQuery={setQuery}/>
         <FilterButtons setQuery={setQuery}/>
         <MainGrid data={data} setSelectModal={setSelectModal}/>
         </div>) : ( 
         <div className="Modal">
         <Routes>
            <Route path='/:id' element={<SingleItem setQuery={setQuery} data={data} setSelectModal={setSelectModal}/>}/>
         </Routes>
         </div>)}
         </div>
   )
}

export default Homepage

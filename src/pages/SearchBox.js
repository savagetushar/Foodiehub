import { useState } from "react"
import useFilter from "../utils/useFilter"

const SearchBox = ({restaurants,setrestaurants,search,setSearch}) => {
  const filter = useFilter(search ,restaurants)
    return (
        <div className="flex justify-center m-6">
            <input type="text" placeholder="Search a restaurant you want..." className=" rounded-l-full block w-96 p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-xs " onChange={(e) => {
                setSearch(e.target.value)
            }} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-full"
            onClick={()=>{
                setrestaurants(filter)
            }}
            >Search</button>
        </div>
    )
}
export default SearchBox;
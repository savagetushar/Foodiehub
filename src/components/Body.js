import {  useContext, useEffect, useState } from "react";
import RestaurantsCard from "../pages/RestaurantsCard";
import SearchBox from '../pages/SearchBox'
import ShimmerCardRestaurantCard from "./ShimmerRestaurantCard";
import { GET_RESTAURANTS_LIST } from "./constant";
import { Link } from "react-router-dom";
const Body = () => {
    const [restaurants, setrestaurants] = useState([])
    const [search , setSearch] = useState('')
    const [Page , setpage] = useState(1)
    useEffect(() => {
        getRestaurant()
    }, [search , Page])
    async function getRestaurant() {
        const data = await fetch(GET_RESTAURANTS_LIST)
        const json = await data.json()
        setrestaurants(prev => [...prev , ...json?.data?.cards[2]?.data?.data?.cards])
    }

const InfinteScrollHandle = ()=>{
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
        setpage(prev => prev+1)
    }
}
    useEffect(()=>{
        window.addEventListener('scroll' , InfinteScrollHandle)
        return ()=>{
            window.removeEventListener('scroll' , InfinteScrollHandle)
        }
    } , [])

    return (
        <>
            <SearchBox  restaurants={restaurants} setrestaurants={setrestaurants} setSearch={setSearch} search={search}/>
            <div className="flex flex-wrap justify-center items-center hover:border-b-white">
                {
                    (restaurants.length === 0) ? <ShimmerCardRestaurantCard /> :
                        restaurants.map((item) => {
                            return (
                                <Link to={`/restaurantmenu/${item.data.id}`} key={item.data.id}>
                                    <RestaurantsCard {...item} key={item.data.id}/>
                                </Link>
                            )
                        })

                }
            </div>

        </>
    )
}
export default Body;
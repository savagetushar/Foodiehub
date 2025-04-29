import { useEffect, useState } from "react";
import RestaurantsCard from "../pages/RestaurantsCard";
import SearchBox from '../pages/SearchBox';
import ShimmerCardRestaurantCard from "./ShimmerRestaurantCard";
import { GET_RESTAURANTS_LIST } from "./constant";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        getRestaurant();
    }, [search, page]);

    async function getRestaurant() {
        try {
            const data = await fetch(GET_RESTAURANTS_LIST);
            const json = await data.json();
            const newRestaurants = json?.data?.cards[2]?.data?.data?.cards;

            if (Array.isArray(newRestaurants)) {
                setRestaurants(prev => [...prev, ...newRestaurants]);
            } else {
                console.error("Restaurants list is not an array:", newRestaurants);
            }
        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
        }
    }

    const infiniteScrollHandle = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', infiniteScrollHandle);
        return () => {
            window.removeEventListener('scroll', infiniteScrollHandle);
        };
    }, []);

    return (
        <>
            <SearchBox
                restaurants={restaurants}
                setrestaurants={setRestaurants}
                setSearch={setSearch}
                search={search}
            />
            <div className="flex flex-wrap justify-center items-center hover:border-b-white">
                {
                    (restaurants.length === 0) ? (
                        <ShimmerCardRestaurantCard />
                    ) : (
                        restaurants.map((item) => (
                            <Link to={`/restaurantmenu/${item.data.id}`} key={item.data.id}>
                                <RestaurantsCard {...item} />
                            </Link>
                        ))
                    )
                }
            </div>
        </>
    );
};

export default Body;

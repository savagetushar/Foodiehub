import {ImageCloundinaryURL} from '../components/constant'

const RestaurantsCard = (props) => {
    const {name ,cuisines ,cloudinaryImageId,slaString,costForTwoString ,avgRating} = props.data
    // console.log(cuisines)
    return (
            <div className="row  hover:shadow-xl w-64 h-80  m-4 rounded">
                <img src={`${ImageCloundinaryURL}/${cloudinaryImageId}`} alt="product-image" className=" rounded" />
                <div className="mt-3">
                    <h3 className="font-xl text-lg ml-2">{name}</h3>
                    <div className="ml-2 text-sm">{cuisines.join(' ')}</div>
                    <div className="flex justify-around mt-3">
                        <div className="" style={{backgroundColor:"#49C478"}}>
                            <span>⭐</span>
                            <span className="p-2 font-semibold text-sm">{avgRating}</span>
                        </div>
                        <div>•</div>
                        <div className="font-semibold text-sm">{slaString}</div>
                        <div className="font-semibold text-sm">{costForTwoString}</div>
                    </div>
                </div>
            </div>
    )
}
export default RestaurantsCard
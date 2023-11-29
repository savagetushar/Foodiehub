import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addItems, removeItems } from "../utils/cartSlice"
import store from "../utils/store"
import RestaurantsNotFound from "./RestaurantsNotFound"
import { langitude, latitude } from "./constant"

const ImageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit'

const HandleStylebtn = {
  position: "relative",
  left: "14px",
  top: "-10px",
  color: '#61B247'

}
const RestaurantMenu = () => {

  const { id } = useParams()
  const [menu, setmenu] = useState(null)
  const [menuitem, setmenuitem] = useState(null)
  const dispatch = useDispatch()
  const Cart = useSelector(store=> store.cart.items)
  useEffect(() => {
    getRestaurantMenu()
  }, [])
  async function getRestaurantMenu() {
    const data = await fetch(`https://foodhu.onrender.com/api/menu?lat=${latitude}&lng=${langitude}&restaurantId=${id}`)
    const json = await data.json()
    setmenu(json.data.cards[0].card.card.info)
    setmenuitem(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
  }

  if (!menu) return <h1>Loading....</h1>
  const { name, avgRating, totalRatingsString, costForTwoMessage, feeDetails, cuisines
    , locality } = menu
    // console.log(menu);

  console.log("item",menuitem);
  // const { slaString, lastMileTravelString } = nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla
  console.log(totalRatingsString, avgRating);

function HandleAddItem(item) {
dispatch(addItems(item))
}
function handleRemoveItem(item){
  dispatch(removeItems(item))
}
if(!menuitem) return <RestaurantsNotFound/>
  return (
    <>
      <div className="mt-10 p-5">
        <div className="flex justify-around">
          <div className="">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="font-light">{cuisines.join(', ')}</p>
            <p className="font-light">{locality},</p>
          </div>
          <button className="shadow-lg p-3 flex items-center">
            <span className="p-1" style={{ color: "#3C9B6C" }}>⭐</span>
            <span className="font-bold" style={{ color: "#3C9B6C" }}>{avgRating}</span>
            <hr className="border-t border-gray-400 mx-4 h-4" />
            <span className="font-light text-sm ">{totalRatingsString}</span>
          </button>
        </div>
        <div className="ml-52">
          <ul className="mt-5 ">
            <li>{feeDetails.message}</li>
            <div className="flex mt-2">
              <li className="flex items-center ml-3"><i class="fa fa-circle-half-stroke mr-1"></i><span className="font-bold">200</span></li>
              <li className="flex items-center m-3"><i class="fa fa-money-bill mr-2"></i><span className="font-bold">{costForTwoMessage}</span></li>
            </div>
          </ul>
        </div>

        <hr class="w-1/2 my-4 border-t border-gray-700 mx-auto" />
  
          
        {
          Object.values(menuitem).map(ite => {
           return(
              <>
                <div className="flex items-center ml-72 mt-16">
                  <div>
                    <h3 className="font-bold text-lg">{ite.card.info.name}</h3>
                    <p className="font-light text-base">₹{(!ite.card.info.price / 100)?ite.card.info.defaultPrice/100:ite.card.info.price / 100}</p>
                  </div>
                  <div className="relative ml-auto">
                    <img className="w-32 sm:w-24 mr-52" src={`${ImageUrl}/${ite.card.info.imageId}`} alt="" />
                    <button className="font-bold text-lg bg-white  w-20 rounded-lg absolute -top-6 right-0" style={HandleStylebtn}>
                     <div className="flex justify-between">
                     <button className="m-1 text-2xl font-bold active:text-green-900 hover:text-gray-500"
                     onClick={()=> handleRemoveItem(ite.card.info)}
                     >-</button>
                     <p className="mt-2">{Cart.length}</p>
                      <button className="m-1 text-lg font-bold active:text-green-800 hover:text-gray-500"
                     onClick={()=> HandleAddItem(ite.card.info)}
                     >+</button>
                     </div>
                    </button>
                  </div>
                </div>
                <hr class="w-1/2 my-4 border-t border-gray-700 mx-auto" />

              </>
            )
          })
        }
      
      </div>
    </>
  )
}
export default RestaurantMenu
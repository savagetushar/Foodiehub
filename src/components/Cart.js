import { useDispatch, useSelector } from "react-redux"
import store from "../utils/store"
import { ImageCloundinaryURL } from "./constant";
import { removeItems } from "../utils/cartSlice";
import EmptyCart from '../assets/cart.jpg'

const Cart = () => {
    const Cart = useSelector(store => store.cart.items)
    console.log(Cart);
    const dispatch = useDispatch()
    let total  = 0 
    Cart.forEach(element => {
        if(!element.defaultPrice ){
            total +=element.price/100
        }else{
            total +=element.defaultPrice/100
        }
            
    });
    const RemoveItems = ()=>{
      dispatch(removeItems())
    }
    return (
        <div className="flex justify-around mt-20">
            {
                Cart.length ==0?<img src={EmptyCart}  className="w-72"/>:
            <div className="">
                <h2 className="font-semibold text-lg">Shopping Cart</h2>
                <hr />
                {
                   Object.values(Cart).map((car)=>{
                    return(
                        <>
                        <div className="flex mt-3" key={car.id}>
                    <li className="list-none mr-5 mt-10" onClick={RemoveItems}><i className="fa-solid fa-xmark"></i></li>
                <img className="w-36 mt-3 rounded-xl" src={`${ImageCloundinaryURL}/${car.imageId}`} alt/>
                <h3 className="text-2xl font-light mt-10 ml-3">{car.name}</h3>
                <h3 className="text-2xl font-light mt-10 ml-7">₹{(!car.defaultPrice/100)?car.price/100:car.defaultPrice/100}</h3>
          
            </div>
                <hr className="mt-3"/>
                </>
                    )
                   })
                }
            </div>
            }
            <div className="">
                <h2 className="font-semibold text-lg">Cart Totals</h2>
                <hr />
                <div className="flex mt-3">
                    <h3 className="font-semibold">SubTotal</h3>
                    <h3 className="ml-14 font-semibold">₹{total}</h3>
                </div>
                <hr/>
                <button className="mt-10 p-3 bg-slate-700 rounded-md text-white">Proceed to checkout</button>
            </div>
        </div>
    )
}

export default Cart
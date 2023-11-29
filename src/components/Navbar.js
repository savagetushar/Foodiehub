import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../pages/Title";
import { useSelector } from "react-redux";
import store from "../utils/store";
import DarkModeContext from "../utils/ThemeDark";
const Navbar = () => {
    const [islogin, setlogin] = useState(true)
    const cartItem = useSelector(store => store.cart.items)
    const Mode = useContext(DarkModeContext)
  
    return (
        <>
            <nav className="flex justify-between items-center shadow-lg">
                <div className="flex">
                    <Title />
                </div>
                <ul className="flex m-3">
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/" className="font-medium">Home</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/about" className="font-medium">About</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/contact" className="font-medium">Contact</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded" style={{ marginTop: "5px" }}>
                        <Link to="/cart" className="flex items-center">
                            <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center" style={{ top: "23px", right: "83px" }}>{cartItem.length}</span>
                            <i class="fa-solid fa-cart-shopping"></i>

                        </Link>
                    </li>

                    <li className="p-3 hover:bg-indigo-400 hover:rounded-3xl">
                        {
                            islogin ?
                                <Link to="signin">
                                    <button className="font-medium"
                                        onClick={() => {
                                            setlogin(false)
                                        }}>Login</button></Link> : <Link to=""><button className="font-medium" onClick={() => {
                                            setlogin(true)
                                        }}>Logout</button></Link>
                        }
                    </li>
                </ul>
         
            </nav>
        </>
    )
}
export default Navbar;
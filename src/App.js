import { createBrowserRouter, Outlet } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import useOnline from "./utils/useonline"
import OfflineComponent from "./components/OfflineComponent"
import Body from "./components/Body"
import RestaurantMenu from "./components/RestaurantMenu"
import { lazy, Suspense, useState } from "react"
import ShimmerCardRestaurantCard from "./components/ShimmerRestaurantCard"
import { Provider } from "react-redux"
import { HandleContext } from "./utils/HandleContext"
import store from "./utils/store"
import Cart from "./components/Cart"
import ErrorPage from "./Error/ErrorPage"
import DarkModeContext from "./utils/ThemeDark"
const Navbar = lazy(()=> import('./components/Navbar'))
const About = lazy(()=>  import('../src/components/About'))
const Footer = lazy(()=> import('./components/Footer'))
const Contact = lazy(()=> import('./components/Contact'))
const Profile = lazy(()=>import('./pages/Profile'))

function App() {
    const isOnline = useOnline()
    const [darkMode , setDarkMode] = useState(false)
  function toggleDarkMode(){
    setDarkMode(darkMode =>  !darkMode)
  }
  
    return (!isOnline)?<OfflineComponent/>:(
        <>
        <DarkModeContext.Provider value={{darkMode , toggleDarkMode}}>
        <Provider store={store}>
          <Navbar />
            <Outlet />
            <Footer />
            </Provider>
            </DarkModeContext.Provider>
        </>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<h1>Loading.......</h1>}>
            <App />
        </Suspense>,
        children: [
            {
                path: "about",
                element: <Suspense fallback={<h1>Loading....</h1>}>
                    <About />
                </Suspense>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path: "contact",
                element:<Suspense fallback={<h1>Loading.....</h1>}>
                     <Contact />
                </Suspense>
            },
            {
                    path:"/",
                    element:<Body/>
            },{
                path:"/restaurantmenu/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        
        ],
        errorElement:<ErrorPage/>

    },
    {
        path:"/signin",
        element:<LoginPage/>
    }
])

export { approuter } 
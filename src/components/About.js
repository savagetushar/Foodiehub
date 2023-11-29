import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import burgerphoto from '../assets/burger.png'
const About = () => {
    const [isprofile , setprofile] = useState(false)
    return (
        <>
        <div className='container'>
            <div className='flex justify-center mt-10'>
                {
                isprofile?
                <>
                <Link to='/about'>
                <div className='flex justify-center'>
                <button className='text-lg text-white p-2 font-semibold rounded border-white bg-slate-900'
                onClick={()=>{
                    setprofile(false)
                }}
                >Hide My Profile</button>
                </div>
                <Outlet/>
                </Link>
          
                </>
                :
                <Link to="profile">
    
                <button className='text-lg text-white p-2 font-semibold rounded border-white bg-slate-900' onClick={()=>{
                    setprofile(true)
                }}>Show My Profile</button>
               
                </Link>
                }
            </div>
        <div className="about flex justify-around m-10">
        <div className="left mt-24 mr-10">
        <h1 className='text-6xl font-bold leading-1'>Welcome to <br/>The world of <br/><span className='text-orange-300 leading-10'>Testy & Fresh Food</span></h1>
        <h4 className='text-xl tracking-wider leading-10'>"Better you will feel if you eat a Food<span className=''>Fire</span>healthy meal"</h4>
        </div>
        <div className="right">
    
        <img src={burgerphoto} alt="burger-photo"  />
        </div>
        </div>
        </div>
        </>
    )
}

export default About
import Something from '../assets/something.jpg'

const RestaurantsNotFound =()=>{
    return(
        <div className="flex justify-center items-center">
            <img src={Something} alt="not found" className='w-1/2  mt-12'/>

        </div>
    )

}

export default RestaurantsNotFound
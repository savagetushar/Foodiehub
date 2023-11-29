const useFilter =(search , resturants)=>{
    const filter = resturants.filter((item)=>{
        return item?.data?.name?.toLowerCase()?.includes(search?.toLowerCase())
    })
return filter
}

export default useFilter;
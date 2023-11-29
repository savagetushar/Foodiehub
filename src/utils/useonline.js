import { useEffect, useState } from "react"

const useOnline = ()=>{
const [isOnline , setOnline] = useState(true)
    useEffect(()=>{
        function handleOnline(){
            setOnline(true)
        }
        function handleOffline(){
            setOnline(false)
        }
        window.addEventListener('online' , handleOnline)
        window.addEventListener('offline' , handleOffline)
        // unmounting phase
        return ()=>{
        window.removeEventListener('online',handleOnline)
        window.removeEventListener('offline' , handleOffline)
        }
    },[])
    return isOnline
}
export default useOnline;
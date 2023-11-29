import React,{useEffect} from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const Error = useRouteError()
    useEffect(() => {
        document.title = `${Error.status} Not Found`
    }, [])
    
    return (
    <div className='flex justify-center items-center'>
        <div className='m-36 p-10'>
        <img className='w-36 ml-52 mb-10' src='https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png' alt=''/>
        <p className='font-semibold text-lg'>{Error.status} This page isn't available. Sorry about that. Try searching for something else.</p>
        </div>
    </div>
  )
}

export default ErrorPage
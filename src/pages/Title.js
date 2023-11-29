import logo from '../assets/logo.jpg'
const Title = () => {
    return (
    <>
        <a href='/'>
            <div className="logo ml-4 mt-1">
                <img src={logo} alt="logo-img" className='w-20 rounded bg-none' />
            </div>
        </a>
        
        </>
    )
}

export default Title
import { Field, Formik } from "formik";
import logo from '../assets/logo.jpg'
const LoginPage = ()=>
{
    return(
    <div className="container mx-auto ">
        <div className="flex justify-center">
            <div className="w-1/3 shadow-2xl p-10 mt-20">
                {/* logo */}
                <div className="flex justify-center">
                    <img src={logo} alt="logo" className="w-20 h-20" />
                </div>
                <Formik
                initialValues={{
                    email:"",
                    password:""
                }}
                onSubmit={(values)=>{
                    console.log(values)
                }}
                >
                    {
                        (props)=>(
                            <form onSubmit={props.handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Email" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="******************" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        )}
                </Formik>
            </div>
        </div>
    </div>



    )
}
export default LoginPage;
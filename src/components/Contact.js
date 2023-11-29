import {
    Field,
    Formik,
    useFormik
} from 'formik'
import ContactleftImg from '../assets/contactleft.jpg'
const initialValues = {
    name: "",
    email: "",
    message: ""
}
const Contact = () => {
    const { values, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, actions) => {
            console.log(values);
            actions.resetForm()
        }
    })
    return (
        <>
            <div className='flex justify-around m-20'>

                <div className=''>
                    <img src={ContactleftImg} alt="image" className='w-30 contact-img object-cover' />
                </div>
                <div className='row relative bottom-2'>
                    <Formik>
                        <form onSubmit={handleSubmit} className="shadow-lg p-20 h-full">
                            <h1 className='text-center font-bold text-3xl'>Conatct Us</h1>
                            <div className='mb-4'>
                                <label forhtml="name" className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                                <Field name="name" placeholder="name" value={values.name} onChange={handleChange} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight  p-2 w-11/12" />
                            </div>
                            <div className='mb-4'>
                                <label forhtml="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                                <Field type="email" placeholder="email" value={values.email} onChange={handleChange} name="email" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight  p-2 w-11/12" />
                            </div>
                            <div>
                                <label forhtml="message" className='block text-gray-700 font-bold mb-2'>Message</label>
                                <textarea rows="3" cols="40" name='message' placeholder=' Type your Message here...' value={values.message} onChange={handleChange} className="shadow border rounded p-2" />
                            </div>
                            <div className='mb-4 text-center'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded  mt-3'>Submit</button>
                            </div>
                        </form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Contact;
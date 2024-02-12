import { useFormik } from 'formik';
import { basicSchema } from '../../shemas';

const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
}

function Login_in(){

    const {values,isSubmitting, errors,touched, handleBlur,handleSubmit, handleChange} = useFormik({
        initialValues: {
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          comfirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,
        
      });
    //  console.log(errors)

     const errorstyle = 'border-red-600 block border-2 p-3 rounded-xl w-full outline-none'
     const inputstyle = 'border-blue-700 block border-2 p-3 rounded-xl w-full outline-none'
    return(
        <div className="flex-1 flex flex-col justify-center my-[20%] lg:my-[4%] items-center">
            <p className="text-blue-700 font-bold text-3xl md:text-5xl text-center">Create  an account</p>
            <form onSubmit={handleSubmit}  className=' mt-[2%] w-full flex flex-col gap-y-4 items-center' >
                <div className="space-y-1 w-[90%] md:w-[40%]">
                    <label className='pl-1' htmlFor="email">First Name</label>
                    <input 
                    value={values.firstName}
                    autoComplete='on'
                    onChange={handleChange}
                    onBlur={handleBlur} //validates the form when you click off the input
                    id="firstName"
                    type="text"
                    name='firstName'
                    placeholder="Enter your firstName"
                    className={errors.firstName && touched.firstName? errorstyle:inputstyle} />
                    {errors.firstName && touched.firstName && <p className='text-red-600'>{errors.firstName}</p>}   
                </div>
                <div className="space-y-1 w-[90%] md:w-[40%]">
                    <label className='pl-1' htmlFor="email">Last Name</label>
                    <input 
                    value={values.lastName}
                    autoComplete='on'
                    onChange={handleChange}
                    onBlur={handleBlur} //validates the form when you click off the input
                    id="lastName"
                    type="text"
                    name='lastName'
                    placeholder="Enter your lastName"
                    className={errors.lastName && touched.lastName? errorstyle:inputstyle} />
                    {errors.lastName && touched.lastName && <p className='text-red-600'>{errors.lastName}</p>}   
                </div>
                <div className="space-y-1 w-[90%] md:w-[40%]">
                    <label className='pl-1' htmlFor="email">Email Address</label>
                    <input 
                    value={values.email}
                    autoComplete='on'
                    onChange={handleChange}
                    onBlur={handleBlur} //validates the form when you click off the input
                    id="email"
                    type="email"
                    name='email'
                    placeholder="Enter your email"
                    className={errors.email && touched.email? errorstyle:inputstyle} />
                    {errors.email && touched.email && <p className='text-red-600'>{errors.email}</p>}
                    
                </div>
                <div className="space-y-1 w-[90%] md:w-[40%]">
                    <label className='pl-1' htmlFor="password">password</label>
                    <input className={errors.comfirmPassword && touched.comfirmPassword? errorstyle:inputstyle}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} //validates the form when you click off the input
                    id="password"
                    type="password"
                    name='password'
                    placeholder="Enter your password"
                    />
                    {errors.password && touched.password && <p className='text-red-600'>{errors.password}</p>}
                </div >
                <div className="space-y-1 w-[90%] md:w-[40%]">
                    <label className='pl-1' htmlFor="password">Comfirm password</label>
                    <input 
                    className={errors.comfirmPassword && touched.comfirmPassword? errorstyle:inputstyle}
                    value={values.comfirmPassword}
                    type='password'
                    name='comfirmPassword'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="comfirmPassword"
                    placeholder="comfirm your password"
                    />
                    {errors.comfirmPassword && touched.comfirmPassword && <p className='text-red-600'>{errors.comfirmPassword}</p>}
                </div>
                
                <button disabled={isSubmitting} type='submit' className='w-[90%] mt-3 md:w-[40%] disabled:opacity-35 p-3 text-white rounded-lg bg-blue-700'>Login</button>
            </form>
            <p className='p-3'>Forgot password click <span className='text-blue-700'>Here</span></p>
        </div>

    )
}
export default Login_in
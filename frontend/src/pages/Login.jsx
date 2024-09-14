import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Login = () => {
  const {register,handleSubmit,watch,formState:{errors,isSubmitting}} = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve)=>{
      setTimeout(resolve,1000);
    })
    console.log(data)
  }
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto">
    <h2 className="text-2xl text-white font-semibold mb-4">Login</h2>
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-white">Email</label>
        <input
          type="email"
          {...register("email",{
            required :"Email is required..",
            validate : (value)=>{
              if(!value.includes('@')){
                return "Email must include @"
              }
            }
           })}
          placeholder='Enter your email..' 
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md" 
        />
         {errors.email && (
            <div className='text-red-500'>{errors.email.message}</div>
          )}
      </div>
      <div className="mb-4">
        <label className="block text-white">Password</label>
        <input
            type="password"
            {...register("password",{
              required :"Password is required..",
              minLength:{
                value :8,
                message : "Password must be 8 character long.."
              }
            })}
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          />
           {errors.password && (
            <div className='text-red-500'>{errors.password.message}</div>
          )}
      </div>
      <button 
         disabled={isSubmitting}
         type='submit' 
         className="w-full bg-green-500 text-white px-4 py-2 rounded-md">
        {isSubmitting ? 'Logging....' : 'Login'}
      </button>
    </form>
    <div className="mt-4 text-center">
      <p className="text-white">Don't have an account?</p>
      <Link
        to="/register"
        className="text-blue-400 hover:underline mt-2 inline-block"
      >
        Sign up
      </Link>
    </div>
  </div>

  )
}

export default Login
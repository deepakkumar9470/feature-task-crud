import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto">
    <h2 className="text-2xl text-white font-semibold mb-4">Login</h2>
    <form className="w-full">
      <div className="mb-4">
        <label className="block text-white">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          required
        />
      </div>
      <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md">
        Login
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
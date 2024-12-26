import  { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')


  const {  setUser } = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
    
      
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex justify-center items-center !w-[100%]  h-[100vh]'>
      <div className='px-7 py-7  flex flex-col  shadow-2xl'>
        <div className=''>
          <h1 className='text-2xl font-semibold mb-4'>
            Drivo
          </h1>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type='email'
              placeholder='email@example.com'
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type='password'
              placeholder='password'
            />

            <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
              Login
            </button>
          </form>
          <p className='text-center'>
            New here?{' '}
            <Link
              to='/signup'
              className='text-blue-600'
            >
              Create new Account
            </Link>
          </p>
        </div>
        <div className='mt-5'>
          <Link
            to='/captain-login'
            className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin
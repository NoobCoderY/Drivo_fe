
import { Link } from 'react-router-dom'
import Logo from '../assets/Drivo_logo.png'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1721091757498-669cbc03d4b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen  flex justify-between flex-col w-full'>
        <img
          className='w-[100px] '
          src={Logo}
          alt=''
        />
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with Drivo</h2>
          <Link
            to='/login'
            className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start
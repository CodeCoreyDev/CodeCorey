import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-20 bg-violet-900 flex justify-center items-center text-white'>
        <div className='w-[1200px] flex gap-40'>
            <Link to='/'>Code Corey</Link>
            <Link to='/about'>About</Link>
            <Link to='/games'>Games</Link>
            <Link to='blog'>Blog</Link>
        </div>
    </div>
  )
}

export default Home
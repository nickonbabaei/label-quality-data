import React from 'react'
import logo from '../images/logo.png'

const Nav = () => {
  return (
    <div className='w-screen h-28 bg-black px-4 sm:px-8 flex items-center'>
        <div className='w-36 h-16' style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover' }}></div>
    </div>
  )
}

export default Nav
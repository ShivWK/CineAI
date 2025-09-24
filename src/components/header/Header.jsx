import React from 'react'

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full bg-transparent h-24 z-50 flex items-center justify-center'>
      <div className='w-[1200px] mx-auto flex justify-between items-center'>
        <p className='text-[rgb(229,9,20)] font-semibold text-5xl'>CineAI</p>
        <button className='py-1 pb-2 px-4 rounded bg-[rgb(229,9,20)] text-white font-semibold tracking-wide text-lg flex items-center justify-center cursor-pointer active:scale-95 transform transition-all duration-75 ease-linear'>Sign In</button>
      </div>
    </header>
  )
}

export default Header
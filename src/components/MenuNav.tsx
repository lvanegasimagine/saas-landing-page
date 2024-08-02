import React from 'react'

const MenuNav = ({
  //   toggleMenu,
  className
}: {
  //   toggleMenu: () => void;
  className: string
}) => {
  return (
    <nav className={className}>
      <a
        href='#'
        className='text-lg tracking-wider transition-all hover:font-medium hover:text-[#001E80] hover:transition hover:ease-in-out'
      >
        About
      </a>
      <a
        href='#'
        className='text-lg tracking-wider transition-all hover:font-medium hover:text-[#001E80] hover:transition hover:ease-in-out'
      >
        Features
      </a>
      <a
        href='#'
        className='text-lg tracking-wider transition-all hover:font-medium hover:text-[#001E80] hover:transition hover:ease-in-out'
      >
        Customers
      </a>
      <a
        href='#'
        className='text-lg tracking-wider transition-all hover:font-medium hover:text-[#001E80] hover:transition hover:ease-in-out'
      >
        Updates
      </a>
      <a
        href='#'
        className='text-lg tracking-wider transition-all hover:font-medium hover:text-[#001E80] hover:transition hover:ease-in-out'
      >
        Help
      </a>
      <button className='inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-lg font-medium tracking-wider text-white'>
        Get for free
      </button>
    </nav>
  )
}

export default MenuNav

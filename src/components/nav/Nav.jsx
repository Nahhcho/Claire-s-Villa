import React, { useState } from 'react';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='bg-[#c3f2cb] w-full'>
      <div className='flex justify-between items-center p-4 text-black font-bold lg:ml-52 lg:mr-52'>
        <p className='font-edwardian text-5xl cursor-pointer'>Claire's Villa</p>
        {/* Responsive menu toggle button */}
        {/* Responsive navigation links */}
        <div className={`sm:flex text-black ${showMenu ? 'flex' : 'hidden'} w-full sm:w-auto`}>
          <p className='cursor-pointer text-xl p-4'>Home</p>
          <p className='cursor-pointer text-xl p-4'>Services</p>
          <p className='cursor-pointer text-xl p-4'>Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

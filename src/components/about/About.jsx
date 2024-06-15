import React from 'react';
import pic from './about.png';
import './about.css';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 bg-[#c3f2cb] p-4 md:p-8 lg:p-16'>
      <div className='flex justify-center lg:justify-start'>
        <img src={pic} alt="About Claire's Villa" className='w-full max-w-md' />
      </div>
      <div className='flex flex-col py-8 lg:py-16 pr-0 lg:pr-16'>
        <header className='text-[28px] md:text-[32px] lg:text-[35px] font-bold mb-4'>
          Claire&apos;s Villa provides a nurturing environment for seniors
        </header>
        <p className='mb-8'>
          Experience the comfort of Claire&apos;s Villa, where every resident is part of our extended
          family. Enjoy a worry-free retirement lifestyle with us.
        </p>
        <Link to='offers' smooth={true} duration={500}>
          <button className='visit-button h-[35px] leading-[35px] w-[200px] mt-auto'>
            <p className='text-[18px]'>
              Tour our services
            </p>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

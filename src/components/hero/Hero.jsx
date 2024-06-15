import React from 'react';
import pic from './hero.png';
import './hero.css';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='p-4 md:p-8 lg:p-28 pb-0'>
        <header className='mb-4 text-3xl md:text-4xl lg:text-[40px] leading-tight font-bold font-roboto'>
          Claire&apos;s Villa: The perfect retreat for peace and comfort
        </header>
        <p className='text-base md:text-lg'>
          Claire&apos;s Villa offers a serene environment for your retirement years, with personalized care and engaging activities.
        </p>
        <div className='flex flex-col sm:flex-row mt-4'>
          <Link to='discover-section' smooth={true} duration={500}>
            <button className='discover-button h-[40px] md:text-[18px] md:h-[50px] mb-4 sm:mb-0 sm:mr-2'>
              Discover Claire&apos;s Villa
            </button>
          </Link>
          <Link to='email' smooth={true} duration={500}>
            <button className='discover-button h-[40px] md:text-[18px] md:h-[50px]'>
              Book a tour
            </button>
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center pt-8 lg:pt-16 xl:p-16'>
        <img src={pic} alt="Claire's Villa" className='w-full h-auto max-w-md' />
      </div>
    </div>
  );
}

export default Hero;

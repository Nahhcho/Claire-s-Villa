import React from 'react';

const Strip = () => {
  return (
    <div className='flex flex-col lg:flex-row px-4 md:px-16 lg:px-36 justify-between lg:mb-16'>
      <div className='mb-8 lg:mb-0'>
        <p className='font-medium text-center leading-[31px]'>Community Amenities</p>
        <p className='text-center font-bold leading-[52px] text-[30px]'>Luxury</p>
      </div>
      <div className='mb-8 lg:mb-0'>
        <p className='font-medium text-center leading-[31px]'>Family-like atmosphere</p>
        <p className='text-center font-bold leading-[52px] text-[30px]'>Visit Us Today</p>
      </div>
      <div className='mb-8 lg:mb-0'>
        <p className='font-medium text-center leading-[31px]'>Community Amenities</p>
        <p className='text-center font-bold leading-[52px] text-[30px]'>Luxury</p>
      </div>
      <div className='mb-8 lg:mb-0'>
        <p className='font-medium text-center leading-[31px]'>Exceptional care and</p>
        <p className='text-center font-bold leading-[52px] text-[30px]'>Award-winning</p>
      </div>
    </div>
  );
}

export default Strip;

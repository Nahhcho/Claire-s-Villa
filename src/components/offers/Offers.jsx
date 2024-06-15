import React from 'react';
import nut from './nutrition.png';
import gangy from './gangy.png';
import laundry from './laundry.png';

const Offers = () => {
  return (
    <>
      <div id='offers' className='flex flex-col items-center pt-8'>
        <header className='text-[25px] font-semibold'>Services</header>
        <hr className='border-t-3 border-black w-[130px]' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-8 lg:mx-16'>
        <div className='flex flex-col items-center px-4 py-6 md:px-8'>
          <img src={nut} alt="Nutrition" className='rounded-full' />
          <header className='text-center my-4 text-[20px] md:text-[25px] font-bold'>Nutrition</header>
          <p className='text-center'>
            We provide three nutritious, well-balanced meals and snacks. Special diets are always accommodated 
            (low - salt, low - fat, low - sugar, and dysphagia diet).
          </p>
        </div>
        <div className='flex flex-col items-center px-4 py-6 md:px-8'>
          <img src={gangy} alt="Activities" className='rounded-full' />
          <header className='text-center my-4 text-[20px] md:text-[25px] font-bold'>Activities</header>
          <p className='text-center'>
            All medication is centrally stored and locked. Oral medications are monitored, double-checked, and administered.
            We keep track of each dose using medical administration records.
          </p>
        </div>
        <div className='flex flex-col items-center px-4 py-6 md:px-8'>
          <img src={laundry} alt="Maintenance" className='rounded-full' />
          <header className='text-center my-4 text-[20px] md:text-[25px] font-bold'>Maintenance</header>
          <p className='text-center'>
            We provide laundry service and supplies, fresh linen, room cleaning, upkeep, and maintenance.
            All televisions have streaming devices. Residents can stream their favorite movies and TV shows. Internet and phone service are also included.
          </p>
        </div>
      </div>
    </>
  );
}

export default Offers;

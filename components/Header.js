import React from 'react';

const Header = ({title}) => {
  return (
    <header className='container'>
      <div className='flex items-center pt-2
        sm:flex-row sm:justify-between
        flex-col-reverse'
      >
        <div className='flex flex-col items-center'>
          <h1 className='text-orange-500 m-0 font-serif text-xl font-semibold'>Al-Watania Poultry</h1>
          <p className=' text-gray-600 font-serif'>Continuous Improvement Dpt.</p>
          <p className=' text-gray-600 font-serif'>Supply Chain</p>
        </div>
        <div>
          <p className='text-gray-600 text-lg font-semibold font-serif'>{title}</p>
        </div>
        <img src="/logo.png" alt="logo" className='h-12 w-[80px]' />        
      </div>

      <hr className='border-[1px] border-[#898181] mt-2 '/>
    </header>
  );
};

export default Header;

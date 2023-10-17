import React from 'react';

const Header = () => {
  return (
    <header className=' 
    flex justify-between items-center flex-col-reverse
    md:flex-row md:space-y-0 
    '>
    {/* navbar side  */}
    <div className='p-4 bg-yellow-300 w-full '>
      <ul className=' p-0 m-0
      flex flex-col items-center space-y-5 
      md:flex-row md:space-y-0 md:space-x-16
      '>
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
    </div>
    {/* logo side */}
    <div className=' bg-purple-700 p-4 h-full w-full md:w-20 text-center text-white '>logo</div>
  </header>

  
    );
};

export default Header;

import React from 'react'

function AboutCompany() {
  return (
    <div className='mt-[120px] p-[120px] flex items-center justify-center '>
      <div className='flex items-center justify-between container '>
        <div className='flex flex-1 justify-center items-center '>
          <img src="/x.jpg" alt="pic"  className='max-h-[400px] max-w-[300px] rounded-2xl shadow-lg'/>
        </div>
        <div className='flex flex-1 flex-col justify-center'>
          <a href="#" className=' px-3 py-2 block w-max bg-gray-200 border shadow-xl rounded-full text-[#5333F2] no-underline font-bold'>About Our Company</a>
          <h2 className='text-[50px] mt-4 font-semibold font-serif'>Choose <span className='text-[#5333F2]'>The Best</span> IT Service Company</h2>
          <div className='border-l-[2px] mt-3 border-[#5333F2] pl-4'> 
            <p className=' tracking-wide leading-8 font-mono'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, error aspernatur? Adipisci mollitia, est natus inventore assumenda obcaecati aliquam aliquid?</p>
          </div>
          <hr className='h-[1px] mt-4 bg-gray-300'/>
          <div className='py-3 flex items-center'>
            <div className='flex flex-1 items-center justify-start space-x-4'>
              <i className="fas fa-thumbs-up text-3xl text-[#5333F2]"></i>              
              <p className='text-xl font-bold'>Fast Service</p>
            </div>
            <div className='flex flex-1 items-center justify-start space-x-4'>
              <i className="fas fa-headset text-3xl text-[#5333F2]"></i>
              <p className='text-xl font-bold'>Technical Support</p>
            </div>
          </div>
          <hr className='h-[1px] mt-4 bg-gray-300'/>

          <div className='py-4 flex items-center'>
            <a href="#" className=' px-5 py-3 block w-max bg-gradient-to-tr from-purple-600 to-blue-500 border 
              shadow-xl rounded-full text-white no-underline font-bold hover:no-underline'>Contact Us </a>
              <div className='flex items-center justify-center h-14 w-14 border-[1px] border-gray-400 rounded-full p-1 ml-4'>
                <i className="fas fa-phone-alt text-xl text-[#5333F2] animate-pulse"></i>
              </div>
              <div className='pl-3'>
                <p className='font-semibold text-gray-500'>Call For Help</p>
                <b className='text-2xl'>+966 0569619269</b>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutCompany
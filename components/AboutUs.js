import React from 'react'

function AboutUs() {
  return (
    <div id="list-item-3" className='mt-3 bg-black flex justify-center '>
        <div className='sm:w-5/6 w-full flex sm:flex-row sm:justify-center flex-col-reverse items-center'>
            {/* left section */}
            <div className='sm:w-1/2 w-full flex flex-col justify-center items-center  sm:pt-4 p-3'>
                <h1 className=' text-TextColor2 sm:text-6xl text-4xl'>Al-Watania Transport</h1>
                {/* <img src="/norma.gif" alt="" className=' w-56 h-46' /> */}
                {/* <h1 className=' text-white text-3xl '>Norma</h1> */}
                <h6 className=' font-semibold text-ColorFive'>Achieve more today and be ready for the future. </h6>
                <p className='text-ColorFive text-center'>
                    {/* <span className='text-TextColor2 font-semibold'>NORMA </span> */}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet reprehenderit ipsa harum nam quia aperiam. 
                </p>
                <p className=' sm:w-3/4 w-full sm:pl-4 sm:pr-4 font-semibold text-ColorFive text-center'>
                    {/* <span className='text-TextColor2 font-semibold'>NORMA </span> */}
                    helps its users to improve, achieve more, save more and scale. 
                </p>
                <button className=' mt-3 pl-10 pr-10 pt-2 pb-2 rounded-full font-bold
                 bg-TextColor2 text-gray-900 hover:bg-ColorOne hover:text-slate-50
                  transition duration-300 ease-in-out'
                 >
                    LEARN MORE
                </button>
                
            </div>
            
            {/* right section */}
            <div className='sm:w-1/2 w-full'>
                <img src="/Capture.PNG" alt="" className=' w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
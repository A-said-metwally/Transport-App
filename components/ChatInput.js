import React from 'react'

function ChatInput() {
  return (
    <div className='flex items-center justify-between space-x-4 w-full absolute bottom-5  px-5'>
        <i className="fas fa-paperclip text-3xl text-gray-800 hover:text-blue-500 cursor-pointer"></i>
        <form className=' flex-1 px-4 h-[50px] rounded-full border-[1px] border-slate-100 bg-[#b1b2b4] shadow-md '>
            <input type="text" placeholder='Enter Your Message' 
                className=' focus:outline-none placeholder:text-xl placeholder:text-white placeholder:font-semibold
                h-full w-full bg-inherit text-xl text-gray-700 font-semibold p-2' />
        </form>
        <i className="fas fa-paper-plane text-3xl text-gray-800 hover:text-blue-500 cursor-pointer"></i>
    </div>
)
}

export default ChatInput
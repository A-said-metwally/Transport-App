import React from 'react'

function Responsive() {
  return (
    <section 
        className='
            grid gap-8 
            '>
        <div>
            <img 
                src="/ahmed.jpeg" 
                alt="" 
                className='w-full md:max-w-lg mx-auto'
                />
        </div>
        <div>
            <h1 className='mb-2 text-4xl font-medium'>head line</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Illo quos eaque et ipsum nam, 
                assumenda error voluptatem tempore ipsam fugiat.
            </p>
        </div>
    </section>
  )
}

export default Responsive
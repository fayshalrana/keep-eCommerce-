import React from 'react'

const Number = () => {
  return (
    <section className='py-10 lg:py-22'>
      <div className="container_fluid">
        <div className="flex gap-10 lg:gap-5 justify-center items-center flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center border-b lg:border-0 w-full pb-2">
            <h2 className='text-[64px] font-bold leading-[78px] -racking-[2.3px] text-primary pb-3'>730</h2>
            <p className='text-black text-lg font-semibold'>Project Completed</p>
          </div>
          <div className="flex flex-col justify-center items-center border-b lg:border-0 w-full pb-2">
            <h2 className='text-[64px] font-bold leading-[78px] -racking-[2.3px] text-primary pb-3'>120</h2>
            <p className='text-black text-lg font-semibold'>Team Members</p>
          </div>
          <div className="flex flex-col justify-center items-center border-b lg:border-0 w-full pb-2">
            <h2 className='text-[64px] font-bold leading-[78px] -racking-[2.3px] text-primary pb-3'>40k</h2>
            <p className='text-black text-lg font-semibold'>Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Number

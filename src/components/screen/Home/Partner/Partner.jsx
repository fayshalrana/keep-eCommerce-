import React from 'react'

const Partner = ({ partner }) => {
  return (
    <div className='flex items-center gap-2 md:justify-center lg:justify-between'>
      <div className="w-[36.871px] h-[32.31px] ">
        <img className='mix-blend-multiply w-full h-full object-cover' src={partner.img} alt="" />
      </div>
      <h3 className='text-16px lg:text-2xl font-semibold '>{partner.name}</h3>
    </div>
  )
}

export default Partner

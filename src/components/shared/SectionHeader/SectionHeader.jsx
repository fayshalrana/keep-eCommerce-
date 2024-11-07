import React from 'react'
import cn from '../../../utils/cn'
import sectionLine from '../../../assets/images/sectionLine.png'
const SectionHeader = ({ header, subHeader, className, lineClass }) => {
  return (
    <div className={cn(
      "flex flex-col gap-3 relative",
      className
    )}>
      <h3 className='sub-head'>{subHeader}</h3>
      <h2 className='text-[28px] lg:text-5xl font-semibold leading-[42px] lg:leading-[60px] -tracking-[.4px] lg:-tracking-[1.75px] text-black'>{header}</h2>
      <img className={cn(
        "absolute w-[35%] bottom-0 right-[10%] -z-10",
        lineClass,
      )} src={sectionLine} alt="line image" />
    </div>
  )
}

export default SectionHeader

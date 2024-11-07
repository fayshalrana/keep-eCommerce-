import React from 'react'
import cn from '../../../../utils/cn'

const ServiceItem = ({ children, icon, iconClass, boxClass, textClass, heading, content }) => {
  return (
    <div className={cn("py-10 px-4 xl:px-6 lg:px-8 flex gap-5", boxClass)}>
      <div className={cn("")}>
        <div className={cn("w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-complete text-white text-[30px]",
          iconClass,)}>
          {icon}
        </div>
      </div>
      <div className={cn(textClass)}>
        <h3 className={cn("h3 pb-4")}>{heading}</h3>
        <p className={cn("para text-[#4F5662]")}>{content}</p>
      </div>
      {children}
    </div>
  )
}

export default ServiceItem

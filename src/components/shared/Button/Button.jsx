import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../../utils/cn'

const Button = ({ link, children, hover, className }) => {
  return (
    <Link to={link} className={ cn("flex py-3 px-5 justify-center rounded-md border w-full md:w-auto  text-[16px] font-medium leading-6 -tracking-[.3px] duration-300 md:inline-flex items-center gap-2 whitespace-nowrap",
    {
      "text-[#455468] bg-transparent border-[#455468 hover:text-white hover:bg-[#1B4DFF]" : hover,
      "bg-primary text-white hover:bg-transparent hover:text-[#455468]": !hover
    },
    className,
    )}>
      {children}
    </Link>
  )
}

export default Button

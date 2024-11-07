import React from 'react'
import Button from '../../../shared/Button/Button'
import { MdArrowOutward } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
const Plan = ({ plan }) => {



    return (
        <div className='p-5 border'>
            <div className="pb-6 border-b flex flex-col items-start">
                <span className='flex py-1 px-2 rounded-md bg-primary/10 items-center gap-2 text-primary'><FaCrown /> {plan.plan}</span>
                <h3 className='text-[48px] font-semibold leading-[60px] -tracking-[1.75px] text-black pt-5 pb-3'>{plan.price}</h3>
                <p className='text-[16px] font-medium leading-6 -tracking-[-.3px] text-black'>{plan.perMember}</p>
            </div>
            <div className="flex flex-col">
                <ul className='py-9 pl-4'>
                    {plan.features.map((feature, index) => (
                        <li key={index} className='text-[16px] font-medium leading-6 -tracking-[-.3px] text-black pb-3 relative'>
                            {feature}
                            <div className="absolute top-1 -left-5 text-primary"><FaRegCheckCircle /></div>
                        </li>
                    ))}

                </ul>
                <Button hover={true} className={'rounded-0'}>Choose Plan <MdArrowOutward /></Button>
            </div>
        </div>
    )
}

export default Plan

import React from 'react'
import { CgMail } from "react-icons/cg";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
const ContactInfo = () => {
    return (
        <section className='py-10'>
            <div className="container_fluid">
                <div className=" py-[50px] lg:py-[80px] text-center relative">
                    <div className="w-full lg:w-[800px] absolute top-0 left-1/2 -translate-x-1/2 -z-10 bg-blue-300/20 h-full"></div>
                    <h2 className='text-[28px] lg:text-[32px] font-semibold leading-[42px] -tracking-[.5px] text-black'>Contact info</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        <div className="flex gap-4 px-2 lg:px-5 py-8 lg:py-12 items-center bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <div className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] xl:w-[80px] xl:h-[80px] rounded-complete bg-blue-200/40 flex justify-center items-center">
                                <CgMail className='text-[24px] lg:text-[28px] xl:text-[38px] text-primary' />
                            </div>
                            <div className="flex flex-col  items-start lg:gap-2 gap-0">
                                <h3 className='text-[20px] lg:text-[24px] xl:text-[28px] font-semibold leading-6 -tracking-[.4px] text-black'>Message Us</h3>
                                <a href='mailto:hello@support.com' className='para'>hello@support.com</a>
                            </div>
                        </div>
                        <div className="flex gap-4 px-2 lg:px-5 py-8 lg:py-12 items-center bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <div className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] xl:w-[80px] xl:h-[80px] rounded-complete bg-blue-200/40 flex justify-center items-center">
                                <LuPhoneCall className='text-[24px] lg:text-[28px] xl:text-[38px] text-primary' />
                            </div>
                            <div className="flex flex-col  items-start lg:gap-2 gap-0">
                                <h3 className='text-[20px] lg:text-[24px] xl:text-[28px] font-semibold leading-6 -tracking-[.4px] text-black'>Call Us</h3>
                                <a href='tel:(302) 555-0107' className='para'>(302) 555-0107</a>
                            </div>
                        </div>
                        <div className="flex gap-4 px-2 lg:px-5 py-8 lg:py-12 items-center bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <div className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] xl:w-[80px] xl:h-[80px] rounded-complete bg-blue-200/40 flex justify-center items-center">
                                <IoLocationOutline className='text-[24px] lg:text-[28px] xl:text-[38px] text-primary' />
                            </div>
                            <div className="flex flex-col  items-start lg:gap-2 gap-0 text-left">
                                <h3 className='text-[20px] lg:text-[24px] xl:text-[28px] font-semibold leading-6 -tracking-[.4px] text-black'>Address</h3>
                                <a href='tel:(302) 555-0107' className='para'>hel211 Thornridge Cir. 362</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo

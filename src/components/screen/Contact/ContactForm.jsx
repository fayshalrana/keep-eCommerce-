import React from 'react'
import Button from '../../shared/Button/Button'
import { MdOutlineArrowOutward } from "react-icons/md";
const ContactForm = () => {
    return (
        <section className='py-10'>
            <div className="container_fluid">
                <div className="w-full lg:w-[800px] mx-auto px-5 lg:px-[60px] py-4 lg:py-[50px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                    <form className='flex flex-col gap-8' action="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstName" className='text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>First name</label>
                                <input className='py-5 px-[14px] border border-blue-200 focus:outline-primary rounded-md text-[16px] font-medium leading-6 -tracking-[.3px]' type="text" id='firstName' placeholder='First name' required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastName" className='text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Last name</label>
                                <input className='py-5 px-[14px] border border-blue-200 focus:outline-primary rounded-md text-[16px] font-medium leading-6 -tracking-[.3px]' type="text" id='lastName' placeholder='Last name' required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className='text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Email</label>
                                <input className='py-5 px-[14px] border border-blue-200 focus:outline-primary rounded-md text-[16px] font-medium leading-6 -tracking-[.3px]' type="text" id='email' placeholder='Email' required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className='text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Phone number</label>
                                <input className='py-5 px-[14px] border border-blue-200 focus:outline-primary rounded-md text-[16px] font-medium leading-6 -tracking-[.3px]' type="text" id='phone' placeholder='Phone number' required />
                            </div>
                        </div>
                        <div className="w-full">
                            <textarea className="w-full border border-blue-200 rounded-md resize-none py-5 px-[14px]" name='description' id="" cols="30" rows="10" placeholder='Enter a description...' />
                        </div>
                        <div className="">
                            <Button>Send Message <MdOutlineArrowOutward /></Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm

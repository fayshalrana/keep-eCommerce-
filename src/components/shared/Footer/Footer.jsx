import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { GoArrowUpRight } from "react-icons/go";
const Footer = () => {
    return (
        <section className='bg-[#1C222B]'>
            <div className="container_fluid">
                <div className="flex py-[70px] flex-col md:grid grid-cols-2 md:flex-row gap-8 lg:gap-0 lg:flex">
                    {/* Footer left  */}
                    <div className="w-full lg:w-1/3">
                        <div className="flex flex-col justify-start gap-6">
                            <Link className="flex justify-start items-center gap-[10px]">
                                <div className="h-[34px] w-[34px] rounded-[10px] overflow-hidden bg-white flex justify-center items-center">
                                    <span className=' text-dark text-3xl font-semibold'>k.</span>
                                </div>
                                <h3 className="font-medium text-[16px] text-white">Keep</h3>
                            </Link>
                            <p className='text-[16px] font-normal leading-6 -tracking[.3px] text-white lg:pr-20'>Until recently, the prevailing view assumed lorem ipsum.</p>
                        </div>
                    </div>
                    {/* Footer Center  */}
                    <div className="w-full lg:w-1/3">
                        <div className="flex justify-center">
                            <div className="w-[50%]">
                                <h2 className='text-white text-[22px] font-[500] leading-[30px] -tracking-[0.3px]'>Explore</h2>
                                <ul className="flex gap-4 xl:gap-6 lg:gap-4 flex-col justify-start mt-6">
                                    <li className=""><Link to='#' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Instructions</Link></li>
                                    <li className=""><Link to='#' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Style guide</Link></li>
                                    <li className=""><Link to='#' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Licenses</Link></li>
                                    <li className=""><Link to='/service' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Solutions</Link></li>
                                    <li className=""><Link to='/pricing-plan' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Pricing</Link></li>
                                </ul>
                            </div>
                            <div className="w-[50%]">
                                <h2 className='text-white text-[22px] font-[500] leading-[30px] -tracking-[0.3px]'>Resources</h2>
                                <ul className="flex gap-4 xl:gap-6 lg:gap-4 flex-col justify-start mt-6">
                                    <li className=""><Link to='/about' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">About us</Link></li>
                                    <li className=""><Link to='#' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Help center</Link></li>
                                    <li className=""><Link to='#' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Features</Link></li>
                                    <li className=""><Link to='#' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Support</Link></li>
                                    <li className=""><Link to='/contact-us' className="hover:pl-[5px] hover:font-semibold transform duration-200 text-white text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Footer Right  */}
                    <div className="w-full lg:w-1/3 md:col-span-2">
                        <div className="md:flex flex-col justify-center items-center lg:items-start">
                            <h2 className='text-white text-[22px] font-[500] leading-[30px] -tracking-[0.3px]'>Subscribe newsletter</h2>
                            <p className='text-white text-[16px] font-[400] leading-[24px] -tracking-[0.3px] pt-6 pb-7'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.</p>

                            <div className="flex gap-4 items-center mt-8 flex-col md:flex-row">
                                <input className="py-6 pl-[14px] text-[#3D4A5C] text-[14px] font-[400] leading-[22px] border border-blue-200 rounded-md -tracking-[0.3px] w-full" type="email" placeholder="Enter your Email" />
                                <Button path={"/subscribe"}>Subscribe <GoArrowUpRight /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer bottom  */}
                <div className="py-[50px] border-t">
                    <div className="flex justify-between flex-col md:flex-row gap-6">
                        <p className='text-[14px] lg:text-[16px] font-normal leading-6 -leading-[.3px] text-white text-center'>@ 2023 Keep Design. All Rights Reserved</p>
                        <ul className='flex items-center gap-4 lg:gap-8 flex-col md:flex-row'>
                            <li className='text-[16px] font-medium leading-6 -leading-[.3px] text-white'><Link>Privacy Policy</Link></li>
                            <li className='text-[16px] font-medium leading-6 -leading-[.3px] text-white'><Link>Terms & Conditions</Link></li>
                            <li className='text-[16px] font-medium leading-6 -leading-[.3px] text-white'><Link>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer

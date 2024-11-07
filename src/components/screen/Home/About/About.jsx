import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import { RiScan2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import Statstic from './Statstic';
import BarChartComponent from './BarChartComponent';
import { IoIosArrowDown } from 'react-icons/io';
const About = () => {
    return (
        <section className='py-8'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-28 ">
                    {/* About Left  */}
                    <div className="relative">
                        {/* Big backGround circle  */}
                        <div className="w-[450px] h-[450px] rounded-complete absolute right-0 top-0 bg-[#D7FFEB]/50 -z-10"></div>
                        <div className="w-full md:w-[384px] flex flex-col md:gap-20 lg:gap-8">

                            {/* Chart 1  */}
                            <div className="about w-full p-5 bg-white rounded-xl drop-shadow-xl">
                                <div className="flex justify-between pb-5">
                                    <h3 className='h3'>Income & Expenses</h3>
                                    <button><IoIosArrowDown /></button>
                                </div>
                                <BarChartComponent />
                            </div>

                            {/* Chart 2  */}
                            <div className="w-full">
                                <Statstic />
                            </div>
                            <div className="w-full py-7 px-8 flex gap-3 items-center justify-start bg-[#AFEF47]">
                                <div className="w-[60px] h-[60px] rounded-complete bg-black flex items-center justify-center">
                                    <FaArrowTrendUp className="text-[32px] text-white" />
                                </div>
                                <div className="">
                                    <p className='text-lg font-normal leading-6 -tracking-[.3px]'>Weekly Retetion Rate</p>
                                    <h3 className='h3'>217.352%</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Right  */}
                    <div className="">
                        <SectionHeader header={"A Great Team Of Industry Marketing Experts"} subHeader={"About Keep"} className={"text-center lg:text-left justify-start md:text-left"} lineClass={"right-[28%] md:right-[65%]"} />
                        <p className='para text-black pt-7 pb-12 text-center md:text-left'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing Before & After magazine answered a curious reader.</p>
                        <div className="flex items-center md:gap-7 lg:gap-14 justify-between flex-col md:flex-row">
                            <div className="flex flex-col text-center lg:text-left lg:items-start justify-center lg:justify-start items-center">
                                <div className="w-[50px] h-[50px] flex justify-center items-center">
                                    <RiScan2Line className='text-[37px]' />
                                </div>
                                <h3 className='h3 pt-2 pb-3'>Business Targetv</h3>
                                <p className='para text-[#4F5662] text-center lg:text-left'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.</p>
                            </div>
                            <div className="flex flex-col justify-center  lg:items-start items-center">
                                <div className="w-[50px] h-[50px] flex justify-center items-center">
                                    <RiScan2Line className='text-[37px]' />
                                </div>
                                <h3 className='h3 pt-2 pb-3'>Vertical Growth</h3>
                                <p className='para text-[#4F5662]'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.</p>
                            </div>

                        </div>
                        <div className="mt-6 xl:mt-12">
                            <Link className='w-full md:w-auto  py-4 px-5 border border-black rounded-md text-lg font-medium leading-6 -tracking-[.3px] capitalize text-black hover:text-white hover:bg-primary hover:border-transparent duration-300 justify-center inline-flex gap-2 items-center'>About us <MdArrowOutward /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

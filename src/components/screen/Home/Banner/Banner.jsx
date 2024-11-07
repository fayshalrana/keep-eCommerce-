import React from 'react'
import Button from '../../../shared/Button/Button'
import { MdArrowOutward } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import loopImg from '../../../../assets/images/loop.png'
import BannerChartOne from './Charts/BannerChartOne';
import { IoIosArrowDown } from "react-icons/io";
import BannerChartTwo from './Charts/BannerChartTwo';
const Banner = () => {
    return (
        <section className='pt-[120px] lg:pt-[188px] relative'>
            <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 absolute top-0 left-0 -z-10 gap-[9rem] md:gap-0">
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-gradient-to-r from-violet-200 to-pink-200"></div>
            </div>
            <div className="container_fluid ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Banner Left  */}
                    <div className="lg:pl-7">
                        <h3 className="sub-head">Sass Landing</h3>
                        <h1 className='text-[32px] lg:text-[64px] font-semibold leading-[48px] lg:leading-[78px] -tracking-[1px] lg:-tracking-[2.3px] text-black pt-[10px] pb-[22px]'>Build a website that
                            performs better.</h1>
                        <p className='pb-8 lg:pb-11 para'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing</p>
                        <div className="flex gap-4 items-center pb-12 flex-col lg:flex-row">
                            <Button>Download for Free <MdArrowOutward /></Button>
                            <Button hover={true}> <CiPlay1 />How it works </Button>
                        </div>
                        <div className="grid grid-cols-1  md:grid-cols-3 gap-5 md:gap-4 relative">
                            <div className="flex flex-col gap-[14px] justify-center items-center">
                                <h3 className='text-4xl font-bold leading-[48px] -tracking-[1px] text-[#16A077]'>20+</h3>
                                <p className='text-lg font-normal leading-6 -tracking-[.3px] text-black'>Years Of Experience</p>
                            </div>
                            <div className="flex flex-col gap-[14px] justify-center items-center">
                                <h3 className='text-4xl font-bold leading-[48px] -tracking-[1px] text-[#FF574D]'>325+</h3>
                                <p className='text-lg font-normal leading-6 -tracking-[.3px] text-black'>Years Of Experience</p>
                            </div>
                            <div className="flex flex-col gap-[14px] justify-center items-center">
                                <h3 className='text-4xl font-bold leading-[48px] -tracking-[1px] text-[#1B4DFF]'>90%</h3>
                                <p className='text-lg font-normal leading-6 -tracking-[.3px] text-black'>Years Of Experience</p>
                            </div>
                            <div className="hidden lg:inline absolute w-[100px] -bottom-[100%] -left-[20%]">
                                <img className='w-full h-full object-cover' src={loopImg} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Banner Right  */}
                    <div className="lg:pl-[72px] pb-8 lg:pb-24 flex flex-col gap-5">

                        <div className="banner2 p-5 bg-white rounded-lg relative">
                            <div className="flex justify-between pb-5">
                                <h3 className='h3'>Income & Expenses</h3>
                                <button><IoIosArrowDown /></button>
                            </div>
                            <BannerChartTwo />
                            <div className="relative xl:absolute xl:top-[35%] top-2 left-[50px] min-[375px]:left-[35px] xl:left-[50%]">
                                <ul className='flex flex-col gap-3 -z-10'>
                                    <li className='text-[18px] font-semibold leading-6 -tracking-[.3px] relative before:absolute before:h-3 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-3 before:bg-[#0088FE] before:rounded-complete  before:-left-[15%] min-[375px]:before:-left-[7%]'>Online Marking</li>
                                    <li className='text-[18px] font-semibold leading-6 -tracking-[.3px] relative before:absolute before:h-3 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-3 before:bg-[#00C49F] before:rounded-complete  before:-left-[15%] min-[375px]:before:-left-[7%]'>Financial Growth</li>
                                    <li className='text-[18px] font-semibold leading-6 -tracking-[.3px] relative before:absolute before:h-3 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-3 before:bg-[#FFBB28] before:rounded-complete  before:-left-[15%] min-[375px]:before:-left-[7%]'>Business</li>
                                    <li className='text-[18px] font-semibold leading-6 -tracking-[.3px] relative before:absolute before:h-3 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-3 before:bg-[#FF8042] before:rounded-complete  before:-left-[15%] min-[375px]:before:-left-[7%]'>Cost</li>
                                </ul>
                            </div>
                        </div>
                        <div className="banner2 p-5 bg-white rounded-lg">
                            <div className="flex justify-between pb-5">
                                <h3 className='h3'>Income & Expenses</h3>
                                <button><IoIosArrowDown /></button>
                            </div>
                            <BannerChartOne />
                            {/* <img className='w-full drop-shadow-md' src={chart2} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner

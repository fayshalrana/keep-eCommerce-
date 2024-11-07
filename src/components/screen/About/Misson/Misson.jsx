import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import { FaArrowTrendUp, FaCheck } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import mission from '../../../../assets/images/about/aboutG1.png'
import Statstic from '../../Home/About/Statstic';
const Misson = () => {
    return (
        <section className='pt-24 pb-12'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="">
                        <SectionHeader lineClass={"right-[36%]"} header={"What We Can Do For Your Business Growth"} subHeader={"Our Mission"} />
                        <p className='text-[16px] font-normal leading-6 -tracking-[-.3px]  text-black'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing Before & After magazine answered a curious reader.</p>


                        <div className="mt-8 flex flex-col gap-5">
                            <div className="flex gap-4">
                                <div className="w-11 h-10 rounded-complete bg-blue-400/20 flex justify-center items-center"><FaCheck className='text-primary' /></div>
                                <div className="">
                                    <h3 className='h3'>Global Marketing Strategy</h3>
                                    <p className='para'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-11 h-10 rounded-complete bg-blue-400/20 flex justify-center items-center"><FaCheck className='text-primary' /></div>
                                <div className="">
                                    <h3 className='h3'>Customisable Business</h3>
                                    <p className='para'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-full md:w-[80%] lg:w-[60%] h-[90%] md:absolute right-0 top-0">
                            <img className='w-full h-full object-cover' src={mission} alt="mission image" />

                        </div>
                        <div className="absolute left-0 bottom-0 w-[80%] lg:w-[60%]">
                            <div className='w-full py-2 md:py-4 px-2 md:px-8 flex flex-col bg-white drop-shadow-xl'>
                                <div className="flex justify-between items-center">
                                    <h3 className='text-[#000000] text-[12px] md:text-[13px] lg:text-2xl font-semibold leading-[34px] -tracking-[.4px]'>Statistics</h3>
                                    <button><HiOutlineDotsHorizontal /></button>
                                </div>
                                <div className="lg:py-2">
                                    <input className='' type="range" min="0" max="100" step="1" defaultValue="40"></input>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className='text-[10px] lg:text-[16px] whitespace-nowrap md:text-[12px]'>$10.231k Expenses</span>
                                    <span className='text-[10px] lg:text-[16px] whitespace-nowrap md:text-[12px]'>$6.54K Available</span>
                                </div>

                            </div>
                            <div className="w-full py-4 lg:py-7 px-4 lg:px-8 flex gap-3 items-center justify-start bg-[#AFEF47] mt-4">
                                <div className="w-[60px] h-[60px] rounded-complete bg-black flex items-center justify-center">
                                    <FaArrowTrendUp className=" md:text-[32px] text-white" />
                                </div>
                                <div className="">
                                    <p className='text-[12.4px] md:text-lg font-normal leading-6 -tracking-[.3px]'>Weekly Retetion Rate</p>
                                    <h3 className='h3'>217.352%</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Misson

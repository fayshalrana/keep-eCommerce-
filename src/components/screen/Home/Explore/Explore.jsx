import React from 'react'
import exploreImg from '../../../../assets/images/explore.png'
import exploreMobile from '../../../../assets/images/exploreImg.png'
import loopImg from '../../../../assets/images/loop.png'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import { FaRegCircleCheck } from "react-icons/fa6";
const Explore = () => {
    return (
        <section className='py-8'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    <div className="w-full md:flex justify-center items-center flex-col">
                        <div className="hidden lg:inline w-[400px] h-[400px] bg-[#FF574D]/10 relative">
                            <div className="w-[300px] p-5 shadow-lg bg-white flex justify-between absolute -right-10 -top-10 xl:-right-20 -xl:top-20">
                                <div className="">
                                    <p>Earning</p>
                                    <h2 className='h3'>$ 214,300</h2>
                                    <p>12% Increase</p>
                                </div>
                                <div className="">
                                    <div className="radial-progress text-primary flex flex-col justify-center items-center gap-0" style={{ "--value": 70 }} role="progressbar">
                                        <span className='text-[18px] font-bold text-black leading-6'>70%</span>
                                        <span className='text-[12px] font-medium text-black leading-2 tracking-tight'>Revenue</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute w-[90%] shadow-lg -bottom-[10%] -left-[15%]">
                                <img className='w-full h-full object-cover' src={exploreImg} alt="" />
                            </div>
                            <div className="absolute w-[100px] -right-[15%] top-[50%]">
                                <img className='w-full h-full object-cover' src={loopImg} alt="" />
                            </div>
                        </div>
                        <div className="lg:hidden w-full h-full">
                            <img className='w-full h-full object-cover' src={exploreMobile} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="">
                            <SectionHeader lineClass={"right-[40%]"} header={"Advanced Analytics Monitor Growth."} subHeader={"Explore Possibilities"} />
                            <p className='para pt-8 pb-9'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing Before & After magazine answered a curious reader.</p>
                            <ul className='pl-9 flex flex-col gap-2'>
                                {Array.from({ length: 3 }, (_, index) => (
                                    <li key={index} className="text-[16px] font-medium relative">Business Monitoring Lead Generation <span className='absolute -left-[30px] top-1/2 transform -translate-y-1/2'><FaRegCircleCheck className='text-primary' /></span></li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore

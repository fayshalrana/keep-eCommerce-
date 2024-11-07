import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import ServiceItem from '../Services/ServiceItem'
import { LuFolders } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsGraphUpArrow } from 'react-icons/bs'
import { PiDatabase } from "react-icons/pi";
import serviceBG from '../../../../assets/images/serviceBG.png'
const Feature = () => {
    return (
        <section className='py-12 relative'>
            <div style={{ backgroundImage: `url(${serviceBG})`, backgroundPosition: "center", backgroundSize: "60px" }} className="w-full h-full lg:h-[536px] absolute bg-[#FF574D]/10 top-0 lg:top-1/2 transform lg:-translate-y-1/2 left-0 -z-10"></div>

            <div className="container_fluid">
                <div className="md:px-20">
                    {/* left side  */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-16">
                        <div className="col-span-1 flex items-center">
                            <SectionHeader lineClass={"w-[60%] right-[6%] bottom-[20%]"} header={"Great Services for Adding Your Business Value"} subHeader={"Keep Services"} className={"text-center justify-center"} />
                        </div>
                        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-3 md:mt-0">
                            <div className="flex items-center">
                                <ServiceItem icon={<LuFolders />} heading={"Finance Management"} content={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text."} boxClass={"flex-col items-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-white"} iconClass={"bg-[#FF574D] text-[30px]"} textClass={"text-center"}>
                                    <Link className="LM_btn">Learn More <MdOutlineArrowOutward /></Link>
                                </ServiceItem>
                            </div>
                            <div className=" flex flex-col gap-8">
                                <ServiceItem icon={<BsGraphUpArrow />} heading={"StratBusiness Strategyegy"} content={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text."} boxClass={"flex-col items-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-white"} iconClass={"bg-[#4A72FF] text-[22px]"} textClass={"text-center"}>
                                    <Link className="LM_btn">Learn More <MdOutlineArrowOutward /></Link>
                                </ServiceItem>

                                <ServiceItem icon={<PiDatabase />} heading={"Marketing Analysis"} content={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text."} boxClass={"flex-col items-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-white"} iconClass={"bg-[#FFD027] text-[30px]"} textClass={"text-center"}>
                                    <Link className="LM_btn">Learn More <MdOutlineArrowOutward /></Link>
                                </ServiceItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature

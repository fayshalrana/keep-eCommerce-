import React from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'
import { LuFolders } from 'react-icons/lu'
import { PiDatabase } from 'react-icons/pi'
import ServiceItem from '../../Home/Services/ServiceItem'
import { Link } from 'react-router-dom'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Feature = () => {
    return (
        <section className='py-12'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* frist card  */}
                    <ServiceItem icon={<LuFolders />} heading={"Powerful Tools"} content={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text."} boxClass={"bg-red-500/10 md:flex-col lg:flex-row lg:p-4"} iconClass={"bg-[#FF574D]"} />

                    {/* second card  */}
                    <ServiceItem icon={<BsGraphUpArrow />} heading={"Advanced Monitoring"} content={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text."} boxClass={"bg-[#38D6EF]/10 md:flex-col lg:flex-row lg:p-4"} iconClass={"bg-[#38D6EF] text-[22px]"} />

                    {/* Third Card  */}
                    <ServiceItem icon={<PiDatabase />} heading={"Complete Dashboard"} content={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text."} boxClass={"bg-[#FFD027]/10 md:flex-col lg:flex-row lg:p-4"} iconClass={"bg-[#FFD027]"} />
                </div>
            </div>
        </section>
    )
}

export default Feature

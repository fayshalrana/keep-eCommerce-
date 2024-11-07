import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import ServiceItem from './ServiceItem'
import { LuFolders } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiDatabase } from "react-icons/pi";
const Services = () => {
  return (
    <section className='py-8 lg:py-24'>
      <div className="container_fluid">
        <SectionHeader subHeader={"Featured Services"} header={"A Great Team Of Industry Marketing Experts"} className={' md:w-[547px] justify-center items-center mx-auto text-center'} lineClass={"w-[40%] md:w-[25%] md:right-[40%] lg:w-[30%] right-[30%]"} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 md:mt-12">
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

export default Services

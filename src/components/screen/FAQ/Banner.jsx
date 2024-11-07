import React from 'react'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import { CiSearch } from "react-icons/ci";
const Banner = () => {
    return (
        <section className='pt-[150px] pb-10 md:pb-20'>
            <div className="container_fluid">
                <div className="w-full md:w-[714px] mx-auto">
                    <SectionHeader lineClass={"hidden"} className={"text-center"} header={"Frequently Asked Questions"} subHeader={"Faq’s"} />
                    <p className='para text-center pt-10'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing</p>
                    <div className="w-full md:w-[408px] mx-auto  pl-5 pr-2 border rounded-md mt-2 md:mt-5 flex items-center">
                        <button className='border-r pr-3 text-3xl text-gray-400'><CiSearch /></button>
                        <input type="text" className='py-6 px-2 focus:outline-none' placeholder='Search...' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner

import React from 'react'
import case1 from '../../../../assets/images/CaseStudy/case1.png'
import case2 from '../../../../assets/images/CaseStudy/case2.png'
import case3 from '../../../../assets/images/CaseStudy/case3.png'
import case4 from '../../../../assets/images/CaseStudy/case4.png'
import { Link } from 'react-router-dom'
import Button from '../../../shared/Button/Button'
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
const Case = () => {
    const images = [case1, case2, case3, case4]
    return (
        <section className='py-4 lg:py-8'>
            <div className="container_fluid">
                <div className="grid gird-cols-1 md:grid-cols-2 gap-8 lg:px-36">
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="">
                                <div className="lg:h-[595px]">
                                    <img className='w-full h-full object-cover' src={images[index]} alt="" />
                                </div>
                                <div className="mt-3 flex flex-col gap-2">
                                    <h3>Finance Management</h3>
                                    <Link to="#" className='text-[16px] font-normal leading-6 -tracking-[.3px] text-dark hover:text-primary duration-150 flex items-center gap-2'>Learn more <MdOutlineArrowOutward /></Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="w-full flex justify-center items-center mt-10">
                    <Button hover={true}>Loade more <FaArrowRotateRight /></Button>
                </div>
            </div>

        </section>
    )
}

export default Case

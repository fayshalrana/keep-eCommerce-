import React from 'react'
import case5 from '../../../assets/images/CaseStudy/case5.png'
import case6 from '../../../assets/images/CaseStudy/case6.png'
import case7 from '../../../assets/images/CaseStudy/case7.png'
import caseD from '../../../assets/images/CaseStudy/caseD.png'
import cn from '../../../utils/cn'
import { IoRemoveOutline } from "react-icons/io5";
import { FaRegCheckCircle } from 'react-icons/fa'
import { PiQuotesLight } from "react-icons/pi";
import { Link } from 'react-router-dom'
const Details = () => {
    return (
        <section className='pt-[120px] lg:pt-[160px] pb-10'>
            <div className="container_fluid">
                <div className="">
                    <div className="lg:px-[100px] xl:px-[250px]">
                        <div className="flex items-center gap-2">
                            <span className='py-1 px-2 rounded-2xl bg-blue-200/30 border border-blue-400 text-primary'>Marketing</span>
                            <span className='py-1 px-2 rounded-2xl bg-pink-200/30 border border-pink-400 text-pink-500'>Research</span>
                        </div>
                        <h2 className={cn('text-[32px] font-semibold leading-[42px] -tracking-[.5px] text-black pt-3 pb-4')}>Boost Your Startup Business with Our Digital Agency.</h2>
                        <div className="flex items-center gap-4 pb-6">
                            <h4 className='text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Kristin Watson</h4>
                            <div className="w-[5px] h-[5px] rounded-complete bg-gray-400"></div>
                            <h4 className='text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Aug 30, 2023</h4>
                        </div>
                        <p className='para'>Lorem ipsum dolor sit amet consectetur. Urna bibendum elementum cras in faucibus eu in mi. Nibh amet id est pharetra viverra lectus. Dui nunc in eget pharetra viverra. Quis massa adipiscing cursus fringilla nisl. Ultrices enim pellentesque interdum vitae lobortis arcu sit. Aliquam elit in volutpat fringilla egestas. Ut ut potenti augue volutpat sed egestas. Urna leo enim tellus est magna amet.</p>

                        <div className="w-full my-7 lg:my-16">
                            <img className='w-full' src={caseD} alt="" />
                        </div>

                        <div className="">
                            <div className="pb-16">
                                <h3 className='h3'>Finance Management</h3>
                                <p className='para pt-3'>Lorem ipsum dolor sit amet consectetur. Turpis tortor nunc sed amet et. Faucibus vitae morbi congue sed id mauris. Habitant lectus vitae risus quam amet fames sed. Ac nisi ac cursus leo. Donec turpis mattis ultrices viverra. Eget commodo massa et ultrices duis risus vestibulum cras. Libero et quis purus vulputate tristique cursus. In maecenas augue semper penatibus. Dapibus ornare quisque a faucibus dignissim. Iaculis faucibus orci viverra diam ornare consectetur eu orci. Tempor sed facilisis id at integer. At aenean eu in morbi tincidunt consectetur viverra. Augue pulvinar luctus in est vitae ut. Varius lacinia imperdiet et etiam et risus sapien scelerisque diam.</p>
                            </div>
                        </div>
                    </div>
                    {/* images  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                        <div className="w-full lg:h-[350px]">
                            <img className='w-full h-full object-cover' src={case5} alt="case study image" />
                        </div>
                        <div className="w-full lg:h-[350px]">
                            <img className='w-full h-full object-cover' src={case6} alt="case study image" />
                        </div>
                    </div>
                    <div className="lg:px-[100px] xl:px-[250px]">
                        <div className="">
                            <h3 className='h3'>Finance Management</h3>
                            <p className='para pt-3'>Lorem ipsum dolor sit amet consectetur. Turpis tortor nunc sed amet et. Faucibus vitae morbi congue sed id mauris. Habitant lectus vitae risus quam amet fames sed. Ac nisi ac cursus leo. Donec turpis mattis ultrices viverra. Eget commodo massa et ultrices duis risus vestibulum cras. Libero et quis purus vulputate tristique cursus. In maecenas augue semper penatibus. Dapibus ornare quisque a faucibus dignissim. Iaculis faucibus orci viverra diam ornare consectetur eu orci. Tempor sed facilisis id at integer. At aenean eu in morbi tincidunt consectetur viverra. Augue pulvinar luctus in est vitae ut. Varius lacinia imperdiet et etiam et risus sapien scelerisque diam.</p>
                            <ul className='py-9 pl-4'>
                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <li key={index} className='text-[16px] font-normal leading-6 -tracking-[-.3px] text-black pb-3 relative'>
                                            Polaroid artisan tattooed, kale chips cloud bread crucifix yuccie irony.
                                            <div className="absolute top-1 -left-5 text-primary"><FaRegCheckCircle /></div>
                                        </li>
                                    ))
                                }
                            </ul>


                        </div>
                    </div>
                    <div className="w-full bg-blue-300/30 py-10 my-5 lg:py-[100px] px-10 lg:px-[250px] border border-blue-500 border-dashed">
                        <div className="relative">
                            <p className='para'>“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.”</p>
                            <div className="absolute -top-8 -left-8 md:-top-8 md:-left-10 lg:-top-10 lg:-left-16 ">
                                <PiQuotesLight className='text-[40px] lg:text-[60px] text-primary' />
                            </div>
                            <span className='flex items-center gap-2 mt-2 text-lg font-medium leading-6 -tracking-[.4]'><IoRemoveOutline />Brooklyn Simmons</span>
                        </div>
                    </div>
                    <div className="lg:px-[100px] xl:px-[250px] border-b">
                        <div className="pb-16">
                            <h3 className='h3'>Competitor Analysis</h3>
                            <p className='para pt-3'>Lorem ipsum dolor sit amet consectetur. Turpis tortor nunc sed amet et. Faucibus vitae morbi congue sed id mauris. Habitant lectus vitae risus quam amet fames sed. Ac nisi ac cursus leo. Donec turpis mattis ultrices viverra. Eget commodo massa et ultrices duis risus vestibulum cras. Libero et quis purus vulputate tristique cursus. In maecenas augue semper penatibus. Dapibus ornare quisque a faucibus dignissim. Iaculis faucibus orci viverra diam ornare consectetur eu orci. Tempor sed facilisis id at integer. At aenean eu in morbi tincidunt consectetur viverra. Augue pulvinar luctus in est vitae ut. Varius lacinia imperdiet et etiam et risus sapien scelerisque diam.</p>

                        </div>
                    </div>
                    <div className="lg:px-[100px] xl:px-[250px] flex flex-col md:flex-row items-center gap-4 mt-10">
                        <h3 className='h3'>Share:</h3>
                        <ul className='flex item-center gap-2'>
                            <Link to="#" className="text-[16px] font-normal leading-6 -tacking-[.3px] text-parimary border border-primary px-2 py-1 rounded-3xl hover:bg-primary hover:text-white hover:border-transparent duration-200">Sass</Link>
                            <Link to="#" className="text-[16px] font-normal leading-6 -tacking-[.3px] text-parimary border border-primary px-2 py-1 rounded-3xl hover:bg-primary hover:text-white hover:border-transparent duration-200">Dashboard</Link>
                            <Link to="#" className="text-[16px] font-normal leading-6 -tacking-[.3px] text-parimary border border-primary px-2 py-1 rounded-3xl hover:bg-primary hover:text-white hover:border-transparent duration-200">Template</Link>
                        </ul>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Details

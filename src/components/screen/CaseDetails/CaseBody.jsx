import React from 'react'
import caseD from '../../../assets/images/CaseStudy/caseD.png'
import { FaRegCheckCircle } from 'react-icons/fa'
import case5 from '../../../assets/images/CaseStudy/case5.png'
import case6 from '../../../assets/images/CaseStudy/case6.png'
import case7 from '../../../assets/images/CaseStudy/case7.png'
const CaseBody = () => {
    return (
        <section className='py-10'>
            <div className="container_fluid">
                <div className="lg:px-20 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0">
                    <span className='p-2 md:p-4 md:text-[12px] whitespace-nowrap lg:p-8 border text-[11px] lg:text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Finance Management</span>
                    <span className='p-2 md:p-4 md:text-[12px] whitespace-nowrap lg:p-8 border text-[11px] lg:text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>September 25, 2023</span>
                    <span className='p-2 md:p-4 md:text-[12px] whitespace-nowrap lg:p-8 border text-[11px] lg:text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Branding, Finance</span>
                    <span className='p-2 md:p-4 md:text-[12px] whitespace-nowrap lg:p-8 border text-[11px] lg:text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>London, United Kingdom</span>
                </div>
                <div className="w-full my-7 lg:my-16">
                    <img className='w-full' src={caseD} alt="" />
                </div>
                <div className="lg:px-[250px]">
                    <div className="pb-16">
                        <h3 className='h3'>Finance Management</h3>
                        <p className='para pt-3'>Lorem ipsum dolor sit amet consectetur. Turpis tortor nunc sed amet et. Faucibus vitae morbi congue sed id mauris. Habitant lectus vitae risus quam amet fames sed. Ac nisi ac cursus leo. Donec turpis mattis ultrices viverra. Eget commodo massa et ultrices duis risus vestibulum cras. Libero et quis purus vulputate tristique cursus. In maecenas augue semper penatibus. Dapibus ornare quisque a faucibus dignissim. Iaculis faucibus orci viverra diam ornare consectetur eu orci. Tempor sed facilisis id at integer. At aenean eu in morbi tincidunt consectetur viverra. Augue pulvinar luctus in est vitae ut. Varius lacinia imperdiet et etiam et risus sapien scelerisque diam.</p>
                    </div>
                    <div className="">
                        <h3 className='h3'>Finance Management</h3>
                        <p className='para pt-3'>Lorem ipsum dolor sit amet consectetur. Turpis tortor nunc sed amet et. Faucibus vitae morbi congue sed id mauris. Habitant lectus vitae risus quam amet fames sed. Ac nisi ac cursus leo. Donec turpis mattis ultrices viverra. Eget commodo massa et ultrices duis risus vestibulum cras. Libero et quis purus vulputate tristique cursus. In maecenas augue semper penatibus. Dapibus ornare quisque a faucibus dignissim. Iaculis faucibus orci viverra diam ornare consectetur eu orci. Tempor sed facilisis id at integer. At aenean eu in morbi tincidunt consectetur viverra. Augue pulvinar luctus in est vitae ut. Varius lacinia imperdiet et etiam et risus sapien scelerisque diam.</p>
                        <ul className='py-9 pl-4'>
                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <li className='text-[16px] font-normal leading-6 -tracking-[-.3px] text-black pb-3 relative'>
                                        Polaroid artisan tattooed, kale chips cloud bread crucifix yuccie irony.
                                        <div className="absolute top-1 -left-5 text-primary"><FaRegCheckCircle /></div>
                                    </li>
                                ))
                            }
                        </ul>


                    </div>
                </div>
                {/* images  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
                    <div className="w-full">
                        <img className='w-full' src={case5} alt="case study image" />
                    </div>
                    <div className="w-full">
                        <img className='w-full' src={case6} alt="case study image" />
                    </div>
                    <div className="w-full">
                        <img className='w-full' src={case7} alt="case study image" />
                    </div>
                </div>
                <div className="lg:px-[250px]">
                    <div className="pb-16">
                        <h3 className='h3'>Data Analysis</h3>
                        <p className='para pt-3'>Lorem ipsum dolor sit amet consectetur. Turpis tortor nunc sed amet et. Faucibus vitae morbi congue sed id mauris. Habitant lectus vitae risus quam amet fames sed. Ac nisi ac cursus leo. Donec turpis mattis ultrices viverra. Eget commodo massa et ultrices duis risus vestibulum cras. Libero et quis purus vulputate tristique cursus. In maecenas augue semper penatibus. Dapibus ornare quisque a faucibus dignissim. Iaculis faucibus orci viverra diam ornare consectetur eu orci. Tempor sed facilisis id at integer. At aenean eu in morbi tincidunt consectetur viverra. Augue pulvinar luctus in est vitae ut. Varius lacinia imperdiet et etiam et risus sapien scelerisque diam.</p>
                    </div>
                    <div className="pb-16">
                        <h3 className='h3'>Data Analysis</h3>
                        <div className="flex flex-col gap-6 mt-5">
                            <div className="border p-4 flex flex-col gap-1">
                                <h3 className='text-xl font-medium leading-9 -tracking-[.4px]'>What is a business agency?</h3>
                                <p className="para">Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse amet amet. Aenean suspendisse eget est pulvinar. Fames eget eget nascetur ornare</p>
                            </div>
                            <div className="border p-4 flex flex-col gap-1">
                                <h3 className='text-xl font-medium leading-9 -tracking-[.4px]'>How do subscriptions work?</h3>
                                <p className="para">Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse amet amet. Aenean suspendisse eget est pulvinar. Fames eget eget nascetur ornare</p>
                            </div>
                            <div className="border p-4 flex flex-col gap-1">
                                <h3 className='text-xl font-medium leading-9 -tracking-[.4px]'>How often should I update my website?</h3>
                                <p className="para">Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse amet amet. Aenean suspendisse eget est pulvinar. Fames eget eget nascetur ornare</p>
                            </div>
                            <div className="border p-4 flex flex-col gap-1">
                                <h3 className='text-xl font-medium leading-9 -tracking-[.4px]'>How do you understand your customers?</h3>
                                <p className="para">Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse amet amet. Aenean suspendisse eget est pulvinar. Fames eget eget nascetur ornare</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default CaseBody

import React from 'react'
import cn from '../../../utils/cn'
import Button from '../../shared/Button/Button'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import errorImg from '../../../assets/images/error.png';
const Error = () => {
    const navigate = useNavigate();
    return (
        <section className='lg:pt-[160px] pt-[120px] pb-24'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2">
                            <span className='py-1 px-2 rounded-xl bg-blue-200/30 border border-blue-400 text-primary'>404 Error</span>
                        </div>
                        <h2 className={cn('text-[32px] font-semibold leading-[48px] md:leading-[41px] -tracking-[.5px] text-black pt-3 pb-4')}>Oops! Looks Like You Took a
                            Wrong Turn. Let's Get You Back
                            on Track!</h2>
                        <p className='para'>Lorem ipsum dolor sit amet consectetur. Turpis tortor nunc sed amet et. Faucibus vitae morbi congue sed id mauris.</p>
                        <div className="mt-10 flex gap-3 items-center flex-col md:flex-row">
                            <button type='button' onClick={() => navigate(-1)} className='flex py-3 px-5 justify-center rounded-md border w-full md:w-auto text-[16px] font-medium leading-6 -tracking-[.3px] duration-300 md:inline-flex items-center gap-2 text-[#455468] bg-transparent border-[#455468 hover:text-white hover:bg-[#1B4DFF]'>
                                <FaArrowLeftLong />
                                Go Back
                            </button>

                            <Button link={"/"}>Go Back Home</Button>
                        </div>
                    </div>
                    <div className="lg:h-[614px] hidden md:inline">
                        <img src={errorImg} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error

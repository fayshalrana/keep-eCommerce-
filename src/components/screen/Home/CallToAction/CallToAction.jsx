import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../shared/Button/Button'
import { MdArrowOutward } from "react-icons/md";
const CallToAction = () => {
    return (
        <section className='py-14'>
            <div className="container_fluid">
                <div className="w-full py-[60px] px-2 md:px-0 md:py-[100px] bg-blue-300/30">
                    <div className="flex items-center gap-6 md:gap-14 flex-col justify-center">
                        <h2 className='text-[32px] md:text-5xl font-semibold leading-[42px] md:leading-[60px] -tracking-[.5px] md:-tracking-[1.75px] text-center text-black'>Ready to Dive in? <br />
                            Start Your Free Trial Today.</h2>
                            <Button className={"border-primary"}>Get Started Today <MdArrowOutward /></Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CallToAction

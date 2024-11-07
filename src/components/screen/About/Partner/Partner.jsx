import React from 'react'
import Partners from '../../Home/Partner/Partners'

const Partner = () => {
    return (
        <section className='pt-8 pb-14'>
            <div className="container_fluid">
                <div className="w-full md:w-[70%] mx-auto text-center">
                    <p className='para text-black'>We’ve helped over 150+ start-ups grow their business</p>
                </div>
                <Partners className={"pt-[20px] lg:pt-[30px]"} />
            </div>
        </section>
    )
}

export default Partner

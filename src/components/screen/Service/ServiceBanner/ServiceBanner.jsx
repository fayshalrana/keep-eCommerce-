import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import Button from '../../../shared/Button/Button'
import Video from '../../About/Video/Video'

const ServiceBanner = () => {
    return (
        <section className=''>
            <div className="container_fluid pt-[100px] lg:pt-[200px] pb-24">
                <div className="text-center w-full md:w-[450px] lg:w-[720px] mx-auto">
                    <SectionHeader lineClass={'right-[34%]'} header={"We Create, Construct, & Deliver Exceptional Excellence."} subHeader={"Our Services"} />

                </div>
                <div className="mt-12">
                    <Video />
                </div>
            </div>
        </section>
    )
}

export default ServiceBanner

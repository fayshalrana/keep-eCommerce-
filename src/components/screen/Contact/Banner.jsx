import React from 'react'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'

const Banner = () => {
    return (
        <section className='pt-[120px] md:pt-[160px] pb-20'>
            <div className="container_fluid">
                <div className="w-full md:w-[650px] mx-auto text-center">
                    <SectionHeader lineClass={"right-[31%]"} className={"md:px-16"} header={"Connect with Our Friendly Team"} subHeader={"Contact Us"} />
                    <p className='para pt-6'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing</p>
                </div>
            </div>
        </section>
    )
}

export default Banner

import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import Button from '../../../shared/Button/Button'

const Banner = () => {
    return (
        <section className="">
            <div className="container_fluid pt-[100px] lg:pt-[200px] pb-24">
                <div className="text-center w-full md:w-[450px] lg:w-[620px] mx-auto">
                    <SectionHeader lineClass={'right-[34%]'} header={"We're Helping Everyone Build Better Sites."} subHeader={"About Keep"} />
                    <p className='para py-8'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing</p>
                    <div className="px-5 md:px-0">
                        <Button>Contact us</Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner

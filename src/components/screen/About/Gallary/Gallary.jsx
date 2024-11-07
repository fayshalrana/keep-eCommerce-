import React from 'react'
import aboutG1 from '../../../../assets/images/about/aboutG1.png'
import aboutG2 from '../../../../assets/images/about/aboutG2.png'
import aboutG3 from '../../../../assets/images/about/aboutG3.png'
const Gallary = () => {
    return (
        <section className='pb-10 md:pb-20'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="w-full">
                        <img className='w-full' src={aboutG1} alt="gallery image one" />
                    </div>
                    <div className="w-full">
                        <img className='w-full' src={aboutG2} alt="gallery image one" />
                    </div>
                    <div className="w-full">
                        <img className='w-full' src={aboutG3} alt="gallery image one" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallary

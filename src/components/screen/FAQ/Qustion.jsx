import React from 'react'

const Qustion = () => {
    return (
        <section className="py-4 lg:py-8">
            <div className="container_fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {
                        Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="p-4 rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-none border border-transparent hover:border-gray-300 duration-200 cursor-pointer hover:border">
                                <h3 className='text-[#000000] text-lg md:text-2xl font-semibold leading-[34px] -tracking-[.4px]'>What is a business agency?</h3>
                                <p className='para pt-3 md:pt-5'>Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse amet amet. Aenean suspendisse eget est pulvinar. Fames eget eget nascetur ornare</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Qustion

import React from 'react'
import BlogCart from './BlogCart'
import blogImg1 from '../../../../assets/images/Blog/blog1.png'
const List = () => {
    return (
        <section className='py-4 lg:py-10'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <BlogCart titleClass={"text-[24px] lg:text-[20px] xl:text-[32px] leading-[42px]"} img={blogImg1} />
                    <BlogCart titleClass={"text-[24px] lg:text-[20px] xl:text-[32px] leading-[42px]"} img={blogImg1} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-16">
                    {
                        Array.from({ length: 12 }).map((_, index) => (
                            <BlogCart key={index} titleClass={"text-[24px] lg:text-[20px] xl:text-[26px] leading-[30px]"} img={blogImg1} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default List

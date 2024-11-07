import React from 'react'
import cn from '../../../../utils/cn'
import { Link } from 'react-router-dom'

const BlogCart = ({ img, titleClass }) => {
    return (
        <div>
            <div className="lg:h-[400px]">
                <Link to={`/blog-details`}>
                    <img className='w-full h-full object-cover' src={img} alt="" />
                </Link>
            </div>
            <div className="mt-5">
                <div className="flex items-center gap-2">
                    <Link to="#" className='py-1 px-2 rounded-2xl bg-blue-200/30 border border-blue-400 text-primary'>Marketing</Link>
                    <Link to="#" className='py-1 px-2 rounded-2xl bg-pink-200/30 border border-pink-400 text-pink-500'>Research</Link>
                </div>
                <Link to="/blog-details">
                    <h2 className={cn('text-[32px] font-semibold leading-[42px] -tracking-[.5px] text-black pt-3 pb-4', titleClass)}>Boost Your Startup Business with Our Digital Agency.</h2>
                </Link>
                <div className="flex items-center gap-4 pb-6">
                    <h4 className='text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Kristin Watson</h4>
                    <div className="w-[5px] h-[5px] rounded-complete bg-gray-400"></div>
                    <h4 className='text-[16px] font-medium leading-6 -tracking-[.3px] text-black'>Aug 30, 2023</h4>
                </div>
                <p className='para'>Lorem ipsum dolor sit amet consectetur. Turpis tortor nunc sed amet et. Faucibus vitae morbi congue sed id mauris.</p>
            </div>

        </div>
    )
}

export default BlogCart

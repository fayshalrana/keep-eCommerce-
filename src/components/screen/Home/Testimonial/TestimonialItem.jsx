import React from 'react';
import { FaStar } from 'react-icons/fa6';
import cn from '../../../../utils/cn';

const TestimonialItem = ({ testimonial }) => {
    return (
        <div className={cn("py-8 px-5 bg-red-400/10",
            {
                'bg-red-400/20': testimonial.id === 1,
                'bg-yellow-400/20': testimonial.id === 2,
                'bg-blue-400/20': testimonial.id === 3,
                'bg-gray-400/10': testimonial.id === 4,
                'bg-yellow-400/25': testimonial.id === 5,
                'bg-yellow-400/30': testimonial.id === 6,
                'bg-blue-400/10': testimonial.id === 7,
            }
        )}>
            <div className="">
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                        <FaStar key={index} className='w-6 h-6 text-yellow-500' />
                    ))}
                </div>
                <p className='para text-black py-6'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="w-[72px] h-[72px] overflow-hidden rounded-complete">
                    <img className='w-full h-full object-cover' src={testimonial.image} alt="" />
                </div>
                <div className="">
                    <h3 className='h3'>{testimonial.name}</h3>
                    <p className='para text-[16px]'>{testimonial.designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
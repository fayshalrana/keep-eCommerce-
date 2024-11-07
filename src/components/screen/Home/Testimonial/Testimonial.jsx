import React, { useEffect, useState } from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import TestimonialItem from './TestimonialItem'
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css'
import user1 from '../../../../assets/images/testimonial/user1.jpg'
import user2 from '../../../../assets/images/testimonial/user2.jpg'
import user3 from '../../../../assets/images/testimonial/user3.jpg'
import user4 from '../../../../assets/images/testimonial/user4.jpg'
import user5 from '../../../../assets/images/testimonial/user5.jpg'
import user6 from '../../../../assets/images/testimonial/user6.jpg'
import user7 from '../../../../assets/images/testimonial/user7.jpg'
const Testimonial = () => {

    const testimonials = [
        {
            "id": 1,
            "name": "John Doe",
            "designation": "Founder & CEO",
            "image": user1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id aliquet tincidunt, nunc nunc tincidunt nunc, id aliquet nunc nunc id aliquet nunc nunc tincidunt nunc.",
            "rating": 5
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "designation": "CTO",
            "image": user2,
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "rating": 4.8
        },
        {
            "id": 3,
            "name": "Alex Johnson",
            "designation": "COO",
            "image": user3,
            "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "rating": 4.5
        },
        {
            "id": 4,
            "name": "Emily Davis",
            "designation": "VP of Marketing",
            "image": user4,
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "rating": 4.2
        },
        {
            "id": 5,
            "name": "Sarah Wilson",
            "designation": "Chief Financial Officer",
            "image": user5,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo vel est fringilla fermentum. Nunc nec felis vel libero facilisis scelerisque.",
            "rating": 4.9
        },
        {
            "id": 6,
            "name": "Michael Anderson",
            "designation": "Chief Technology Officer",
            "image": user6,
            "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse potenti. Aenean id urna vel elit vehicula aliquet.",
            "rating": 4.7
        },
        {
            "id": 7,
            "name": "Jessica Miller",
            "designation": "VP of Human Resources",
            "image": user7,
            "description": "Sed euismod, nunc id aliquet tincidunt, nunc nunc tincidunt nunc, id aliquet nunc nunc id aliquet nunc nunc tincidunt nunc. Duis non purus eu tellus cursus lacinia.",
            "rating": 4.5
        }
    ]
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to ensure this effect runs only once

    return (
        <section className='py-[40px] lg:py-[100px]'>
            <div className="container_fluid">
                <div className="w-full lg:w-[60%] mx-auto">
                    <SectionHeader lineClass={"right-[35%] -bottom-0 w-[25%]"} className={"justify-center text-center"} header={"Trusted by Millions of Worldwide Customers"} subHeader={"Testimonials"} />
                </div>
                <div className="mt-12">

                    <Swiper
                       

                        modules={[Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            // when window width is >= 640px
                            320: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                        }}

                    >
                        {window.innerWidth <= 768 ?
                            testimonials.slice(0, 4).map(testimonial => <SwiperSlide key={testimonial.id} ><TestimonialItem testimonial={testimonial} /></SwiperSlide>) :
                            testimonials.map(testimonial => <SwiperSlide key={testimonial.id} ><TestimonialItem testimonial={testimonial} /></SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial

import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import Button from '../../../shared/Button/Button'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png'
import google from '../../../../assets/images/google.png'
import figma from '../../../../assets/images/figma.png'
import paypal from '../../../../assets/images/paypal.png'
import slug from '../../../../assets/images/slug.png'
import star from '../../../../assets/images/star.png'
import { motion } from "framer-motion";
const Integrations = () => {
    return (
        <section className=''>
            <div className="container_fluid">
                <div className="grid gird-cols-1 md:grid-cols-2 lg:gap-8">
                    <div className="xl:flex flex-col justify-center">
                        <SectionHeader lineClass={"md:right-[70%] md:w-[30%] w-[50%] right-[28%]"} subHeader={"Integrations"} header={"Integration with All Your Favorite Tools"} className={"text-center md:text-left justify-center"} />
                        <p className='para pt-3 pb-5'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing Before & After magazine answered a curious reader.</p>
                        <Button className={"mr-auto"} hover={true}>All Integrations <MdArrowOutward /></Button>
                    </div>
                    <div className="h-[330px] xl:h-[700px] overflow-hidden">
                        <div className="flex justify-center items-center h-full w-full">
                            <div className="relative w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] flex justify-center items-center rounded-complete bg-red-300/40">
                                <Link to='#' className="flex justify-center items-center gap-[10px]">
                                    <div className="lg:h-[80px] lg:w-[80px] w-[40px] h-[40px] rounded-[10px] lg:rounded-[20px] overflow-hidden">
                                        <img className="w-full h-full object-cover" src={logo} alt="Site logo" />
                                    </div>
                                </Link>
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        translateZ: 0
                                    }}
                                    transition={{
                                        repeat: Infinity,  // Repeat the animation indefinitely
                                        duration: 5,      // Duration of each rotation (in seconds)
                                        ease: "linear"     // Linear easing for a continuous rotation
                                    }}
                                    className="absolute w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] bg-red-100/60 border rounded-complete -z-10">
                                    <div className="lg:w-[128px] w-[40px] h-[40px] lg:h-[128px] rounded-complete  bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute top-0 lg:-top-[50px] left-[20px] z-10 p-1 lg:p-8">
                                        <motion.div
                                            animate={{
                                                rotate: -360,
                                                translateZ: 0
                                            }}
                                            transition={{
                                                repeat: Infinity,  // Repeat the animation indefinitely
                                                duration: 4,      // Duration of each rotation (in seconds)
                                                ease: "linear"     // Linear easing for a continuous rotation
                                            }}
                                            className="w-full h-full">
                                            <img className='w-full h-full object-cover' src={star} alt="" />
                                        </motion.div>
                                    </div>
                                    <div className="w-[40px] h-[40px] lg:w-16 lg:h-16 rounded-complete  bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute bottom-[20px] left-[20px] z-50 p-2 lg:p-3">
                                        <motion.div
                                            animate={{
                                                rotate: -360,
                                                translateZ: 0
                                            }}
                                            transition={{
                                                repeat: Infinity,  // Repeat the animation indefinitely
                                                duration: 4,      // Duration of each rotation (in seconds)
                                                ease: "linear"     // Linear easing for a continuous rotation
                                            }}
                                            className="w-full h-full ">
                                            <img className='w-full h-full object-cover' src={paypal} alt="" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        translateZ: 0
                                    }}
                                    transition={{
                                        repeat: Infinity,  // Repeat the animation indefinitely
                                        duration: 5,      // Duration of each rotation (in seconds)
                                        ease: "linear"     // Linear easing for a continuous rotation
                                    }}
                                    className="absolute lg:w-[550px] w-[280px] h-[280px] lg:h-[550px] bg-red-100/30 border transform  rounded-complete -z-20">
                                    <div className="lg:w-[80px] w-[40px] h-[40px] lg:h-[80px] rounded-complete  bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute top-[63px] left-[20px] z-10 p-1 lg:p-3">
                                        <motion.div
                                            animate={{
                                                rotate: -360,
                                                translateZ: 0
                                            }}
                                            transition={{
                                                repeat: Infinity,  // Repeat the animation indefinitely
                                                duration: 4,      // Duration of each rotation (in seconds)
                                                ease: "linear"     // Linear easing for a continuous rotation
                                            }}
                                            className="w-full h-full">
                                            <img className='w-full h-full object-cover' src={slug} alt="" />
                                        </motion.div>
                                    </div>
                                    <div className="lg:w-16 lg:h-16 w-[40px] h-[40px] rounded-complete  bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute bottom-[20px] right-[80px] z-50 p-1 lg:p-2">
                                        <motion.div
                                            animate={{
                                                rotate: -360,
                                                translateZ: 0
                                            }}
                                            transition={{
                                                repeat: Infinity,  // Repeat the animation indefinitely
                                                duration: 4,      // Duration of each rotation (in seconds)
                                                ease: "linear"     // Linear easing for a continuous rotation
                                            }}
                                            className="w-full h-full">
                                            <img className='w-full h-full object-cover' src={google} alt="" />
                                        </motion.div>
                                    </div>
                                    <div className="lg:w-16 lg:h-16 w-[40px] h-[40px] rounded-complete bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute bottom-[50%] -right-0 lg:-right-[31px] z-50 p-2">
                                        <motion.div
                                            animate={{
                                                rotate: -360,
                                                translateZ: 0
                                            }}
                                            transition={{
                                                repeat: Infinity,  // Repeat the animation indefinitely
                                                duration: 4,      // Duration of each rotation (in seconds)
                                                ease: "linear"     // Linear easing for a continuous rotation
                                            }}
                                            className="w-full h-full">
                                            <img className='w-full h-full object-cover' src={figma} alt="" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Integrations

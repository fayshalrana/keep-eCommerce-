import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import './Header.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {

    const [mobileMenu, setMobileMenus] = useState(false)

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false)
    const [search, setSearch] = useState(false)
    const inputRef = useRef(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous) {
            setHidden(true);
        } else if (latest === 0) {
            setHidden(false);
        }
    });

    const handleMobileMenus = () => {
        setMobileMenus(!mobileMenu)
    }

    // mobile version sub menu show hide 
    const [activeSubmenu, setActiveSubmenu] = useState('');

    const toggleSubmenu = (menuItem) => {
        setActiveSubmenu((prevActiveSubmenu) => (prevActiveSubmenu === menuItem ? '' : menuItem));
    };

    //search hide clicking outside of search
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setSearch(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <motion.section
            variants={{
                visible: { x: 0, background: 'transparent' },
                hidden: {
                    y: "-10%",
                    background: 'rgb(255 255 255 / 78%)',
                    backdropFilter: 'blur(10px)',
                }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: .35, ease: "easeInOut" }}
            className={`${hidden ? "py-3" : "py-8"}  fixed left-0 w-full z-50`}>
            <div className="container_fluid">
                <div className="flex justify-between items-center relative">
                    {/* Header left Side  */}
                    <div className="flex gap-6 items-center">
                        {/* Logo  */}
                        <div className="">
                            <Link className="flex justify-center items-center gap-[10px]">
                                <div className="h-[34px] w-[34px] rounded-[10px] overflow-hidden">
                                    <img className="w-full h-full object-cover" src={logo} alt="Site logo" />
                                </div>
                                <h3 className="font-medium text-[16px]">Keep</h3>
                            </Link>
                        </div>
                        {/* Navbar  */}
                        <div className="hidden lg:inline pl-6 border-l">
                            <ul className="flex lg:gap-4 xl:gap-5 items-center">
                                <li className='flex items-center gap-2 cursor-pointer text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black group relative'>Work <IoIosArrowDown className='group-hover:rotate-180 duration-200' />
                                    {/* work dropdown  */}
                                    <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-300 z-50 w-[10rem] rounded-md bg-white absolute top-7 -left-[13px] p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                        <ul className="flex flex-col">
                                            <li><Link to='/service' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Service</Link></li>
                                            <li><Link to='/pricing-plan' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Pricing plan</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Work 3</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Work 4</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Work 5</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='flex items-center gap-2 cursor-pointer text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black group relative'>Product <IoIosArrowDown className='group-hover:rotate-180 duration-200' />
                                    {/* Product dropdown  */}
                                    <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-300 z-50 w-[10rem] rounded-md bg-white absolute top-7 -left-[13px] p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                        <ul className="flex flex-col">
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Product 1</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Product 2</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Product 3</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Product 4</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Product 5</Link></li>
                                        </ul>
                                    </div></li>
                                <li className='flex items-center gap-2 cursor-pointer text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black group relative'>Download <IoIosArrowDown className='group-hover:rotate-180 duration-200' />
                                    {/* work dropdown  */}
                                    <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-300 z-50 w-[10rem] rounded-md bg-white absolute top-7 -left-[13px] p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                        <ul className="flex flex-col">
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Download 1</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Download 2</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Download 3</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Download 4</Link></li>
                                            <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Download 5</Link></li>
                                        </ul>
                                    </div></li>
                                <li className='flex items-center gap-2 cursor-pointer text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black group relative'>Resources <IoIosArrowDown className='group-hover:rotate-180 duration-200' />
                                    {/* Resources dropdown  */}
                                    <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-300 z-50 w-[10rem] rounded-md bg-white absolute top-7 -left-[13px] p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                        <ul className="flex flex-col">
                                            <li><Link to='/blog' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Blog</Link></li>
                                            <li><Link to='/blog-details' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Blog details</Link></li>
                                            <li><Link to='/case-study' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Case Study</Link></li>
                                            <li><Link to='/case-study-details' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Case Study details</Link></li>
                                            <li><Link to='/error' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Error page</Link></li>
                                        </ul>
                                    </div></li>
                                <li className='flex items-center gap-2 cursor-pointer text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black group relative'>About <IoIosArrowDown className='group-hover:rotate-180 duration-200' />
                                    {/* work dropdown  */}
                                    <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-300 z-50 w-[10rem] rounded-md bg-white absolute top-7 -left-[13px] p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                        <ul className="flex flex-col">
                                            <li><Link to='/about' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">About us</Link></li>
                                            <li><Link to='/Team' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Team</Link></li>
                                            <li><Link to='/faq' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">FAQ</Link></li>
                                        </ul>
                                    </div></li>
                            </ul>
                        </div>
                    </div>
                    {/* Header Right side  */}
                    <div className="flex gap-3 lg:gap-3 xl:gap-4 items-center">
                        <input ref={inputRef} type="text" placeholder='Search...' className={`w-[7rem] lg:w-[10rem] rounded-md py-4 px-2 text-[14px] font-normal border-2 border-black focus:outline-none focus:border-blue-300  ${search ? "visible" : "invisible"}`} />
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent click event from propagating
                                setSearch(!search);
                            }}
                            className='md:py-3 flex items-center gap-2 text-[20px] md:text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black'><IoSearch className='text-[30px] lg:text-[20px]' /> <span className="hidden lg:inline relative">Search</span></button>
                        <Link to='/contact-us' className="hidden bg-primary text-white hover:bg-transparent hover:text-[#455468] lg:flex py-3 px-5 justify-center rounded-md border w-full md:w-auto  text-[16px] font-medium leading-6 -tracking-[.3px] duration-300 md:inline-flex items-center gap-2 whitespace-nowrap">Contact</Link>
                        <div className="lg:hidden">
                            <label className="container">
                                <input type="checkbox" onClick={handleMobileMenus} />
                                <div className="checkmark">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </label>
                        </div>
                    </div>
                    {/* Mobile Menus  */}
                    <motion.div
                        animate={{ y: mobileMenu ? 0 : -700 }} initial={{ y: -700 }}
                        className="w-full md:w-[50%] h-screen fixed top-[60px] left-0 p-4 lg:hidden"> 
                        <div style={{ backdropFilter: 'blur(10px)' }} className="w-full  bg-white rounded-xl p-3 border backdrop-blur-xl overflow-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                            <ul className='flex flex-col gap-2'>
                                <li onClick={() => toggleSubmenu('menu1')} className="text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black py-2 flex justify-start gap-2 bg-white px-3 flex-col rounded-md"><span className='w-full flex justify-between'>Work <MdOutlineKeyboardArrowDown className='text-[20px]' /></span>
                                    {activeSubmenu === 'menu1' && (

                                        <div className="block">
                                            <ul className='flex flex-col gap-[.5px] pl-5'>
                                                <li className='list-disc'>

                                                    <Link to="" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                                <li className='list-disc'>

                                                    <Link to="" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                                <li className='list-disc'>

                                                    <Link to="" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}

                                </li>
                                <li onClick={() => toggleSubmenu('menu2')} className="text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black py-2 flex justify-start gap-2 bg-white px-3 flex-col rounded-md"><span className='w-full flex justify-between'>Product <MdOutlineKeyboardArrowDown className='text-[20px]' /></span>
                                    {activeSubmenu === 'menu2' && (

                                        <div className="block">
                                            <ul className='flex flex-col gap-[.5px] pl-5'>
                                                <li className="list-disc">
                                                    <Link to="" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                                <li className="list-disc">
                                                    <Link to="" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                                <li className="list-disc">
                                                    <Link to="" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li onClick={() => toggleSubmenu('menu3')} className="text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black py-2 flex justify-start gap-2 bg-white px-3 flex-col rounded-md"><span className='w-full flex justify-between'>Download <MdOutlineKeyboardArrowDown className='text-[20px]' /></span>
                                    {activeSubmenu === 'menu3' && (

                                        <div className="block">
                                            <ul className='flex flex-col gap-[.5px] pl-5'>
                                                <li className="list-disc">
                                                    <Link className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                                <li className="list-disc">
                                                    <Link className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                                <li className="list-disc">
                                                    <Link className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Work 1</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li onClick={() => toggleSubmenu('menu4')} className="text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black py-2 flex justify-start gap-2 bg-white px-3 flex-col rounded-md"><span className='w-full flex justify-between'>Resources <MdOutlineKeyboardArrowDown className='text-[20px]' /></span>
                                    {activeSubmenu === 'menu4' && (

                                        <div className="block">
                                            <ul className='flex flex-col gap-[.5px] pl-5'>
                                                <li className="list-disc">
                                                    <Link to="/Blog" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Blog</Link>
                                                </li>
                                                <li className="list-disc">
                                                    <Link to="/case-study-details" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Case Details</Link>
                                                </li>
                                                <li className="list-disc">
                                                    <Link to="/case-study" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Case Study</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li onClick={() => toggleSubmenu('menu5')} className="text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black py-2 flex justify-start gap-2 bg-white px-3 flex-col rounded-md"><span className='w-full flex justify-between'>About <MdOutlineKeyboardArrowDown className='text-[20px]' /></span>
                                    {activeSubmenu === 'menu5' && (

                                        <div className="block">
                                            <ul className='flex flex-col gap-[.5px] pl-5'>
                                                <li className="list-disc">
                                                    <Link to="/faq" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>About Us</Link>
                                                </li>
                                                <li className="list-disc">
                                                    <Link to="/team" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Team</Link>
                                                </li>
                                                <li className="list-disc">
                                                    <Link to="/faq" className='text-[12px] font-normal hover:underline leading-[18px] -tracking-[.2px] text-black'>Faq</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section >
    )
}

export default Header

import React from 'react'
import ServiceItem from '../../Home/Services/ServiceItem'
import { MdFileCopy, MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
const Services = () => {

    const data = [
        {
            icon: <MdFileCopy />,
            iconClass: "bg-red-400",
            header: 'Finance Management',
            content: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.',
        },
        {
            icon: <MdFileCopy />,
            iconClass: "bg-blue-400",
            header: 'Finance Management',
            content: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.',
        },
        {
            icon: <MdFileCopy />,
            iconClass: "bg-yellow-400",
            header: 'Finance Management',
            content: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.',
        },
        {
            icon: <MdFileCopy />,
            iconClass: "bg-green-400",
            header: 'Finance Management',
            content: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.',
        },
        {
            icon: <MdFileCopy />,
            iconClass: "bg-purple-400",
            header: 'Finance Management',
            content: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.',
        },
        {
            icon: <MdFileCopy />,
            iconClass: "bg-blue-600",
            header: 'Finance Management',
            content: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.',
        },
    ];
    return (
        <section className='py-6 md:py-8 lg:py-12'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="lg:pt-24">
                        {
                            data.slice(0, 2).map((item, index) => (
                                <ServiceItem
                                    key={index}
                                    icon={item.icon}
                                    iconClass={item.iconClass}
                                    boxClass={`shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] flex flex-col justify-center items-center`}
                                    textClass={"text-center"}
                                    heading={item.header}
                                    content={item.content}
                                >
                                    <Link className="LM_btn">Learn More <MdOutlineArrowOutward /></Link>
                                </ServiceItem>
                            ))
                        }
                    </div>
                    <div className="">
                        {
                            data.slice(2, 4).map((item, index) => (
                                <ServiceItem
                                    key={index}
                                    icon={item.icon}
                                    iconClass={item.iconClass}
                                    boxClass={`shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] flex flex-col justify-center items-center`}
                                    textClass={"text-center"}
                                    heading={item.header}
                                    content={item.content}
                                >
                                    <Link className="LM_btn">Learn More <MdOutlineArrowOutward /></Link>
                                </ServiceItem>
                            ))
                        }
                    </div>
                    <div className="lg:pt-24">
                        {
                            data.slice(4, 6).map((item, index) => (
                                <ServiceItem
                                    key={index}
                                    icon={item.icon}
                                    iconClass={item.iconClass}
                                    boxClass={`shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] flex flex-col justify-center items-center`}
                                    textClass={"text-center"}
                                    heading={item.header}
                                    content={item.content}
                                >
                                    <Link className="LM_btn">Learn More <MdOutlineArrowOutward /></Link>
                                </ServiceItem>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services

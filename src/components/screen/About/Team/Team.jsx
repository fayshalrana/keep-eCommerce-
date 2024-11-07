import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import teamImg1 from '../../../../assets/images/Team/team1.png'
import teamImg3 from '../../../../assets/images/Team/team2.png'
import teamImg2 from '../../../../assets/images/Team/team3.png'
import teamImg4 from '../../../../assets/images/Team/team4.png'
import { FaFacebook } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'
import cn from '../../../../utils/cn'
const Team = ({className}) => {
    const teamImages = [teamImg1, teamImg2, teamImg3, teamImg4];
    const teamNames = ['Arlene McCoy', 'John Doe', 'Jane Smith', 'Mike Johnson'];
    const teamPosts = ['Designer', 'Developer', 'Marketing Specialist', 'Project Manager'];
    return (
        <section className={cn("py-24", 
        className,)}>
            <div className="container_fluid">
                <div className="">
                    <SectionHeader lineClass={"w-[20%] right-[43%]"} className={"text-center"} header={"The Leader Board Of Our Company"} subHeader={"Team"} />
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div className="group flex justify-center p-4 bg-white shadow-lg flex-col" key={index}>
                                <div className="h-300px overflow-hidden">
                                    <img className='w-full h-full object-cover group-hover:scale-110 duration-300' src={teamImages[index]} alt="" />
                                </div>
                                <div className="pt-8 md:px-4 xl:px-4 lg:px-0 text-center">
                                    <h3 className='h3'>{teamNames[index]}</h3>
                                    <p className='para'>{teamPosts[index]}</p>
                                    <ul className='flex items-center gap-2 justify-between pt-5'>
                                        <Link to="" className='py-3 px-6 xl:px-6 lg:p-4 border rounded-3xl hover:text-white hover:bg-primary duration-300 text-2xl text-gray-500'><FaFacebook /></Link>
                                        <Link to="" className='py-3 px-6 xl:px-6 lg:p-4 border rounded-3xl hover:text-white hover:bg-primary duration-300 text-2xl text-gray-500'><IoBasketballOutline /></Link>
                                        <Link to="" className='py-3 px-6 xl:px-6 lg:p-4 border rounded-3xl hover:text-white hover:bg-primary duration-300 text-2xl text-gray-500'><FaGithub /></Link>
                                    </ul>
                                </div>

                            </div>
                        ))

                    }
                </div>
            </div>
        </section>
    )
}

export default Team

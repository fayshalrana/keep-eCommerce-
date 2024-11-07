import React, { useRef, useState } from 'react'
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import aboutVideo from '../../../../assets/images/about/about.mp4'
import cn from '../../../../utils/cn';
const Player = () => {
    const videoPlayer = useRef()
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayPause = () => {
        if (isPlaying) {
            videoPlayer.current.pause();
        } else {
            videoPlayer.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div className='flex justify-center items-center flex-col '>

            <div className="relative group">
                <div className={cn("w-24 h-24 flex justify-center items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white/20 rounded-full invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300 z-20 backdrop-blur-sm",
                    {
                        'invisible opacity-0': isPlaying,
                        'visible opacity-100': !isPlaying
                    }
                )}>
                    <div className="absolute"></div>
                    <button className='p-4 rounded-full h-16 w-16  text-blue-800 font-medium text-3xl  bg-white/60 flex justify-center items-center' onClick={handlePlayPause}>{isPlaying ? <FaPlayCircle /> : <FaPauseCircle />}</button>
                </div>
                <video loop muted className='w-full h-[210px] md:h-[400px] lg:h-[600px]' ref={videoPlayer}
                >
                    <source src={aboutVideo} />
                </video>
            </div>
        </div>
    )
}

export default Player

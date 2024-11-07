import React from 'react'
import './Statstic.css'
const Statstic = () => {
    return (
        <div className='w-full py-4 px-2 md:px-8 flex flex-col bg-white drop-shadow-xl'>
            <div className="flex justify-between items-center">
                <h3 className='h3'>Statistics</h3>
                <button>:</button>
            </div>
            <div className="md:py-2">
                <input className='' type="range" min="0" max="100" step="1" defaultValue="40"></input>
            </div>
            <div className="flex justify-between items-center">
                <span className='text-[12px] md:text-[16px]'>$10.231k Expenses</span>
                <span className='text-[12px] md:text-[16px]'>$6.54K Available</span>
            </div>

        </div>
    )
}

export default Statstic

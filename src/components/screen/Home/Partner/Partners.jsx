import React from 'react'
import Partner from './Partner'
// import Marquee from "react-fast-marquee";
import image1 from '../../../../assets/images/partner1.png'
import image2 from '../../../../assets/images/partner2.png'
import image3 from '../../../../assets/images/partner3.png'
import image4 from '../../../../assets/images/partner4.png'
import image5 from '../../../../assets/images/partner5.png'
import image6 from '../../../../assets/images/partner6.png'
import cn from '../../../../utils/cn'
const Partners = ({className}) => {

    const partnerInfo = [
        {
            img: image1,
            name: 'Frendoz'
        },
        {
            img: image2,
            name: 'Suacbox'
        },
        {
            img: image3,
            name: 'Roundbe'
        },
        {
            img: image4,
            name: 'Starblow'
        },
        {
            img: image5,
            name: 'Earthlow'
        },
        {
            img: image6,
            name: 'Cuberlon'
        }
    ]


    return (
        <section className={cn("pt-[50px] lg:pt-[120px] pb-8",
        className,
        )}>
            <div className="container_fluid">
                <div className="grid grid-cols-2 md:grid-cols-3 md:justify-center gap-8 lg:flex items-center lg:justify-between lg:gap-0 xl:gap-14 justify-between">
                    {/* <Marquee> */}
                    {
                        partnerInfo.map((partner, index) => <Partner key={index} partner={partner} />)
                    }
                    {/* </Marquee> */}


                </div>
            </div>
        </section>
    )
}

export default Partners

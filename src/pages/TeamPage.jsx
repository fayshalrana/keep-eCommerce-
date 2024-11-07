import React from 'react'
import Team from '../components/screen/About/Team/Team'
import Number from '../components/screen/Home/Number/Number'
import CallToAction from '../components/screen/Home/CallToAction/CallToAction'
import Testimonial from '../components/screen/Home/Testimonial/Testimonial'
import { Helmet } from 'react-helmet'

const TeamPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Keep - team</title>
            </Helmet>
            <Team className={"pt-40"} />
            <Number />
            <CallToAction />
            <Testimonial />
        </>
    )
}

export default TeamPage

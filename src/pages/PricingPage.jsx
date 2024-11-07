import React from 'react'
import PricingPlan from '../components/screen/Service/Pricing/PricingPlan'
import { Helmet } from 'react-helmet'

const PricingPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Keep - pricing plan</title>
            </Helmet>
            <PricingPlan className={'pt-[120px] md:pt-[160px]'} />
        </>
    )
}

export default PricingPage

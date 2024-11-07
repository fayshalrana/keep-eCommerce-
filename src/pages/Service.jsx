import React from 'react'
import ServiceBanner from '../components/screen/Service/ServiceBanner/ServiceBanner'
import Partner from '../components/screen/About/Partner/Partner'
import Services from '../components/screen/Service/Services/Services'
import Integrations from '../components/screen/Home/Integrations/Integrations'
import PricingPlan from '../components/screen/Service/Pricing/PricingPlan'
import { Helmet } from 'react-helmet'

const Service = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Keep - services</title>
      </Helmet>
    <ServiceBanner/>
      <Partner/>
      <Services/>
      <Integrations/>
      <PricingPlan/>
    </>
  )
}

export default Service

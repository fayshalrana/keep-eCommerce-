import React from 'react'
import Banner from '../components/screen/CaseStudy/Banner/Banner'
import CaseBody from '../components/screen/CaseDetails/CaseBody'
import { Helmet } from 'react-helmet'

const CaseDetails = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Keep - case details</title>
      </Helmet>

      <Banner/>
      <CaseBody/>
    </>
  )
}

export default CaseDetails

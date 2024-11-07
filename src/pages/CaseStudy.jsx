import React from 'react'
import Banner from '../components/screen/CaseStudy/Banner/Banner'
import Case from '../components/screen/CaseStudy/Case/Case'
import { Helmet } from 'react-helmet'

const CaseStudy = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Keep - case study</title>
      </Helmet>
      <Banner/>
      <Case/>
    </>
  )
}

export default CaseStudy

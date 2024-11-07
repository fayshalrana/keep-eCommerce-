import React from 'react'
import Banner from '../components/screen/FAQ/Banner'
import Qustion from '../components/screen/FAQ/Qustion'
import CallToAction from '../components/screen/Home/CallToAction/CallToAction'
import Team from '../components/screen/About/Team/Team'
import { Helmet } from 'react-helmet'

const FaqPage = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Keep - faq</title>
      </Helmet>
      <Banner/>
      <Qustion/>
      <CallToAction/>
      <Team/>
    </>
  )
}

export default FaqPage

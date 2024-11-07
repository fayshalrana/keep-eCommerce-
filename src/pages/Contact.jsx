import React from 'react'
import Banner from '../components/screen/Contact/Banner'
import ContactForm from '../components/screen/Contact/ContactForm'
import ContactInfo from '../components/screen/Contact/ContactInfo'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keep - contact us</title>
      </Helmet>
      <Banner />
      <ContactForm />
      <ContactInfo />
    </>
  )
}

export default Contact

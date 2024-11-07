import React from 'react'
import Details from '../components/screen/BlogDetails/Details'
import { Helmet } from 'react-helmet'

const BlogDetails = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Keep - blog Details</title>
      </Helmet>

      <Details/>
    </>
  )
}

export default BlogDetails

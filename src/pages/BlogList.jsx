import React from 'react'
import Banner from '../components/screen/BlogList/Banner/Banner'
import List from '../components/screen/BlogList/List/List'
import { Helmet } from 'react-helmet'

const BlogList = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Keep - blog List</title>
            </Helmet>
            <Banner />
            <List />
        </>
    )
}

export default BlogList

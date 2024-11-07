import React from "react";
import Error from "../components/screen/Error/Error";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Keep - page not found</title>
      </Helmet>
    <Error/>
    </>
  );
};

export default ErrorPage;

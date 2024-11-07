import React from "react";
import Banner from "../components/screen/Home/Banner/Banner";
import Partners from "../components/screen/Home/Partner/Partners";
import Services from "../components/screen/Home/Services/Services";
import About from "../components/screen/Home/About/About";
import Feature from "../components/screen/Home/Feature/Feature";
import Explore from "../components/screen/Home/Explore/Explore";
import CallToAction from "../components/screen/Home/CallToAction/CallToAction";
import Integrations from "../components/screen/Home/Integrations/Integrations";
import Number from "../components/screen/Home/Number/Number";
import Testimonial from "../components/screen/Home/Testimonial/Testimonial";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Keep</title>
      </Helmet>
      <Banner/>
      <Partners/>
      <Services/>
      <About/>
      <Feature/>
      <Explore/>
      <CallToAction/>
      <Integrations/>
      <Number/>
      <Testimonial/>
    </>
  );
}

export default Home;

import React from "react";
import Banner from "../components/screen/About/Banner/Banner";
import Gallary from "../components/screen/About/Gallary/Gallary";
import Partner from "../components/screen/About/Partner/Partner";
import Feature from "../components/screen/About/Feature/Feature";
import Misson from "../components/screen/About/Misson/Misson";
import CallToAction from "../components/screen/Home/CallToAction/CallToAction";
import Testimonial from "../components/screen/Home/Testimonial/Testimonial";
import Video from "../components/screen/About/Video/Video";
import Team from "../components/screen/About/Team/Team";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keep - about us</title>
      </Helmet>
      <Banner />
      <Gallary />
      <Partner />
      <Feature />
      <Misson />
      <CallToAction />
      <Testimonial />
      <Video />
      <Team />
    </>
  );
};

export default About;

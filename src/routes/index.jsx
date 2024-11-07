import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Service from "../pages/Service";
import TeamPage from "../pages/TeamPage";
import FaqPage from "../pages/FaqPage";
import PricingPage from "../pages/PricingPage";
import CaseStudy from "../pages/CaseStudy";
import CaseDetails from "../pages/CaseDetails";
import BlogList from "../pages/BlogList";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import BarChartComponent from "../components/screen/Home/About/BarChartComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/team",
        element: <TeamPage/>
      },
      {
        path: "/faq",
        element: <FaqPage />
      },
      {
        path: "/pricing-plan",
        element: <PricingPage />
      },
      {
        path: "/case-study",
        element: <CaseStudy/>
      },
      {
        path: "/case-study-details",
        element: <CaseDetails/>
      },
      {
        path: "/blog",
        element: <BlogList/>
      },
      {
        path: "/blog-details",
        element: <BlogDetails/>
      },
      {
        path: "/contact-us",
        element: <Contact/>
      },
      {
        path: "*",
        element:<ErrorPage />
      }
    ]
  }
]);

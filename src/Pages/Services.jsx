import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const services = [
  {
    title: "Web Development",
    description: "Build modern, responsive, and functional websites.",
    icon: "https://cdn-icons-png.flaticon.com/512/2305/2305253.png", // Web icon
    bgColor: "bg-blue-500",
  },
  {
    title: "App Development",
    description: "Create seamless mobile applications for all platforms.",
    icon: "https://cdn-icons-png.flaticon.com/512/2942/2942612.png", // App icon
    bgColor: "bg-green-500",
  },
  {
    title: "Digital Marketing",
    description: "Boost your brand's presence online with tailored strategies.",
    icon: "https://cdn-icons-png.flaticon.com/512/1034/1034131.png", // Marketing icon
    bgColor: "bg-red-500",
  },
  {
    title: "Graphic Design",
    description: "Design stunning visuals for your brand and business.",
    icon: "https://cdn-icons-png.flaticon.com/512/1946/1946409.png", // Design icon
    bgColor: "bg-yellow-500",
  },
  {
    title: "SEO Optimization",
    description: "Improve your website ranking and organic traffic.",
    icon: "https://cdn-icons-png.flaticon.com/512/3280/3280982.png", // SEO icon
    bgColor: "bg-purple-500",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services</title>
      </Helmet>
      <NavBar></NavBar>
      <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-800">
            Our Services
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Explore the range of services we offer to elevate your business.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-lg shadow-lg p-6 ${service.bgColor} text-white flex flex-col items-center hover:shadow-xl transform transition-transform hover:scale-105`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-center mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;

import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { div } from 'framer-motion/client';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';

const BecomeMentor = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    // Example of how to fetch data, you can replace it with your own fetch logic
    // For static data, you can directly use the JSON array instead.
    const data = [
      {
        id: 1,
        title: "Become a Web Development Mentor",
        description: "Share your expertise in web development with budding developers and help them grow.",
        image: "https://i.ibb.co.com/FsHH36Q/jarif.jpg"
      },
      {
        id: 2,
        title: "Teach Data Science and Analytics",
        description: "Help students master data science and analytics through real-world projects.",
        image: "https://i.ibb.co.com/FsHH36Q/jarif.jpg"
      },
      {
        id: 3,
        title: "Mobile App Development Mentorship",
        description: "Lead the next generation of mobile developers in creating innovative apps.",
        image: "https://i.ibb.co.com/FsHH36Q/jarif.jpg"
      }
    ];

    setAds(data); // Set the fetched data to the state
  }, []);

  return (
    <>
    <Helmet>
      <title>
        Apply
      </title>
    </Helmet>
    <div className='p-5 bg-blue-100 mx-auto w-11/12 mt-5'>
        <NavBar></NavBar>
    </div>
    <div className="min-h-screen m-10 bg-gray-100 p-6">
      <h1 className="text-center text-4xl font-semibold mb-8">Become a Mentor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map(ad => (
          <Card key={ad.id} title={ad.title} description={ad.description} image={ad.image} />
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default BecomeMentor;

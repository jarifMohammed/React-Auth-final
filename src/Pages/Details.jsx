import { div } from 'framer-motion/client';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const Details = () => {
    const mentors =useLoaderData()
    const mentor = mentors.mentors[0]
    const {
        counselor: { name, profileImage, experience, specialization },
        rating: { number, badge },
        image_url,
        details,
        price,
        duration,
        dateTime,
        tags,
      } = mentor;
    // console.log(mentor);
    // console.log(mentors);
    return (
       <>
       <div>
        <NavBar></NavBar>
       </div>
       <main className=' w-4/12 mt-5 container mx-auto bg-slate-200 shadow-lg rounded-lg p-8'>
         <div
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 mx-auto max-w-lg"
          data-aos="fade-up"
        >
          {/* Profile Image */}
          <img
            src={image_url}
            alt={`${name}'s session`}
            className="w-full h-56 object-cover rounded-t-lg"
          />
    
          {/* Card Content */}
          <div className="p-4">
            {/* Name and Rating */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">{name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium text-sm">
                  {number} ⭐
                </span>
                <span className="text-gray-500 text-sm">{badge}</span>
              </div>
            </div>
    
            {/* Specialization */}
            <p className="text-sm text-gray-600">
              <strong>Specialization:</strong> {specialization}
            </p>
    
            {/* Experience */}
            <p className="text-sm text-gray-600">
              <strong>Experience:</strong> {experience}
            </p>
    
            {/* Details */}
            <p className="text-sm text-gray-600 my-2">{details}</p>
    
            {/* Price and Duration */}
            <p className="text-sm text-gray-600">
              <strong>Price:</strong> {price} | <strong>Duration:</strong> {duration}
            </p>
    
            {/* Date and Time */}
            <p className="text-sm text-gray-600">
              <strong>Date & Time:</strong>{" "}
              {new Date(dateTime).toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
    
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link to={`/mentorList/${mentor?.category_id}`} className='btn btn-neutral '>Book me</Link>
        </div>
       </main>
</>
      
      );
    };


export default Details;
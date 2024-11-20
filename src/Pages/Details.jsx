
import { Link, useLoaderData } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { useState } from 'react';

const Details = () => {
  const mentors = useLoaderData();
  const mentor = mentors.mentors[0];
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

  // State to handle comments
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, commentInput.trim()]);
      setCommentInput(''); // Clear the input field after submission
    }
  };

  return (
    <>
      <div className='p-5'>
        <NavBar />
      </div>
      <main className="container mx-auto p-4">
        <div
          className="bg-lime-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 mx-auto w-full max-w-4xl sm:max-w-3xl md:max-w-2xl lg:max-w-xl"
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
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">{name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium text-sm">
                  {number} ⭐
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">{badge}</span>
              </div>
            </div>

            {/* Specialization */}
            <p className="text-xs sm:text-sm text-gray-600">
              <strong>Specialization:</strong> {specialization}
            </p>

            {/* Experience */}
            <p className="text-xs sm:text-sm text-gray-600">
              <strong>Experience:</strong> {experience}
            </p>

            {/* Details */}
            <p className="text-xs sm:text-sm text-gray-600 my-2">{details}</p>

            {/* Price and Duration */}
            <p className="text-xs sm:text-sm text-gray-600">
              <strong>Price:</strong> {price} | <strong>Duration:</strong> {duration}
            </p>

            {/* Date and Time */}
            <p className="text-xs sm:text-sm text-gray-600">
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

          {/* Button */}
          <Link
            to={`/mentorList/${mentor?.category_id}`}
            className="block text-center mt-4 px-4 py-2 text-white bg-neutral-600 hover:bg-neutral-700 rounded-lg"
          >
            Book me
          </Link>
        </div>

        {/* Comment Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Comments</h3>
          
          {/* Comment Input */}
          <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-2">
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Leave a comment..."
              className="border border-gray-300 rounded-lg p-2 w-full h-24 resize-none"
            />
            <button
              type="submit"
              className="px-4  py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div className="mt-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="border-b border-gray-200 py-2">
                  <p className="text-sm text-gray-700">{comment}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;

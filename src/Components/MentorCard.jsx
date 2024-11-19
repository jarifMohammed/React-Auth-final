import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  const { _id,
    counselor: { name, profileImage, experience, specialization },
    rating: { number },
    tags,
  } = mentor;

  return (
    <motion.div
      className="  bg-gradient-to-r from-[#8e7d99] to-[#1f2141] p-4 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col max-w-xs mx-auto"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Image */}
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* Name and Rating */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg sm:text-xl font-semibold">
            {name}
          </h2>
          <span className="text-sm sm:text-base bg-purple-400 text-gray-800 px-2 py-1 rounded-full font-medium">
            {number} ⭐
          </span>
        </div>

        {/* Specialization */}
        <p className="text-gray-200 font-bold text-sm mt-1">
          Specialization: <span className="font-medium ">{specialization}</span>
        </p>

        {/* Experience */}
        <p className="text-gray-200 text-sm mt-1">
          Experience: <span className="font-medium">{experience}</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-blue-200 text-blue-900 text-xs font-medium px-2 py-1 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <Link to={`/counselorsDetails/${mentor._id}`}>
      <div className="px-4 py-2 border-t border-gray-300">
        
        <motion.button
        
          className="w-full font-semibold text-sm bg-blue-300 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
        >
          Learn More
        </motion.button>
        
      </div>
      </Link>
    </motion.div>
  );
};

export default MentorCard;

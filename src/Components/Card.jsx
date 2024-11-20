import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, image }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-4">
      <figure>
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={"/"} className="  btn btn-primary">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

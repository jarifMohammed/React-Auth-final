import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

  const [visible, setVisible] = useState(false)

  const showPass = () => {
    setVisible((prev) => !prev)
  }

  const [error, setError] = useState('');
  const { createNewuser, setUser, updateUserProfile, handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    // Password validation function
    const validatePassword = (password) => {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password); 
      const hasMinLength = password.length >= 6; 

      return hasUpperCase && hasLowerCase && hasMinLength;
    };

    // Validate password
    if (!validatePassword(password)) {
      toast.error('Password must be at least 6 characters, contain both uppercase and lowercase letters.');
      return;
    }

    // Proceed with user creation if password is valid
    createNewuser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message); 
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage); 
      });
  };

  return (
   <>
   <Helmet><title>
    Register
    </title></Helmet>
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(90deg,_#e3ffe7_0%,_#d9e7ff_100%)]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Animation Section */}
          <motion.div
            className="text-center lg:text-left w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <iframe
              className="w-96 h-96 lg:w-[400px] lg:h-[400px]"
              src="https://lottie.host/embed/70e1833b-1d2e-4938-9975-26d19b0d8c37/lmNpSq9IVr.json"
              title="Animation"
            ></iframe>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <h4 className="flex justify-center font-extrabold text-xl">Sign Up</h4>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photoUrl"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className='relative'>
                <input
                  name="password"
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  
                />
                 <button
          type="button"
          onClick={showPass}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
        >
          {visible ? <FaEyeSlash /> : <FaEye />}
        </button>
                </div>
                 
                <p className="p-4">
                  Already have an account? <Link className="font-semibold link link-hover" to="/auth/login">Login</Link>
                </p>
              </div>
              <div className="flex justify-center">
                <button onClick={handleGoogleLogin}>
                  <FcGoogle className="w-10 h-10" />
                </button>
              </div>
              <div className="form-control mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Register
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Register;

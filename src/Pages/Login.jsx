import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS
import { Helmet } from "react-helmet";




const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

   const from = location.state?.from?.pathname || '/';
  const { userLogin, setUser, handleGoogleLogin,user } = useContext(AuthContext);
  
  const [error, setError] = useState('');
  const [email,setEmail] = useState('')

  // Password validation function
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUpperCase || !hasLowerCase || !hasMinLength) {
      setError('Password must contain at least 6 characters, including an uppercase letter and a lowercase letter.');
      toast.error("Invalid password! " + error); // Show toast on validation error
      return false;
    }
    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Check password validity
    if (!validatePassword(password)) {
      return;
    }

    // Attempt to log in
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Login failed! " + errorMessage); // Show toast on login error
      });
  };

  return (
    <>
    <Helmet>
      <title>
        Login
      </title>
    </Helmet>
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
              src="https://lottie.host/embed/41cbd0c1-d016-438a-b8df-29288631386e/SIbgJpwCuh.json"
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
                <h4 className="flex justify-center font-extrabold text-xl">Log in to your account</h4>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link 
                  state={{email}}
                    to={"/forgot"}
                    className="label-text-alt link link-hover text-primary"
                  >
                    Forgot password?
                  </Link>
                </label>
                <p>
                  Don't have an account? <Link className="link link-hover" to="/auth/register">Register</Link>
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
                  Login
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ToastContainer component should be added here to show the toasts */}
      <ToastContainer />
    </div>
    </>
  );
};

export default Login;

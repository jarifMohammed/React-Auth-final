import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const email = location.state?.email || ''; // Get the email passed from the Login page

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add any password validation or API call logic here, if necessary

    // Redirect to Gmail
    window.location.href = 'https://mail.google.com';
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <NavBar></NavBar>
      <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(90deg,_#e3ffe7_0%,_#d9e7ff_100%)]">
        <div className="card bg-base-100 w-full max-w-sm p-6 shadow-xl">
          <h2 className="text-center text-2xl font-bold mb-4">Reset Password</h2>
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ForgotPassword;

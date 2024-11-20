
import NavBar from '../Components/NavBar';
import { useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext); // Access user from context
    const [name, setName] = useState(user?.displayName || ''); // Default to current name
    const [photoURL, setPhotoURL] = useState(user?.photoURL || ''); // Default to current photoURL
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    // Handle the form submission to update profile
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        if (name === '' || photoURL === '') {
          setError('Both fields are required!');
          return;
        }
  
        // Update the user profile using Firebase's updateProfile method
        await updateUserProfile({
          displayName: name,
          photoURL: photoURL,
        });
  
        navigate('/'); 
      } catch (err) {
        setError('Failed to update profile. Please try again.');
      }
    };
  
    return (
      <>
      <Helmet>
        <title>
          Profile
        </title>
      </Helmet>
      <div>
            <header className='py-3 w-11/12 mx-auto'>
                <NavBar></NavBar>
            </header>
            <div className="min-h-screen mx-auto m-10 flex justify-center items-center bg-gradient-to-r from-green-200 to-blue-200">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl p-6">
        <h2 className="text-2xl font-semibold text-center">My Profile</h2>
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
        <div className="flex justify-center mt-4">
          {/* Display user's profile photo */}
          <img src={photoURL} alt="Profile" className="w-24 h-24 rounded-full" />
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} 
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)} 
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  <Footer></Footer>
        </div>
      </>
        
    );
};

export default Profile;
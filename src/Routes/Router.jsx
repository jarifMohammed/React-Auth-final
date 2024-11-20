import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Mentors from "../Pages/Mentors";
import Details from "../Pages/Details";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

import Profile from "../Pages/Profile";
import BecomeMentor from "../Pages/BecomeMentor";
import ForgotPassword from "../Pages/ForgotPassword";
import Services from "../Pages/Services";
import Page from "../Pages/Page";






const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/mentorList/01"}></Navigate>,
      },
      {
        path: "/mentorList/:id",
        element: <Mentors></Mentors>,
        loader: async ({ params }) => {
          const res = await fetch(`/mentor.json`);
          const data = await res.json();

          let mentors;

          if (params.id === "03") {
            // When "All" category is selected, return all mentors
            mentors = data.data; // Assuming your mentor data is inside `data.data.mentor_category`
          } else {
            // Filter mentors based on category_id
            mentors = data.data.filter(
              (mentor) => mentor.category_id === params.id
            );
          }

          return { mentors };
        },
      },
    ],
  },
  
  
  {
    path: "/counselorsDetails/:id",
    element: <PrivateRoute>
      <Details></Details>
    </PrivateRoute> ,
    loader: async ({params}) => {
      const res = await fetch(`/mentor.json`);
      const data = await res.json();
    
      // Filter mentors that have a valid _id field
      const mentors = data.data.filter((mentor) => mentor._id ===params.id);
    
      return { mentors };
    }
    
},
  {
    path: "/auth",
    element:<AuthLayout></AuthLayout> ,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  },
  {
    path: "/becomeMentor",
    element: <PrivateRoute>
      <BecomeMentor></BecomeMentor>
    </PrivateRoute>,
  },
  {
    path: "/profile",
    element: <PrivateRoute>
      <Profile></Profile>
    </PrivateRoute>,
  },{
  path: "/forgot",
  element: <ForgotPassword></ForgotPassword>
},
  {
    path: "/services",
    element: <Services></Services>,
  },
  {
    path: "*",
    element: <Page></Page>
  },
]);
export default Router;

import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Mentors from "../Pages/Mentors";
import Details from "../Pages/Details";






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
          const res = await fetch(`/public/mentor.json`);
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
    path: "/services",
    element: <h2>Services</h2>,
  },
  {
    path: "/profile",
    element: <h2>my profile</h2>,
  },
  {
    path: "/counselorsDetails/:id",
    element: <Details></Details> ,
    loader: async ({params}) => {
      const res = await fetch(`/public/mentor.json`);
      const data = await res.json();
    
      // Filter mentors that have a valid _id field
      const mentors = data.data.filter((mentor) => mentor._id ===params.id);
    
      return { mentors };
    }
    
},
  {
    path: "/auth",
    element: <h2>this auth</h2>,
  },
  {
    path: "*",
    element: <h2>error</h2>,
  },
]);
export default Router;

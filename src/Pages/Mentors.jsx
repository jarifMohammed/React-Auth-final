import { useLoaderData } from "react-router-dom";
import MentorCard from "../Components/MentorCard";


const Mentors = () => {
    const {mentors} = useLoaderData()
// console.log(mentors);
    return (
        <div className="">
         <h2 className="font-semibold mb-3 text-2xl from-neutral-800">Our Available Mentors</h2>


         <div  className="grid md:grid-cols-3   gap-4 justify-center">
            {
                mentors.map((m)=>(
                    <MentorCard key={m._id} mentor={m}></MentorCard>
                ))
            }

         </div>
        </div>
    );
};

export default Mentors;
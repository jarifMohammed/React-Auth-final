import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        fetch("../../public/mentorCategory.json")
            .then((res) => res.json())
            .then((data) => setCategory(data.data.mentor_category));
    }, []);

    
    return (
        <div className="flex justify-center font-quicksand">
            <div>
                <h2 className="font-bold text-2xl">
                    Experience our services as your choice
                </h2>
                
                <div className="flex justify-center gap-5">
                   

                
                <div className="flex gap-5 mt-5">
                    {category.map((c) => (
                        <NavLink to={`/mentorList/${c.category_id}`}
                         className="btn" key={c.category_id}>
                            {c.category_name}
                            </NavLink>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;

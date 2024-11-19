
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";


const HomeLayout = () => {
    return (
        <div className="font-quicksand">
            <section className="w-11/12 mx-auto py-3">
            <NavBar></NavBar>
            </section>
            
             
            <main className="w-11/12 mx-auto">
            <header className="w-11/12  mx-auto py-3">
                <Header></Header>
             </header>
             <section className="pt-5"></section>
             <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;
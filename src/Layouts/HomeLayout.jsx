
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";
import App from "../App";





const HomeLayout = () => {
    return (
        <>
        <Helmet><title>
            Home</title></Helmet>
            
         <div className="font-quicksand min-h-screen ">
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
            <div className="p-5 w-11/12 ">
            <App></App>
             
            </div>
            
            <Footer className=""></Footer>

        </div></>
       
    );
};

export default HomeLayout;
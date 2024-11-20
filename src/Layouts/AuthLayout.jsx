
import { Outlet } from 'react-router-dom';
import NavBar from "../Components/NavBar"
import { ToastContainer } from 'react-toastify';
const AuthLayout = () => {
    return (
        <div className='font-quicksand bg-orange-200'>
            <header className='py-3 w-11/12 mx-auto'>
        <NavBar ></NavBar>
            </header>
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
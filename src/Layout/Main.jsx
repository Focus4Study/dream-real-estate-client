import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";



const Main = () => {

    const location = useLocation()
    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('register')


    return (
        <div className="mx-auto">
            {noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer>}

        </div>
    );
};

export default Main;
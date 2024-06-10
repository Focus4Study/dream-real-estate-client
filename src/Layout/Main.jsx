import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";



const Main = () => {
    const location = useLocation()
    const noFooter = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('add-property')
    const noNavbar = location.pathname.includes('login') || location.pathname.includes('register')


    return (
        <div className="mx-auto">
            {noNavbar || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}

        </div>
    );
};

export default Main;
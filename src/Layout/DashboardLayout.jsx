import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Pages/Dashboard/DashboardNavbar/DashboardNavbar";


const DashboardLayout = () => {
    return (
        <div className="md:flex">
            <div className="justify-start">
                <DashboardNavbar></DashboardNavbar>
            </div>
            <div className="flex-grow">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;
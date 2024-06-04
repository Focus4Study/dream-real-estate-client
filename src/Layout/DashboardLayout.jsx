import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Pages/Dashboard/DashboardNavbar/DashboardNavbar";


const DashboardLayout = () => {
    return (
        <div className="flex items-start">
            <DashboardNavbar></DashboardNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;
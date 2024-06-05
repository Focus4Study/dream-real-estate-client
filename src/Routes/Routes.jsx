import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties/AllProperties";
import DetailsPage from "../Pages/DetailsPage/DetailsPage/DetailsPage";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Wishlist from "../Pages/Wishlist/Wishlist/Wishlist";
import PropertyBought from "../Pages/PropertyBought/PropertyBought/PropertyBought";
import Reviews from "../Pages/Reviews/Reviews/Reviews";
import DashboardLayout from "../Layout/DashboardLayout";
import ProfilePage from "../Pages/ProfilePage/ProfilePage/ProfilePage";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Registration/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-properties",
        element: <AllProperties></AllProperties>
      },
      {
        path: "/details-page",
        element: <DetailsPage></DetailsPage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },


    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>
      },
      {
        path: "/dashboard/property-bought",
        element: <PropertyBought></PropertyBought>
      },
      {
        path: "/dashboard/my-reviews",
        element: <Reviews></Reviews>
      },
      {
        path: "/dashboard/profile",
        element: <ProfilePage></ProfilePage>
      },
    ]
  },
]);
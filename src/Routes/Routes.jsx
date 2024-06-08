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
import ErrorPage from "../Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-properties",
        element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>
      },
      {
        path: "/property/details/:id",
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
        
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
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: "/dashboard/wishlist",
        element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path: "/dashboard/property-bought",
        element: <PrivateRoute><PropertyBought></PropertyBought></PrivateRoute>
      },
      {
        path: "/dashboard/my-reviews",
        element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
      },
      {
        path: "/dashboard/profile",
        element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
      },
    ]
  },
]);
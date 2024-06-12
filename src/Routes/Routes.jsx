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
import OfferPage from "../Pages/OfferPage/OfferPage/OfferPage";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Registration/Registration/Registration";
import ErrorPage from "../Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddProperty from "../Pages/AddUpdateProperty/AddProperty/AddProperty";
import UpdateProperty from "../Pages/AddUpdateProperty/UpdateProperty/UpdateProperty"
import PropertyTable from "../Pages/UtilizePropertyPages/PropertyTable/PropertyTable";
import ManageUsers from "../Pages/ManageUsers/ManageUsers/ManageUsers";
import ManageReviews from "../Pages/ManageReviews/ManageReviews/ManageReviews";
import ManageProperty from "../Pages/ManageProperty/ManageProperty/ManageProperty";
import OfferedProperties from "../Pages/OfferedProperties/OfferedProperties/OfferedProperties";
import PaymentPage from "../Pages/PaymentPage/PaymentPage/PaymentPage";

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
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/wishlist",
        element:<Wishlist></Wishlist>
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
      {
        path: "/dashboard/add-property",
        element: <AddProperty></AddProperty>
      },
      {
        path: "/dashboard/my-added-property",
        element: <PropertyTable></PropertyTable>
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "/dashboard/manageReviews",
        element: <ManageReviews></ManageReviews>
      },
      {
        path: "/dashboard/manageProperties",
        element: <ManageProperty></ManageProperty>
      },
      {
        path: "/dashboard/update/:id",
        element:<UpdateProperty></UpdateProperty>
      },
      {
        path: "/dashboard/offer/:id",
        element:<OfferPage></OfferPage>
      },
      {
        path: "/dashboard/offered-properties",
        element:<OfferedProperties></OfferedProperties>
      },
      {
        path: "/dashboard/property_bought",
        element:<PropertyBought></PropertyBought>
      },
      {
        path: "/dashboard/payment_page/id/:id",
        element:<PaymentPage></PaymentPage>
      },
      
    ]
  },
]);
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties/AllProperties";
import DetailsPage from "../Pages/DetailsPage/DetailsPage/DetailsPage";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/all-properties",
            element:<AllProperties></AllProperties>
        },
        {
            path:"/details-page",
            element:<DetailsPage></DetailsPage>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        },
      ]
    },
  ]);
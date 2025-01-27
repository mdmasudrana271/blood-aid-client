import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";
import AddEvent from "../pages/Dashboard/AddEvent/AddEvent";
import BloodRequest from "../pages/Dashboard/BloodRequest/BloodRequest";
import DonationHistory from "../pages/Dashboard/DonationHistory/DonationHistory";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import DashBoardLayout from "../Layout/DashBoardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "update_profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "events",
        element: <AddEvent></AddEvent>,
      },
      {
        path: "request",
        element: <BloodRequest></BloodRequest>,
      },
      {
        path: "history",
        element: <DonationHistory></DonationHistory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/update_profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/events",
        element: (
          <PrivateRoute>
            <AddEvent></AddEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/request",
        element: (
          <PrivateRoute>
            <BloodRequest></BloodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/history",
        element: (
          <PrivateRoute>
            <DonationHistory></DonationHistory>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

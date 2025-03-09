import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";
import AddEvent from "../pages/Dashboard/AddEvent/AddEvent";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Profile from "../pages/Dashboard/Profile/Profile";
import DonorDetails from "../pages/Dashboard/DonorDetails/DonorDetails";
import Contact from "../pages/Home/Contact/Contact";
import RequestPost from "../pages/Home/RequestPost/RequestPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update_profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-events",
        element: (
          <PrivateRoute>
            <AddEvent></AddEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/blood-request",
        element: (
          <PrivateRoute>
            <RequestPost></RequestPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/donor_details/:id",
        element: <DonorDetails></DonorDetails>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

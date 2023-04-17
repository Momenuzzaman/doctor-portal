import AddDoctor from "../../DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../DashBoard/AllUsers/AllUsers";
import DashBoard from "../../DashBoard/DashBoard/DashBoard";
import DashboardAppointment from "../../DashBoard/DashboardAppointment/DashboardAppointment";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes>
            <DashboardLayout></DashboardLayout>
        </PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardAppointment></DashboardAppointment>
            },
            {
                path: '/dashboard/all-users',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRoute> <AddDoctor></AddDoctor></AdminRoute>
            }
        ]
    }
]);

export default router;
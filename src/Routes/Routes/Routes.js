import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AppointmentPage from "../../Pages/AppointmentPage/AppointmentPage/AppointmentPage";
import Signup from "../../Pages/Signup/Signup";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyDashboard from "../../Pages/Dashboard/Dashboard/MyDashboard/MyDashboard";
import UserList from "../../UserList/UserList";
import AdminRoute from "../AdminRoute/AdminRoute";

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
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <AppointmentPage></AppointmentPage>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element: <MyDashboard></MyDashboard>
            },
            {
                path:'/dashboard/users',
                element: <AdminRoute><UserList></UserList></AdminRoute>
            }
        ]
    }


])

export default router;
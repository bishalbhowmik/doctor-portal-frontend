import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);

    return (


        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link>My DashBoard</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/users">User List</Link></li>
                            </>
                            
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
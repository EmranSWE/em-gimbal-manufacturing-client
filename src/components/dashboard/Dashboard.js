import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] =useAuthState(auth);
    const [admin]=useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="sidebar-dashboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">
                <h3 className='text-5xl text-primary'>Welcome to your Dashboard</h3>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="sidebar-dashboard" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Product</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                   {admin && <>
                   <li><Link to='/dashboard/users'>All Users</Link></li>
                   <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                    </> }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
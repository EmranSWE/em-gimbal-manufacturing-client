import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start ml-20">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='/contact'>Contacts</Link></li>
                            <li tabindex="0">
                                <Link className="justify-between" to='/about'>About Us
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>

                                </Link>
                                <ul className="p-2">
                                    <li><Link to='/about/sustainability'><a>sustainability 1</a></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">EM Gimbal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabindex="0">
                            <li><Link to='/about'>About US</Link></li>
                            <ul>
                                <li><Link to='/about/sustainability'><a>sustainability 1</a></Link></li>
                            </ul>
                        </li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/contact'>Contacts</Link></li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Menubar;
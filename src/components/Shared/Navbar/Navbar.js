import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img src={logo} alt=""/>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 ms-5" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/admin">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="#">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="#">Contract Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const DashNavLink = () => {
    return (
        <nav className="dashboard-nav-link">
            <Link className='dashboard-link' to='/dashboard'>My Dashboard</Link>
        </nav>
    );
};

export default DashNavLink;
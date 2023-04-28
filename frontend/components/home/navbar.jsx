import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';


const Navbar = () => (
    <header className="dashboard-header header">
        <nav className="nav-bar">
            <div className="title-div">
                <Link className="dashboard-title-link" to="/">
                    <FontAwesomeIcon className="logo" icon={solid('dumbbell')} />
                    <h1 className="title">RepLogger</h1> 
                </Link>
            </div> 
            <div className="info-div">
                <div className="nav-links-div">
                    <Link to="./login">Login</Link> 
                    <Link to="./signup">Register</Link>  
                </div>
            </div>
        </nav>
    </header>
);

export default Navbar;
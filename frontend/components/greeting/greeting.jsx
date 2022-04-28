import React from "react";
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const withUser = () => (
        <header className="header">
            <h1>WorkoutTracker</h1>
            <nav className="welcome-nav">
                <h2>Welcome {currentUser.username}!</h2>
                <button className="logout-button" onClick={logout}>Logout</button>
            </nav>
        </header>
    );

    const noUser = () => ( 
        <header className="header">
            <h1>WorkoutTracker</h1>
             <nav className="session-links-nav">
                <Link className="nav-link" to='/login'>
                    Sign In
                </Link> 
                <Link className="nav-link" to='/signup'>
                    Sign Up
                </Link>
            </nav>
        </header> 
    );
    return currentUser ? withUser() : noUser()
};

export default Greeting;


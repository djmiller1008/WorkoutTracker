import React from "react";
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const withUser = () => (
        <header>
            <h1>WorkoutTracker</h1>
            <nav>
                <h1>Welcome {currentUser.username}!</h1>
                <button onClick={logout}>Logout</button>
            </nav>
        </header>
    );

    const noUser = () => ( 
        <header>
            <h1>WorkoutTracker</h1>
             <nav>
                <Link to='/login'>
                    <button>Sign In</button>
                </Link> 
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
            </nav>
        </header> 
    );
    return currentUser ? withUser() : noUser()
};

export default Greeting;


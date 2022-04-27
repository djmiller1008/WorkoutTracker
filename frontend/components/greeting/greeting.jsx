import React from "react";

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
                <button>Sign In</button>
                <button>Sign Up</button>
            </nav>
        </header> 
    );
    return currentUser ? withUser() : noUser()
};

export default Greeting;


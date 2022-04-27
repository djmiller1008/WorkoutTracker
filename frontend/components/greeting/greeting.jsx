import React from "react";

const Greeting = ({ currentUser, logout }) => {
    const withUser = () => (
        <nav>
            <h1>Welcome {currentUser.username}!</h1>
            <button onClick={logout}>Logout</button>
        </nav>
    );

    const noUser = () => ( 
        <nav>
            <button>Sign In</button>
            <button>Sign Up</button>
        </nav>
    );
    return currentUser ? withUser() : noUser()
};

export default Greeting;


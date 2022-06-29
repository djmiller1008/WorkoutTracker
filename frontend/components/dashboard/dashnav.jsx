import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Dashnav = ({ currentUserEmail, logout }) => {
    const history = useHistory();

    const [logoutDropdown, setLogout] = useState(false);
    const [exercisesDropdown, setExercisesDropdown] = useState(false);

    const handleLogout = e => {
        e.preventDefault();
        logout().then(() => history.push('/'))  
    };

    const toggleLogout = () => {
        if (logoutDropdown) {
            setLogout(false)
        } else {
            setLogout(true)
        }
    };

    const displayLogout = () => {
        if (logoutDropdown) {
            return (
                <div className="dashnav-dropdown">
                    <Link to='/profile' className="email-dropdown-button">My Account</Link>
                    <button className="email-dropdown-button" onClick={handleLogout}>Logout</button>
                </div>
               
            )
        }
    };



    const toggleExercisesDropdown = () => {
        if (exercisesDropdown) {
            setExercisesDropdown(false)
        } else {
            setExercisesDropdown(true)
        }
    };

    const displayExercisesDropdown = () => {
        if (exercisesDropdown) {
            return (
                <div className="dashnav-dropdown-exercises">
                    <Link className="exercises-links" to="/exercises/all">All Exercises</Link>
                    <Link className="exercises-links" to="/categories/all">Categories</Link>
                </div>
            )
        }
    }
    
    const dropdownMenu = displayLogout();
    const dropdownExercises = displayExercisesDropdown();

    return (
        
        <header className="dashboard-header">
            <nav className="dashboard-nav">
                <div className="title-links-div">
                    <h1>My Dashboard</h1>
                    <div onMouseEnter={toggleExercisesDropdown} onMouseLeave={toggleExercisesDropdown} className="exercise-toggle-div">
                        <section className="exercises-toggle">Exercises</section>
                        {dropdownExercises}
                    </div>
                  
                </div>
                
                <div>
                    <div onMouseEnter={toggleLogout} onMouseLeave={toggleLogout} className="email-div">
                        <p className="email-display">{currentUserEmail}</p>
                        <FontAwesomeIcon icon={solid('caret-down')} />
                        {dropdownMenu}
                    </div>
                    
                    
                </div>
                
                
                    
            </nav>
        </header>
    )
    
};

export default Dashnav;

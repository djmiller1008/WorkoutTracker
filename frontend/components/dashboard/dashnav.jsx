import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Dashnav = ({ currentUserEmail, logout }) => {
    const history = useHistory();

    const [logoutDropdown, setLogout] = useState(false);
    const [exercisesDropdown, setExercisesDropdown] = useState(false);
    const [nutritionDropdown, setNutritionDropdown] = useState(false);

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
            setExercisesDropdown(false);
        } else {
            setExercisesDropdown(true);
        }
    };

    const toggleNutritionDropdown = () => {
        if (nutritionDropdown) {
            setNutritionDropdown(false);
        } else {
            setNutritionDropdown(true);
        }
    }

    const displayExercisesDropdown = () => {
        if (exercisesDropdown) {
            return (
                <div className="dashnav-dropdown-main">
                    <Link className="dashnav-links" to="/exercises/all">All Exercises</Link>
                    <Link className="dashnav-links" to="/categories/all">Categories</Link>
                    <Link className="dashnav-links" to="/exercises/new">Create a New Exercise</Link>
                    <Link className="dashnav-links" to="/exercises/user">My Exercises</Link>
                </div>
            )
        }
    }

    const displayNutritionDropdown = () => {
        if (nutritionDropdown) {
            return (
                <div className="dashnav-dropdown-main">
                    <Link className="dashnav-links">Food Items</Link>
                    <Link className="dashnav-links">Add a Food Item</Link>
                </div>
            )
        }
    }
    
    const dropdownMenu = displayLogout();
    const dropdownExercises = displayExercisesDropdown();
    const dropdownNutrition = displayNutritionDropdown();

    return (
        
        <header className="dashboard-header">
            <nav className="dashboard-nav">
                <div className="title-links-div">
                    <h1>My Dashboard</h1>
                    <div onMouseEnter={toggleExercisesDropdown} onMouseLeave={toggleExercisesDropdown} className="dashnav-toggle-div">
                        <section className="dashnav-toggle">Exercises</section>
                        {dropdownExercises}
                    </div>
                    <div onMouseEnter={toggleNutritionDropdown} onMouseLeave={toggleNutritionDropdown} className="dashnav-toggle-div">
                        <section className="dashnav-toggle">Nutrition</section>
                        {dropdownNutrition}
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

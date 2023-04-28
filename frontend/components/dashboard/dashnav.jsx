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
                    <p className="email-dropdown-button" onClick={handleLogout}>Logout</p>
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
                    <Link className="dashnav-links" to="/nutrition/items/all">My Food Items</Link>
                    <Link className="dashnav-links" to="/nutrition/items/new">Add a Food Item</Link>
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
                    <Link className="dashboard-title-link" to="/">
                        <FontAwesomeIcon className="logo" icon={solid('dumbbell')} />
                        <h1 className="title">RepLogger</h1> 
                    </Link>
                    <div className="exercise-nutrition-links-div">
                        <div onMouseEnter={toggleExercisesDropdown} onMouseLeave={toggleExercisesDropdown} className="dashnav-toggle-div">
                            <div className="dashnav-toggle">Exercises</div>
                            {dropdownExercises}
                        </div>
                        <div onMouseEnter={toggleNutritionDropdown} onMouseLeave={toggleNutritionDropdown} className="dashnav-toggle-div">
                            <div className="dashnav-toggle">Nutrition</div>
                            {dropdownNutrition}
                        </div>
                    </div>
                  
                </div>
                
                <div>
                    <div onMouseEnter={toggleLogout} onMouseLeave={toggleLogout} className="email-div">
                        <div className="email-display dashnav-toggle">{currentUserEmail}</div>
                        <div className="dashnav-toggle"><FontAwesomeIcon icon={solid('caret-down')} /></div>
                        {dropdownMenu}
                    </div>
                    
                    
                </div>
                
                
                    
            </nav>
        </header>
    )
    
};

export default Dashnav;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Dashnav = ({ currentUserEmail, logout }) => {
    const history = useHistory();

    const [dropdown, setDropdown] = useState(false);

    const handleLogout = e => {
        e.preventDefault();
        logout().then(() => history.push('/'))  
    };

    const toggleDropdown = () => {
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const displayDropdown = () => {
        if (dropdown) {
            return (
                <div className="dashnav-dropdown">
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
               
            )
        }
    };
    
    const dropdownMenu = displayDropdown();

    return (
        
        <header className="dashboard-header">
            <nav className="dashboard-nav">
                <h1>My Dashboard</h1>
                <div>
                    <div onClick={toggleDropdown} className="email-div">
                        <p className="email-display">{currentUserEmail}</p>
                        <FontAwesomeIcon icon={solid('caret-down')} />
                    </div>
                    
                    {dropdownMenu}
                </div>
                
                
                    
            </nav>
        </header>
    )
    
};

export default Dashnav;

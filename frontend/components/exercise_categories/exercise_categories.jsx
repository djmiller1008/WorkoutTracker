import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ExerciseCategories = ({ fetchAllCategories, categories }) => {
    useEffect(() => {
        fetchAllCategories();
    }, [])
    
    const renderCategories = () => {
        const names = categories.map((cat, i) => <p><Link to={`/categories/${cat.name}`} key={i}>{cat.name}</Link></p>)
        return names;
    };

    const display = categories.length > 0 ? renderCategories() : "";

    return (
        <div className="all-exercises">
            <nav className="dashboard-nav-link">
                <Link to="/dashboard" className="dashboard-link">My Dashboard</Link>
            </nav>
            <h1 className="subpage-h1">Exercise Categories</h1>
            <div className="categories-div">
                {display} 
            </div>
              
        </div>
    )
};

export default ExerciseCategories;
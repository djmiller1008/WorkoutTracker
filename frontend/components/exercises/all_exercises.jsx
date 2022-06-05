import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const AllExercises = ({ exercises, fetchExercises }) => {
    useEffect(() => {
        fetchExercises();
    }, []);

    const renderExercises = () => {
        const names = exercises.map((exe, i) => <p key={i} className="exercise-name">{exe}</p>);
        return names;
    }

    if (exercises.length > 0) {
        return (
            <div className="all-exercises">
                <nav className="workout-form-nav">
                    <Link to="/dashboard" className="dashboard-link">My Dashboard</Link>
                </nav>
                <h1 className="all-exercises-h1">All Exercises</h1>
                <div className="all-exercises-div">
                    {renderExercises()}
                </div>
            </div>
        )
    } else {
        return <div>Loading...</div>
    };
};

export default AllExercises;
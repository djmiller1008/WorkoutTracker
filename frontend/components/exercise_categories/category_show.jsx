import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryShow = ({ category, fetchExerciseCategory }) => {
    const params = useParams();
    
    useEffect(() => {
        fetchExerciseCategory(params.categoryName);
    }, []);
    
    const display = category.exercises ? category.exercises.map((exercise => <p>{exercise.name}</p>)) : "";
    const myExercisesDisplay = category.user_exercises ? category.user_exercises.map((
        exercise, i) => <p key={i}>{exercise.name}</p>) : "";


    return (
        <div>
            <nav className="dashboard-nav-link">
                <Link to="/dashboard" className="dashboard-link">My Dashboard</Link>
            </nav>
            <div>
                <h1 className="category-h1">{category.name}</h1>
                <div className="category-exercises-div">
                    {display}
                    {myExercisesDisplay}
                </div>
               
            </div>
        </div>
        )
};

export default CategoryShow;
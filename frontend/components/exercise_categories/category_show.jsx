import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DashnavContainer from "../dashboard/dashnav_container";

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
            <DashnavContainer />
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
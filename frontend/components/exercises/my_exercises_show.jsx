import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";
import MyExerciseItem from "./my_exercise_item";

const MyExercisesShow = ({ fetchExercises, exercises, deleteExercise }) => {

    useEffect(() => {
        fetchExercises();
    }, []);

    const renderExercises = () => {
        return exercises.map((exercise, i) => <MyExerciseItem key={i} exercise={exercise}
                                            deleteExercise={deleteExercise} />)
    }
    
    if (JSON.stringify(exercises).length > 0) {
        return (
            <div className="all-exercises">
                <DashNavLink />
                <h1 className="subpage-h1">My Exercises</h1>
                <div className="my-exercises-div">
                    {renderExercises()}
                </div>
                <section className="button-section">
                    <Link to="/exercises/new" className="create-new-exercise" >Create a New Exercise</Link>
                </section>
                
            </div>
        )
    } else {
        return (
                <div>
                    <DashNavLink />
                </div>
        )
    };
};

export default MyExercisesShow;
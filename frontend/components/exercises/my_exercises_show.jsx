import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MyExerciseItem from "./my_exercise_item";
import DashnavContainer from "../dashboard/dashnav_container";

const MyExercisesShow = ({ fetchExercises, exercises, deleteExercise }) => {

    useEffect(() => {
        fetchExercises();
    }, []);

    const renderExercises = () => {
        return exercises.map((exercise, i) => <MyExerciseItem key={i} exercise={exercise}
                                            deleteExercise={deleteExercise} />)
    }
    
    return (
        <>
            <DashnavContainer />
            <div className="all-exercises">
                <h1 className="subpage-h1">My Exercises</h1>
                <div className="my-exercises-div">
                    {renderExercises()}
                </div>
                <section className="button-section">
                    <Link to="/exercises/new" className="create-new-exercise" >Create a New Exercise</Link>
                </section>
            </div>
        </>
    ) 
};

export default MyExercisesShow;
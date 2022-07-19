import React from "react";
import { useEffect } from "react";
import DashNavLink from "../dashboard/dashnavlink";

const MyExercisesShow = ({ fetchExercises, exercises }) => {

    useEffect(() => {
        fetchExercises();
    }, [])

    const renderExercises = () => {
        const names = exercises.map((exe, i) => <p key={i} className="exercise-name">{exe}</p>);
        console.log(names)
        return names;
    }

    if (exercises.length > 0) {
        return (
            <div className="all-exercises">
                <DashNavLink />
                <h1 className="all-exercises-h1">My Exercises</h1>
                <div className="all-exercises-div">
                    {renderExercises()}
                </div>
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
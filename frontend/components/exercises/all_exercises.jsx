import React, { useEffect } from "react";
import DashnavContainer from "../dashboard/dashnav_container";

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
            <>
                <DashnavContainer />
                <div className="all-exercises">
                    <h1 className="subpage-h1">All Exercises</h1>
                    <div className="all-exercises-div">
                        {renderExercises()}
                    </div>
                </div>
            </>
        )
    } else {
        return <div>Loading...</div>
    };
};

export default AllExercises;
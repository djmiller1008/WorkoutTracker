import React, { useEffect } from "react";
import WorkoutItem from './workout_item';
import DashnavContainer from "../dashboard/dashnav_container";

const AllWorkouts = ({ fetchWorkouts, workouts }) => {
    useEffect(() => {
        fetchWorkouts();
    }, []);

    const renderWorkouts = () => {
        let display = [];
        if (workouts.length > 0) {
            workouts.forEach((workout, i) => {
                const workoutElement = <WorkoutItem key={i} workout={workout}/>
                display.push(workoutElement);
            })
            return (
                <section className="item-log-table-all">
                    {display}
                </section>
            )
        } else {
            return (
                <div>You Don't Have Any Workouts!</div>
            )
        } 
    };

    return (
        <>
            <DashnavContainer />
            <div className="all-items-div">
                <h1>My Workout Log</h1>
                {renderWorkouts()}
            </div>
        </>
    );
};

export default AllWorkouts;

    
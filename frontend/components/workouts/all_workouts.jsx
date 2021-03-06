import React, { useEffect } from "react";
import WorkoutItem from './workout_item';
import DashNavLink from "../dashboard/dashnavlink";

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
                <section className="workout-log-table-all">
                    {display}
                </section>
            )
        } else {
            return (
                <div className="no-workouts-div">You Don't Have Any Workouts!</div>
            )
        } 
    };

    return (
        <div className="all-workouts">
            <DashNavLink />
            
            <div className="all-workouts-div">
                <h1>Your Workouts</h1>
                {renderWorkouts()}
            </div>
        </div>
        
    );
};

export default AllWorkouts;

    
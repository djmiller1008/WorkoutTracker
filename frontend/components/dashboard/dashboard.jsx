import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashnavContainer from './dashnav_container';
import WorkoutItem from "../workouts/workout_item";


const Dashboard = ({ workouts, fetchWorkouts }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            fetchWorkouts(10).then(() => setLoading(false));
        }, 500);
        return () => clearTimeout(timer);
    }, [])

    const renderWorkouts = () => {
        let display = [];
        if (workouts.length > 0 && !loading) {
            workouts.slice(0, 10).forEach((workout, i) => {
                const workoutElement = <WorkoutItem key={i} workout={workout} />
                display.push(workoutElement);
            })
            return (
                <section className="workout-log-table">
                    {display}
                </section>
            )
        } else if (loading) {
            return <div className="no-workouts-div">Loading...</div>
        } else {
            return <div className="no-workouts-div">You Don't Have Any Workouts!</div>
        }
    };

    return (
        <div>
            <DashnavContainer />
          
            <div className="dashboard-content-div">
                <div className="my-workouts-div">
                    <h1>My Workout Log</h1>
                    
                    {renderWorkouts()}
                    <div className="all-workouts-link-div">
                        <Link className="dashboard-link"  to="./workouts/all">View All Workouts</Link>
                    </div>
                   
                </div>
                <div className="new-workout-link-div">
                    <Link className="dashboard-link" to="./workouts/new">Log A New Workout</Link>
                </div>
            </div>
        </div>
    )
    
};

export default Dashboard;
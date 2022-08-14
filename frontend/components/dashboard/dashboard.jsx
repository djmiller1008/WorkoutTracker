import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashnavContainer from './dashnav_container';
import WorkoutItem from "../workouts/workout_item";
import FoodDiaryItem from "../nutrition/food_diary_item";


const Dashboard = ({ workouts, foodDiaries, fetchWorkouts, fetchFoodDiaries }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            fetchWorkouts(10).then(() => setLoading(false));
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            fetchFoodDiaries(10);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const renderWorkouts = () => {
        let display = [];
        if (workouts.length > 0 && !loading) {
            workouts.forEach((workout, i) => {
                const workoutElement = <WorkoutItem key={i} workout={workout} />
                display.push(workoutElement);
            })
            return (
                <section className="dashboard-content-table">
                    {display}
                </section>
            )
        } else if (loading) {
            return <div className="no-content-div">Loading...</div>
        } else {
            return <div className="no-content-div">You Don't Have Any Workouts!</div>
        }
    };

    const renderFoodLogs = () => {
        let display = [];
        if (foodDiaries.length > 0 && !loading) {
            foodDiaries.forEach((foodDiary, i) => {
                const foodDiaryElement = <FoodDiaryItem key={i} foodDiary={foodDiary} />
                display.push(foodDiaryElement);
            })
            return (
                <section className="dashboard-content-table">
                    {display}
                </section>
            )
        } else if (loading) {
            return <div className="no-content-div">Loading...</div>
        }
        return <div className="no-content-div">You Don't Have Any Entries!</div>
    }

    return (
        <div>
            <DashnavContainer />
          
            <div className="dashboard-content-div">
                <div className="content-box-div">
                    <h1>My Workout Log</h1>
                    
                    {renderWorkouts()}
                    <div className="all-workouts-link-div">
                        <Link className="dashboard-link"  to="./workouts/all">View All Workouts</Link>
                    </div>
                   
                </div>
                <div className="content-box-div">
                    <h1>My Food Diary</h1>
                    {renderFoodLogs()}
                    <div className="all-workouts-link-div">
                        <Link className="dashboard-link" to="./food_diaries/all">View All Food Diaries</Link>
                    </div>
                </div>
                <div className="dashboard-link-div">
                    <Link className="dashboard-link main" to="./workouts/new">Log A New Workout</Link>
                    <Link className="dashboard-link main" to="./food_diary/new">Create a Food Diary Entry</Link>
                </div>
            </div>
        </div>
    )
    
};

export default Dashboard;
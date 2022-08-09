import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";

const FoodDiaryShow = ({ fetchFoodDiary, foodDiary }) => {
    const params = useParams();
    
    useEffect(() => {
        fetchFoodDiary(params.foodDiaryId)
    }, []);
    
    const renderDate = () => {
        if (foodDiary[params.foodDiaryId]) {
            return foodDiary[params.foodDiaryId].date;
        }
        return "";
    };

    return (
        <div>
            <DashNavLink />
            <div className="workout-log-div">
                <div className="log-title-div">
                    <h1 className="date-h1">Food Diary: {renderDate()}</h1>
                </div>

                <div className="new-exercise-link-div">
                    <Link to={`/food_diaries/${params.foodDiaryId}/new`}>
                        Add A New Food Item
                    </Link>
                    <button className="delete-button">Delete Food Diary</button>
                    
                </div>
            </div>
        </div>
    )
};

export default FoodDiaryShow;
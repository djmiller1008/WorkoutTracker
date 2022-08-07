import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
            </div>
        </div>
    )

};

export default FoodDiaryShow;
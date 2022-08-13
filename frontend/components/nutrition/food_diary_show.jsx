import React from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";
import FoodLogItem from "./food_log_item";

const FoodDiaryShow = ({ fetchFoodLogs, fetchFoodDiary, foodDiary, foodLogs, deleteFoodDiary }) => {
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        fetchFoodDiary(params.foodDiaryId);
        fetchFoodLogs(params.foodDiaryId);
    }, []);
    
    const renderDate = () => {
        if (foodDiary[params.foodDiaryId]) {
            return foodDiary[params.foodDiaryId].date;
        }
        return "";
    };

    const handleDelete = () => {
        deleteFoodDiary(params.foodDiaryId)
            .then(() => history.replace("/dashboard"))
    };

    let displayFoodLogs;
    let calories = '';
    let fat = '';
    let carbs = '';
    let protein = ''

    if (JSON.stringify(foodLogs) !== '{}') {
        displayFoodLogs = Object.values(foodLogs).map((foodLog, i) => { 
            if (foodLog.id !== undefined) {
                return <FoodLogItem key={i} foodLog={foodLog} />
            }
 
        });
        calories = foodLogs.nutrient_info.calories;
        fat = foodLogs.nutrient_info.fat;
        protein = foodLogs.nutrient_info.protein;
        carbs = foodLogs.nutrient_info.carbohydrates;
    } 
    
    return (
        <div>
            <DashNavLink />
            <div className="workout-log-div">
                <div className="food-log-content-div">
                    <div className="food-log-food-items-div">
                        <div className="log-title-div">
                            <h1 className="date-h1">Food Diary: {renderDate()}</h1>
                        </div>

                        <div className="display-all-logs-div">
                            {displayFoodLogs}
                        </div>
                    </div>
                    

                    <div className="day-totals-div">
                        <h1>Nutrient Info</h1>
                        <section className="total-calories-section">
                            <p>Calories: {calories}</p>
                            <p>Fat: {fat}g</p>
                            <p>Carbohydrates: {carbs}g</p>
                            <p>Protein: {protein}g</p>
                        </section>
                    </div>
                </div>

                <div className="new-exercise-link-div">
                    <Link to={`/food_diaries/${params.foodDiaryId}/new`}>
                        Add A New Food Item
                    </Link>
                    <button onClick={handleDelete} className="delete-button">Delete Food Diary</button>
                    
                </div>
            </div>
        </div>
    )
};

export default FoodDiaryShow;
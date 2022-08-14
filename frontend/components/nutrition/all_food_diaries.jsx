import React from "react";
import { useEffect } from "react";
import DashNavLink from "../../components/dashboard/dashnavlink";
import FoodDiaryItem from "./food_diary_item";

const AllFoodDiaries = ({ foodDiaries, fetchAllFoodDiaries }) => {

    useEffect(() => {
        fetchAllFoodDiaries();
    }, []);

    const renderFoodDiaries = () => {
        let display = [];
        if (foodDiaries.length > 0) {
            foodDiaries.forEach((foodDiary, i) => {
                const foodDiaryElement = <FoodDiaryItem key={i} foodDiary={foodDiary} />
                display.push(foodDiaryElement);
            })
            return (
                <section className="item-log-table-all">
                    {display}
                </section>
            )
        } else {
            return (
                <div>You Don't Have Any Food Diaries!</div>
            )
        }
    }

    return (
        <div>
            <DashNavLink />
            <div className="all-items-div">
                <h1>Your Food Diaries</h1>
                {renderFoodDiaries()}
            </div>
        </div>
    )


};

export default AllFoodDiaries;

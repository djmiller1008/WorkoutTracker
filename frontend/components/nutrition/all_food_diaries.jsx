import React, { useEffect } from "react";
import DashnavContainer from "../dashboard/dashnav_container";
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
        <>
            <DashnavContainer />
            <div className="all-items-div">
                <h1>My Food Diaries</h1>
                {renderFoodDiaries()}
            </div>
        </>
    )


};

export default AllFoodDiaries;

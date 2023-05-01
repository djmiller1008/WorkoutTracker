import React from "react";

const FoodLogItem = ({ foodLog }) => {
    return (
        <div className="single-food-log-item">
            <h2>{foodLog.name}</h2>
            <div className="food-log-subinfo-div">
                <section>
                    Servings: {foodLog.servings}
                </section>
                <section>
                    Calories: {foodLog.calories}
                </section>
            </div>
        </div>
    );
};

export default FoodLogItem;
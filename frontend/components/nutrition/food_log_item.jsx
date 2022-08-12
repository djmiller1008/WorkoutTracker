import React from "react";

const FoodLogItem = ({ foodLog }) => {

    return (
        <div className="workout-log-main-content">
            <div className="single-food-log-item">
                <h2>{foodLog.name}</h2>
                <section className="servings-section">
                    Servings: {foodLog.servings}
                </section>
            </div>
        </div>
    )
}

export default FoodLogItem;
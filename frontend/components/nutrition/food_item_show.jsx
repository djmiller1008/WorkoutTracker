import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";

const FoodItemShow = ({ fetchFoodItem, foodItem }) => {
    const params = useParams();
    
    useEffect(() => {
        fetchFoodItem(params.id);
    }, []);

    const renderFoodItem = () => {
    
        if (Object.keys(foodItem).length > 0) {
       
            return (
                <div className="food-show-div">
                    <h1 className="subpage-h1">{foodItem.name}</h1>
                    <div>
                        <section className="food-item-info-section">
                            <p>Calories:</p>
                            <p>{foodItem.calories}</p>
                        </section>
                        <section className="food-item-info-section">
                            <p>Fat:</p>
                            <p>{foodItem.fat}</p>
                        </section>
                        <section className="food-item-info-section">
                            <p>Carbohydrates:</p>
                            <p>{foodItem.carbohydrates}</p>
                        </section>
                        <section className="food-item-info-section">
                            <p>Protein:</p>
                            <p>{foodItem.protein}</p>
                        </section>
                    </div>
                </div>
            )
        }
    } 
    
   
    return (
        <div>
            <DashNavLink />
            <div>
                {renderFoodItem()}
            </div>
        </div>
       
    )

};

export default FoodItemShow;
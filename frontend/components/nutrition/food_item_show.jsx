import React from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";

const FoodItemShow = ({ fetchFoodItem, deleteFoodItem, foodItem }) => {
    const params = useParams();
    const history = useHistory();
    
    useEffect(() => {
        fetchFoodItem(params.id);
    }, []);

    const handleDelete = event => {
        event.preventDefault();
        deleteFoodItem(foodItem.id)
            .then(() => history.replace('/nutrition/items/all'))
    };

    const renderFoodItem = () => {
        const fatUnit = (foodItem.fat === null) ? "-" : "g";
        const proteinUnit = (foodItem.protein === null) ? "-" : "g";
        const carbohydratesUnit = (foodItem.carbohydrates === null) ? "-" : "g";
        if (Object.keys(foodItem).length > 0) {
       
            return (
                <div className="food-show-div">
                    <h1 className="subpage-h1">{foodItem.name}</h1>
                    <div className="food-show-inner-div">
                        <section className="food-item-info-section">
                            <p>Calories:</p>
                            <p>{foodItem.calories}</p>
                        </section>
                        <section className="food-item-info-section">
                            <p>Fat:</p>
                            <p>{foodItem.fat}{fatUnit}</p>
                        </section>
                        <section className="food-item-info-section">
                            <p>Carbohydrates:</p>
                            <p>{foodItem.carbohydrates}{carbohydratesUnit}</p>
                        </section>
                        <section className="food-item-info-section">
                            <p>Protein:</p>
                            <p>{foodItem.protein}{proteinUnit}</p>
                        </section>
                    </div>
                    <button onClick={handleDelete} className="delete-button">Delete Food Item</button>
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
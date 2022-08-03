import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FoodItemShow = ({ fetchFoodItem, foodItem }) => {
    const params = useParams();
    
    useEffect(() => {
        fetchFoodItem(params.id);
    }, []);

    const renderFoodItem = () => {
    
        if (foodItem) {
            
            return <p>hi</p>
        }
    }
    
   
    return (
        <section>
            {renderFoodItem()}
        </section>
    )

};

export default FoodItemShow;
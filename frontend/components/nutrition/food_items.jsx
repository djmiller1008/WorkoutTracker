import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";

const FoodItems = ({ foodItems, fetchAllFoodItems }) => {
    useEffect(() => {
       fetchAllFoodItems();
    }, [])

    const renderFoodItems = () => {
        if (JSON.stringify(foodItems).length > 0) {
            return Object.values(foodItems).map(((foodItem, i) => <Link key={i} to={`/nutrition/items/${foodItem.id}`}>{foodItem.name}</Link>))
        }
    }

    return (
        <div>
            <DashNavLink />
            <div className="food-items-main-div">
                <h1 className="subpage-h1">My Food Items</h1>
                <div>
                    {renderFoodItems()}
                </div>
            </div>
            
           
        </div>
    )

};



export default FoodItems;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashnavContainer from "../dashboard/dashnav_container";

const FoodItems = ({ foodItems, fetchAllFoodItems }) => {
    useEffect(() => {
       fetchAllFoodItems();
    }, [])

    const renderFoodItems = () => {
        if (!foodItems.hasOwnProperty("name")) {
            return Object.values(foodItems).map(((foodItem, i) => <p key={i} className="food-item-p"><Link className="food-item-link" key={i} to={`/nutrition/items/${foodItem.id}`}>{foodItem.name}</Link></p>))
        }
    }

    return (
        <>
            <DashnavContainer />
            <div className="food-items-main-div">
                <h1 className="subpage-h1">My Food Items</h1>
                <div className="all-food-items-div">
                    {renderFoodItems()}
                </div>
                <Link className="create-new-exercise" to="/nutrition/items/new">Create a New Food Item</Link>
            </div>
        </>
    )
};

export default FoodItems;

import React from "react";
import { useState } from "react";

const FoodLogForm = ({ createFoodLog, userId }) => {
    const [formData, setFormData] = useState({
        food_item_id: '',
        user_id: userId,
        servings: '',
        food_diary_id: '',
        name: ''
    })

    return (
        <div>
            hello
        </div>
    )

};

export default FoodLogForm;
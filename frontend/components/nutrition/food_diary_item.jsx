import React from "react";
import { Link } from 'react-router-dom';

const FoodDiaryItem = ({ foodDiary }) => {
    return (
        <Link to={`/food_diaries/${foodDiary.id}`}>
            <p className="table-date">{foodDiary.date}</p>
        </Link>
    )
};

export default FoodDiaryItem;
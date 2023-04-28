import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashnavContainer from "../dashboard/dashnav_container";

const ExerciseCategories = ({ fetchAllCategories, categories }) => {
    useEffect(() => {
        fetchAllCategories();
    }, [])
    
    const renderCategories = () => {
        const names = categories.map((cat, i) => <p><Link to={`/categories/${cat.name}`} key={i}>{cat.name}</Link></p>)
        return names;
    };

    const display = categories.length > 0 ? renderCategories() : "";

    return (
        <>
            <DashnavContainer />
            <div className="all-exercises">
                <h1 className="subpage-h1">Exercise Categories</h1>
                <div className="categories-div">
                    {display} 
                </div>
            </div>
        </>
    )
};

export default ExerciseCategories;
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DashnavContainer from "../dashboard/dashnav_container";

const UserExerciseForm = ({ userId, fetchAllCategories, createUserExercise, categories }) => {
    const history = useHistory();
   
    const [formData, setFormData] = useState({
        user_id: userId,
        exercise_category_id: '',
        name: ''
    });


    useEffect(() => {
        fetchAllCategories();
    }, [])

    const handleInput = (e) => {
        e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserExercise(formData)
            .then(() => history.replace("/exercises/user"));
    }

    const renderCategories = () => {
        if (categories.length > 0) {
            let categoryNames = [];
            categories.map((category, i) => {
                categoryNames.push(<option key={i} value={category.id}>{category.name.toUpperCase()}</option>)
            });
            return categoryNames;
        } else {
            return "";
        }
    }

    return (
        <>
            <DashnavContainer />
            <div className="subpage-container">
                <h1 className="subpage-h1">Create a New Exercise</h1>
                <form className="user-exercise-form">
                    <label>Exercise Name</label>
                    <input className="exercise-input" type="text" name="name"
                            onChange={handleInput}
                    />

                    <label>Exercise Category</label>
                    <select className="exercise-input" name="exercise_category_id" onChange={handleInput}>
                        <option value="" disabled selected>Select your option</option>
                        {renderCategories()}
                    </select>

                    <button className="create-new-exercise" onClick={handleSubmit}>Create Exercise</button>
                </form>
            </div>
        </>
    )
};

export default UserExerciseForm;
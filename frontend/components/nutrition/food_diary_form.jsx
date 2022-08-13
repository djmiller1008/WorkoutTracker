import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";

const FoodDiaryForm = ({ userId, createFoodDiary, errors, clearErrors }) => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        user_id: userId,
        date: ''
    });

    useEffect(() => {
        clearErrors();
    }, []);

    const handleInput = property => {
        return event => setFormData({...formData, [property]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        createFoodDiary(formData)
            .then(foodDiary => history.push(`/food_diaries/${Object.values(foodDiary.diary)[0].id}`))
    };

    const renderErrors = () => {
        if (errors.length > 0) {
            return errors.map((err, i) => <p key={i}>{err}</p>)
        }
    }

    return (
        <div>
            <DashNavLink />
            <div className="form-errors-div">
                {renderErrors()}
            </div>
            <div className="new-form-div">
                
                <h1>Pick a Day for your Food Diary</h1>
                <form onSubmit={handleSubmit} className='new-content-form'>
                    <input className="date-input" type='date'
                            onChange={handleInput('date')} />
                    <button className="create-button">Create Food Diary</button>
                </form>
            </div>
        </div>
    )

};

export default FoodDiaryForm;
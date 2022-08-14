import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";

const FoodItemForm = ({ createFoodItem, userId, errors, clearErrors }) => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        user_id: userId,
        name: '',
        calories: '',
        fat: '',
        protein: '',
        carbohydrates: ''
    });

    useEffect(() => {
        clearErrors();
    }, []);


    const handleInput = property => {
        return event => setFormData({...formData, [property]: event.target.value })
    };

    const handleSubmit = event => {
        event.preventDefault();

        createFoodItem(formData)
            .then(() => history.replace('/nutrition/items/all'))
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
            <h1 className="subpage-h1">Create a Food Item</h1>
            
            <form className="food-item-form">

                <section className="food-item-form-section">
                    <label>Food Item Name</label>
                    <input className="food-item-name-input" 
                            type='text'
                            onChange={handleInput('name')} />
                </section>

                <section className="food-item-form-section">
                    <label>Calories</label>
                    <input className="food-item-number-input"
                            type='number'
                            onChange={handleInput('calories')} />
                </section>

                <section className="food-item-form-section">
                    <label>Fat (g)</label>
                    <input className="food-item-number-input"
                            type='number'
                            onChange={handleInput('fat')} />
                </section>

                <section className="food-item-form-section">
                    <label>Carbohydrates (g)</label>
                    <input className="food-item-number-input"
                            type='number'
                            onChange={handleInput('carbohydrates')} />
                </section>

                <section className="food-item-form-section">
                    <label>Protein (g)</label>
                    <input className="food-item-number-input"
                             type='number'
                             onChange={handleInput('protein')} />
                </section>

                <button onClick={handleSubmit} className="create-button">Add Food Item</button>
            </form>
        </div>
    )

};

export default FoodItemForm;
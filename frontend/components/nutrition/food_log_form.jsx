import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";

const FoodLogForm = ({ clearErrors, fetchAllFoodItems, createFoodLog, userId, foodItems, errors }) => {
    const params = useParams();
    const history = useHistory();

    const [formData, setFormData] = useState({
        food_item_id: '',
        user_id: userId,
        servings: '',
        food_diary_id: params.foodDiaryId,
        name: ''
    });

    useEffect(() => {
        fetchAllFoodItems();
        clearErrors();
    }, []);


   
    const handleInput = property => {
        return event => setFormData({...formData, [property]: event.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        createFoodLog(formData)
            .then(() => history.replace(`/food_diaries/${params.foodDiaryId}`))
    };

    const selectFoodItemName = name => {
        event.preventDefault();
        return () => setFormData({...formData, name: name});
    };

    const matches = () => {
        let matches = [];
        let found = false;
        if (formData.name.length === 0) {
            return matches; 
        }  

        Object.values(foodItems).forEach(foodItem => {
            let partialName = foodItem.name.slice(0, formData.name.length);
            if (formData.name === foodItem.name) {
                found = true;
                return;
            } else if (partialName.toLowerCase() === formData.name.toLowerCase()) {
                matches.push(foodItem.name);
            }
        })

        if (matches.length === 0 && found === false) {
            matches.push('No Food Items Found');
            return matches;
        }

        return matches;
    }

    const possibleFoodItems = matches().map((match, i) => {
        if (match === 'No Food Items Found') {
            return <span>{match}</span>
        } else {
            return <li onClick={selectFoodItemName(match)} key={i}>{match}</li>
        }
    });
  
    const renderErrors = () => {
        if (errors.length > 0) {
            return errors.map((err, i) => <p key={i}>{err}</p>)
        }
    }

    return (
        <div>
            <DashNavLink />
            <div className="food-log-main-form-div">
                <div className="form-errors-div">
                    {renderErrors()}
                </div>
                <form className="food-log-form">
                    <div className="form-section">
                        <label>Food Item:</label>
                        <input type='text' value={formData.name}
                                onChange={handleInput('name')}
                        />
                    </div>
                    <ul className="possible-food-items">
                        {possibleFoodItems}
                    </ul>

                    <section className="form-section">
                        <label>Servings:</label>
                        <input type='number' min='1'
                                onChange={handleInput('servings')}
                        />
                    </section>
                    <section className="form-section">
                        <button className="log-submit" onClick={handleSubmit}>Add Food Log</button>
                    </section>
                   
                </form>
            </div>
        </div>
    )

};

export default FoodLogForm;
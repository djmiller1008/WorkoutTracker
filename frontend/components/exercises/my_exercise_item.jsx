import React from "react";

const MyExerciseItem = ({exercise, deleteExercise}) => {

    const handleDelete = (e) => {
        e.preventDefault();
        deleteExercise(e.target.value);
    }

    return (
        <div className="my-exercise-item-div">
            <p>{exercise[0]}</p>
            <button value={exercise[1]} onClick={handleDelete}>x</button>
        </div>
    )
};

export default MyExerciseItem;
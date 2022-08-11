import React from "react";

const WorkoutLogItem = ({ log }) => {
    
    const displayLog = () => {
        let weight;
        const display = log.map((set, i) => {

            if (set[0].weight === 0) {
                weight = '';
            } else {
                weight = set[0].weight;
            }

            return (
            <div key={i} className="single-log-div">
                <span>{set[0].reps} {set[0].rep_unit} * {weight} {set[0].weight_unit}</span>
            </div>
            )
        })
        return display;

    }

    if (log) {
      
        return (
            <div className="workout-log-main-content">
                <div className="log-big-div">
                    <h2>{log[0][0].name}</h2>
                    <div className="display-logs-div">
                        {displayLog()}
                    </div>
                    
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
};

export default WorkoutLogItem;

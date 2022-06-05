import React from "react";

const WorkoutLogItem = ({ log }) => {
    
    const displayLog = () => {
        const display = log.map((set, i) => {
         
            return (
            <div key={i} className="single-log-div">
                <span>{set[0].reps} {set[0].rep_unit} * {set[0].weight} {set[0].weight_unit}</span>
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

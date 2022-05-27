import React from "react";
import { createExercise } from "../actions/exercise_actions";

class FetchExercises extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        fetch("https://wger.de/api/v2/exercise.json?limit=1000&offset=1000?language=2")
            .then(res => res.json())
            .then(result => {
                console.log(result.results)
            })
           
    };

    render() {
        <div></div>
    }
};
export default FetchExercises;
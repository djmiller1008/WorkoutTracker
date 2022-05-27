import React from "react";
import SignupFormContainer from './signup_form_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';


const SignupContent = () => (
    <div className="signup-content-div">
        <div className="signup-content-info">
            <h2>RepLogger Helps You...</h2>
            <ul>
                <li><FontAwesomeIcon className='hash-icon' icon={solid('hashtag')} />Achieve Your Fitness Goals</li>                
                <li><FontAwesomeIcon className='hash-icon' icon={solid('hashtag')} />Track And Compare Workouts</li>     
                <li><FontAwesomeIcon className='hash-icon' icon={solid('hashtag')} />Measure Your Progress</li>
                <li><FontAwesomeIcon className='hash-icon' icon={solid('hashtag')} />Stay Motivated!</li>
            </ul>
        </div>
       
        <div className="signup-form-div">
            <h2>Get Started Today!</h2>
            <SignupFormContainer />
        </div>
        
    </div>
);

export default SignupContent;
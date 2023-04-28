import React from "react";
import Navbar from "../home/navbar";
import SignupFormContainer from './signup_form_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';


const SignupContent = () => (
    <>
        <Navbar />
        <div className="signup-content-div">
            <div className="signup-content-info">
                <h1>RepLogger Helps You...</h1>
                <ul>
                    <li><FontAwesomeIcon className='hash-icon' icon={solid('hashtag')} />Achieve Your Fitness Goals</li>                
                    <li><FontAwesomeIcon className='hash-icon' icon={solid('hashtag')} />Track And Compare Workouts</li>     
                    <li><FontAwesomeIcon className='hash-icon' icon={solid('hashtag')} />Measure Your Progress</li>
                    <li><FontAwesomeIcon className='hash-icon' icon={solid('hashtag')} />Stay Motivated!</li>
                </ul>
            </div>
            <div className="signup-form-div">
                <h1>Get Started Today!</h1>
                <SignupFormContainer />
            </div>
        </div>
    </>
);

export default SignupContent;
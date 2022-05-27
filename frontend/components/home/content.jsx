import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

const Content = () => (
    <div className="main-content">
        <section className="get-started">
            <h2>Start Logging Your Workouts Today!</h2>
            <Link to="./signup">Register</Link>
        </section>
        <section className="info-section">
            <FontAwesomeIcon className="content-icon" icon={regular("pen-to-square")} />
            <div className="info-p">
                <section className="content-section">
                    <FontAwesomeIcon className="dot-icon" icon={regular('circle-dot')} />
                    <p>Easily Track And Manage All Of Your Workouts</p> 
                </section>
                <section className="content-section">
                    <FontAwesomeIcon className="dot-icon" icon={regular('circle-dot')} />
                    <p>A Solution For Everyone To Record Progress In The Gym</p>
                </section>
            </div>
            
        </section>

    </div>
);

export default Content;
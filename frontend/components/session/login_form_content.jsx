import React from 'react';
import LoginFormContainer from './login_form_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Navbar from '../home/navbar';


 

const LoginFormContent = () => (
    <>
        <Navbar />
        <div className='login-form-div'>
            <div className='quote-div'>
                <p>"Sometimes A Workout</p>
                <p>Is All The</p>
                <p>Therapy You Need"</p>
            </div>
            <div>
                <section className='login-page-section'>
                    <FontAwesomeIcon className="login-icon" icon={solid("medal")} />
                    <h1>Welcome Back</h1>
                    <FontAwesomeIcon className="login-icon" icon={solid("medal")} />
                </section>
                <LoginFormContainer />
            </div> 
        </div>
    </>
);

export default LoginFormContent;
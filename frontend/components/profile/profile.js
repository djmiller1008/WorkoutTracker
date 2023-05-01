import React from "react";
import { Link } from "react-router-dom";
import DashnavContainer from "../dashboard/dashnav_container";

const Profile = ({ currentUser }) => {
    return (
        <>
            <DashnavContainer />
            <div className="account-page-div">
                <section className="account-management-section">
                    <h1>Account Management</h1>
                    <ul className="account-links-ul">
                        <li><Link to="/profile/email">Change Email</Link></li>
                    </ul>
                </section>
                <section className="account-management-section">
                    <h1>Profile</h1>
                    <ul className="profile-ul">
                        <li>Email: {currentUser.email}</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Profile;
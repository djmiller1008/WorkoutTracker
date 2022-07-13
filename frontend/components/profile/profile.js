import React from "react";

import { Link } from "react-router-dom";
import DashNavLink from "../dashboard/dashnavlink";

const Profile = ({ currentUser }) => {
    return (
        <div>
            <DashNavLink />
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
        </div>
    )
}

export default Profile;
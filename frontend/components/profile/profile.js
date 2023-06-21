import React from "react";
import { Link } from "react-router-dom";
import DashnavContainer from "../dashboard/dashnav_container";

const Profile = ({ currentUser, updateWeightUnit }) => {

    const handleUpdateWeightUnit = e => {
        const selected = e.target.value;
        updateWeightUnit(selected);
    }

    return (
        <>
            <DashnavContainer />
            <div className="account-page-div">
                <section className="account-management-section">
                    <h1>Account Management</h1>
                    <ul className="account-links-ul">
                        <li><Link to="/profile/email">Change Email</Link></li>
                    </ul>
                    <h1 className="preferences-h1">Preferences</h1>
                    <form onChange={handleUpdateWeightUnit} className="weight-unit-preference-form">
                        <input name="weight_unit" id="kg" type="radio" value="kg"
                            defaultChecked={currentUser.weight_unit === "kg" ? true : false}></input>
                        <label className="weight-unit-label" htmlFor="kg">kg</label>
                        <input name="weight_unit" id="lbs" type="radio" value="lbs"
                            defaultChecked={currentUser.weight_unit === "lbs" ? true : false}></input>
                        <label className="weight-unit-label" htmlFor="lbs">lbs</label>
                        <input name="weight_unit" id="bw" type="radio" value="bw"
                            defaultChecked={currentUser.weight_unit === "bw" ? true : false}></input>
                        <label className="weight-unit-label" htmlFor="bw">bw</label>
                        <input name="weight_unit" id="none" type="radio" value="none"
                            defaultChecked={currentUser.weight_unit === "none" ? true : false}></input>
                        <label className="weight-unit-label" htmlFor="none">None</label>
                    </form>
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
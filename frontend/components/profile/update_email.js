import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DashnavContainer from "../dashboard/dashnav_container";

const UpdateEmail = ({ currentUser, updateEmail, errors, clearErrors }) => {
    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [confirmNewEmail, setConfirmNewEmail] = useState('');
    const history = useHistory();

    useEffect(() => {
        clearErrors();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (oldEmail !== currentUser.email) {
            alert("Your current email doesn't match the email in our records. Please try again.")
        } else if (newEmail !== confirmNewEmail) {
            alert("The email you are confirming doesn't match the new email you provided");
        } else {
            const data = { id: currentUser.id, email: newEmail }
            updateEmail(data)
                .then(() => history.replace('/profile'));
        }
    }

    const handleNewEmail = (e) => {
        setNewEmail(e.target.value);
    }

    const handleOldEmail = (e) => {
        setOldEmail(e.target.value);
    }

    const handleConfirmNewEmail = (e) => {
        setConfirmNewEmail(e.target.value);
    }

    const renderErrors = () => {
        if (errors.length > 0) {
            return errors.map((error, i) => <p className="errors-li" key={i}>{error}</p>)
        } 
        return "";
    }
    
    return (
        <>
            <DashnavContainer />
            <div className="errors-div">
                    {renderErrors()}
            </div>
            <form className="update-email-form">
                <label>Current Email Address</label>
                <input onChange={handleOldEmail}  type="text"></input>
                <label>New Email</label>
                <input onChange={handleNewEmail} type='text'></input>
                <label>Confirm New Email</label>
                <input onChange={handleConfirmNewEmail} type='text'></input>
                <button onClick={handleSubmit} type='submit'>Change Email</button>
            </form>
        </>
    )

}

export default UpdateEmail;
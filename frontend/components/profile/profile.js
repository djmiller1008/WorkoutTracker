import React from "react";
import { useState } from "react";

const Profile = ({ currentUser, updateEmail }) => {
    const [newEmail, setNewEmail] = useState('');


    const handleSubmit = e => {
        e.preventDefault()
        const data = { id: currentUser.id, email: newEmail }
        updateEmail(data);
    }

    const handleTextInput = (e) => {
        setNewEmail(e.target.value);
    }

    return(
        <div>
            <form>
                <label>New Email</label>
                <input onChange={handleTextInput} type='text'></input>
                <button onClick={handleSubmit} type='submit'>Change Email</button>
            </form>
        </div>
    )

}

export default Profile;
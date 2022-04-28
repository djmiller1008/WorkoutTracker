import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    update(property) {
        return (e) => this.setState({ [property]: e.target.value})
    };

    handleSubmit(e) {

    }

    render() {
        return(
            <div>
                <form>
                    <label>Username</label>
                    <input type='text'
                            value={this.state.username}
                            onChange={this.update('username')}                
                    />

                    <label>Password</label>
                    <input type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                    />

                    <button></button>
                </form>
            </div>
        )
    };
};

export default SessionForm;


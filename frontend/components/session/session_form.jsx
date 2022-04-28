import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        if (this.props.errors.length > 0) {
            this.props.clearErrors();
        };
    };

    update(property) {
        return (e) => this.setState({ [property]: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.login) {
            this.props.login(this.state);
        } else {
            this.props.signup(this.state);
        }

    };

    render() {
        const buttonText = this.props.login ? 'Login' : 'Signup'
        const errors = this.props.errors;
        return(
            <div>
                {errors}
                <form className="session-form">
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

                    <button onClick={this.handleSubmit}>{buttonText}</button>
                </form>
            </div>
        )
    };
};

export default SessionForm;


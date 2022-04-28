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

    renderErrors() {
        return(
          <ul className="errors-ul">
            {this.props.errors.map((error, i) => (
              <li className="errors-li" key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }

    render() {
        const buttonText = this.props.login ? 'Login' : 'Signup';
        
        return(
            <div>
                {this.renderErrors()}
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


import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
            this.props.login(this.state)
                .then(() => this.props.history.push('/dashboard'));
        } else {
            this.props.signup(this.state)
                .then(() => this.props.history.push('/dashboard'))
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
            <div className="session-form-div">

                <div className="errors-div">
                    {this.renderErrors()}
                </div>
                <form className="session-form">
                    <label>Email</label>
                    <input type='text'
                            value={this.state.email}
                            onChange={this.update('email')}                
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

export default withRouter(SessionForm);

